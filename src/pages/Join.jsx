import { useState } from "react";
import { JOIN_FORM_ENDPOINT } from "../data/join.js";

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB — keeps the base64 payload well under Apps Script's request limit

const OCCUPATION_OPTIONS = ["Student", "Working", "Business", "Other"];
const HEAR_ABOUT_OPTIONS = [
  "Facebook",
  "Instagram",
  "Linkedin",
  "Club Events",
  "Existing Club Member",
  "Other",
];

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function Join() {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    clubDesignation: "",
    temporaryAddress: "",
    permanentAddress: "",
    contactNumber: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    occupation: "",
    occupationOther: "",
    hearAbout: "",
    hearAboutOther: "",
    expectation: "",
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [paymentFile, setPaymentFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(setter, maxBytes) {
    return (e) => {
      const file = e.target.files?.[0] ?? null;
      if (file && file.size > maxBytes) {
        setStatus({
          type: "error",
          message: `"${file.name}" is too large (max ${Math.round(maxBytes / (1024 * 1024))}MB). Please choose a smaller file.`,
        });
        e.target.value = "";
        setter(null);
        return;
      }
      setter(file);
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (JOIN_FORM_ENDPOINT.includes("PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE")) {
      setStatus({
        type: "error",
        message:
          "The membership form isn't fully set up yet. Please email us at lckbudigandaki@gmail.com in the meantime.",
      });
      return;
    }

    if (!photoFile || !paymentFile) {
      setStatus({ type: "error", message: "Please attach both your photo and payment screenshot." });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const [photoBase64, paymentBase64] = await Promise.all([
        readFileAsBase64(photoFile),
        readFileAsBase64(paymentFile),
      ]);

      const payload = {
        ...form,
        occupation: form.occupation === "Other" ? form.occupationOther : form.occupation,
        hearAbout: form.hearAbout === "Other" ? form.hearAboutOther : form.hearAbout,
        photoName: photoFile.name,
        photoType: photoFile.type,
        photoBase64,
        paymentName: paymentFile.name,
        paymentType: paymentFile.type,
        paymentBase64,
      };

      const res = await fetch(JOIN_FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.result !== "success") {
        throw new Error(data.message || "Unknown error");
      }

      setStatus({
        type: "success",
        message: "Thanks for applying! We've received your details and will be in touch soon.",
      });
      setForm({
        email: "",
        fullName: "",
        clubDesignation: "",
        temporaryAddress: "",
        permanentAddress: "",
        contactNumber: "",
        gender: "",
        bloodGroup: "",
        dob: "",
        occupation: "",
        occupationOther: "",
        hearAbout: "",
        hearAboutOther: "",
        expectation: "",
      });
      setPhotoFile(null);
      setPaymentFile(null);
      e.target.reset();
    } catch (err) {
      console.error("Membership form submission failed:", err);
      setStatus({
        type: "error",
        message:
          "Something went wrong submitting your application. Please try again, or email us directly at lckbudigandaki@gmail.com.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Member Details — LCK Budigandaki 2026/27</span>
          <h1>Become a Member</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-card" style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ color: "var(--muted)", marginTop: 0 }}>
              Welcome to Leo Club of Kathmandu Budigandaki! We're a diverse team of professionals
              and young leaders serving in environmental sustainability, public health, education,
              information technology, and social welfare under Leo District Council 325J Nepal.
              Fill out the form below to join us.
            </p>

            <p className="form-legend">
              <span className="required-mark">*</span> Required field — everything else is optional.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="email">
                  Email<span className="required-mark">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="fullName">
                  Full Name<span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="clubDesignation">
                  Club Designation [2026/27]{" "}
                  <span className="optional-tag">(Optional — for old members)</span>
                </label>
                <input
                  type="text"
                  id="clubDesignation"
                  placeholder="e.g. Board Member, Committee Chair — leave blank if new"
                  value={form.clubDesignation}
                  onChange={(e) => updateField("clubDesignation", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="temporaryAddress">
                  Temporary Address<span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  id="temporaryAddress"
                  required
                  value={form.temporaryAddress}
                  onChange={(e) => updateField("temporaryAddress", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="permanentAddress">
                  Permanent Address<span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  id="permanentAddress"
                  required
                  value={form.permanentAddress}
                  onChange={(e) => updateField("permanentAddress", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="contactNumber">
                  Contact Number<span className="required-mark">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  required
                  value={form.contactNumber}
                  onChange={(e) => updateField("contactNumber", e.target.value)}
                />
              </div>

              <div className="field">
                <label>
                  Gender<span className="required-mark">*</span>
                </label>
                <div className="field-radio-group">
                  {["Male", "Female", "Others"].map((option) => (
                    <label key={option} className="field-radio">
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        required
                        checked={form.gender === option}
                        onChange={(e) => updateField("gender", e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="bloodGroup">
                  Blood Group<span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  id="bloodGroup"
                  required
                  placeholder="e.g. O+"
                  value={form.bloodGroup}
                  onChange={(e) => updateField("bloodGroup", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="dob">
                  Date of Birth [A.D.]<span className="required-mark">*</span>{" "}
                  <span className="optional-tag">(for birthday post)</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  required
                  value={form.dob}
                  onChange={(e) => updateField("dob", e.target.value)}
                />
              </div>

              <div className="field">
                <label>
                  Current Occupation/Status<span className="required-mark">*</span>
                </label>
                <div className="field-radio-group">
                  {OCCUPATION_OPTIONS.map((option) => (
                    <label key={option} className="field-radio">
                      <input
                        type="radio"
                        name="occupation"
                        value={option}
                        required
                        checked={form.occupation === option}
                        onChange={(e) => updateField("occupation", e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {form.occupation === "Other" && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    required
                    style={{ marginTop: 10 }}
                    value={form.occupationOther}
                    onChange={(e) => updateField("occupationOther", e.target.value)}
                  />
                )}
              </div>

              <div className="field">
                <label>
                  How did you hear about LCK Budigandaki?<span className="required-mark">*</span>
                </label>
                <div className="field-radio-group">
                  {HEAR_ABOUT_OPTIONS.map((option) => (
                    <label key={option} className="field-radio">
                      <input
                        type="radio"
                        name="hearAbout"
                        value={option}
                        required
                        checked={form.hearAbout === option}
                        onChange={(e) => updateField("hearAbout", e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {form.hearAbout === "Other" && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    required
                    style={{ marginTop: 10 }}
                    value={form.hearAboutOther}
                    onChange={(e) => updateField("hearAboutOther", e.target.value)}
                  />
                )}
              </div>

              <div className="field">
                <label htmlFor="expectation">
                  Expectation from the club<span className="required-mark">*</span>
                </label>
                <textarea
                  id="expectation"
                  rows={4}
                  required
                  value={form.expectation}
                  onChange={(e) => updateField("expectation", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="photo">
                  Photo for Social Media<span className="required-mark">*</span>{" "}
                  <span className="optional-tag">(birthday post, congratulations, appreciation etc.)</span>
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  required
                  onChange={handleFileChange(setPhotoFile, MAX_FILE_BYTES)}
                />
              </div>

              <div className="note">Membership Fee: NRs 1200</div>

              <div className="payment-qr">
                <img src="/esewa-payment-qr.png" alt="eSewa QR code — scan to pay the NRs 1200 membership fee to Prabin Paudel, 9843809661" />
                <p>
                  Scan with eSewa to pay <strong>NRs 1200</strong>, then upload a screenshot of the
                  payment below.
                </p>
              </div>

              <div className="field" style={{ marginTop: 16 }}>
                <label htmlFor="payment">
                  Upload Payment Screenshot<span className="required-mark">*</span>
                </label>
                <input
                  type="file"
                  id="payment"
                  accept="image/*,application/pdf"
                  required
                  onChange={handleFileChange(setPaymentFile, MAX_FILE_BYTES)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
                disabled={sending}
              >
                {sending ? "Submitting…" : "Submit Application"}
              </button>

              {status.message && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: status.type === "error" ? "#c0392b" : "var(--muted)",
                    marginTop: 12,
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
