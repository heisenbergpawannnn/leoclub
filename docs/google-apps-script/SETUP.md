# Setting up the "Become a Member" Google Sheet + Apps Script

This is a one-time, manual setup in the club's Google account
(`lckbudigandaki@gmail.com` or whichever account should own the data). It
connects the site's `/join` form to a Google Sheet, the same way a Google
Form's "Responses" sheet works — but without redirecting visitors off-site.

This guide uses a **standalone** Apps Script project (the kind you get by
going straight to [script.google.com](https://script.google.com) and
clicking **New project**) rather than one opened from inside a Sheet's
Extensions menu — both work, but this is the path if you've already started
at script.google.com directly.

## 1. Get the Sheet's ID

You don't need a new spreadsheet — you can connect this to a sheet you
already have (e.g. the one your Google Form already writes its responses
to). If you'd rather start fresh, create a new blank spreadsheet in
[sheets.google.com](https://sheets.google.com) first and name it something
like **"LCK Budigandaki — Membership Applications"**.

Either way, open that spreadsheet and copy its ID from the URL:
`https://docs.google.com/spreadsheets/d/`**`THIS_PART_IS_THE_ID`**`/edit`

The script writes to its **own new tab** called "Site Submissions" inside
that spreadsheet — it will never touch or reorder any existing tab (like
"Form Responses 1") or its data. That tab is created automatically on the
first submission.

## 2. Create a Drive folder for uploads

1. In Google Drive, create a folder named e.g. **"Membership Uploads"**.
2. Open it and copy its ID from the URL:
   `https://drive.google.com/drive/folders/`**`THIS_PART_IS_THE_ID`**

## 3. Add the script

In your Apps Script project (the one at script.google.com):

1. Delete the placeholder `myFunction` code in `Code.gs`.
2. Paste in the full contents of [`Code.gs`](./Code.gs) from this repo.
3. Replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with the Sheet ID from step 1.
4. Replace `PASTE_YOUR_DRIVE_FOLDER_ID_HERE` with the folder ID from step 2.
5. Rename the project (top left, next to the Apps Script logo) to something
   like "Membership Form Backend", and save (Ctrl/Cmd+S).

## 4. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Configure:
   - **Execute as:** Me (the club account)
   - **Who has access:** Anyone
4. Click **Deploy**, then **Authorize access** and approve the permissions
   (it needs to write to this Sheet and this Drive folder). You'll likely
   see an "unverified app" warning since this is your own script — click
   **Advanced → Go to (project name)** to proceed; that's expected for
   scripts you write yourself.
5. Copy the **Web app URL** shown after deployment — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 5. Wire it into the site

Paste that URL into `src/data/join.js`:

```js
export const JOIN_FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycb.../exec";
```

Rebuild/redeploy the site. Submissions from `/join` will now append a row to
the Sheet, with the photo and payment screenshot saved to the Drive folder
and linked from the row.

## Updating the script later

If you ever edit `Code.gs`, you must create a **new deployment** (Deploy →
Manage deployments → edit the pencil icon → New version → Deploy) for the
changes to go live — saving the script alone does not update the deployed
Web App.
