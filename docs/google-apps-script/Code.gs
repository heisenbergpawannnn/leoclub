/**
 * Leo Club of Kathmandu Budigandaki — "Become a Member" form backend.
 *
 * Paste this into the Apps Script project bound to whichever Google Sheet
 * should collect membership applications — including an existing sheet you
 * already use (e.g. the one your Google Form already writes to). It writes
 * to its own tab (SHEET_NAME below) so it never touches or reorders any
 * existing tab/data already in that spreadsheet. See SETUP.md in this
 * folder for the full step-by-step deployment guide.
 *
 * Set FOLDER_ID below to the Google Drive folder where uploaded photos and
 * payment screenshots should be saved.
 */

const FOLDER_ID = "PASTE_YOUR_DRIVE_FOLDER_ID_HERE";
const SHEET_NAME = "Site Submissions";

const COLUMNS = [
  "Timestamp",
  "Email",
  "Full Name",
  "Club Designation",
  "Temporary Address",
  "Permanent Address",
  "Contact Number",
  "Gender",
  "Blood Group",
  "Date of Birth",
  "Occupation/Status",
  "How did you hear about us",
  "Expectation from the club",
  "Photo URL",
  "Payment Screenshot URL",
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();

    ensureHeaderRow(sheet);

    const photoUrl = saveUploadedFile(data.photoName, data.photoType, data.photoBase64);
    const paymentUrl = saveUploadedFile(data.paymentName, data.paymentType, data.paymentBase64);

    sheet.appendRow([
      new Date(),
      data.email || "",
      data.fullName || "",
      data.clubDesignation || "",
      data.temporaryAddress || "",
      data.permanentAddress || "",
      data.contactNumber || "",
      data.gender || "",
      data.bloodGroup || "",
      data.dob || "",
      data.occupation || "",
      data.hearAbout || "",
      data.expectation || "",
      photoUrl,
      paymentUrl,
    ]);

    return jsonResponse({ result: "success" });
  } catch (err) {
    return jsonResponse({ result: "error", message: err.message });
  }
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
  }
}

function saveUploadedFile(fileName, mimeType, base64Data) {
  if (!base64Data) return "";
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const blob = Utilities.newBlob(Utilities.base64Decode(base64Data), mimeType, fileName);
  const file = folder.createFile(blob);
  return file.getUrl();
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
