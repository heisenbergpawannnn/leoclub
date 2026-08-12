import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MEMBERSHIP_FORM_URL } from "../data/links.js";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../data/email.js";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!EMAILJS_TEMPLATE_ID) {
      setStatus(
        "The contact form's email template hasn't been set up yet. Please reach us via Facebook or email below in the meantime."
      );
      return;
    }

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current)
      .then(() => {
        setStatus("Thanks for reaching out! Your message has been sent — we'll get back to you soon.");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS send failed:", err);
        setStatus(
          "Something went wrong sending your message. Please try emailing us directly at lckbudigandaki@gmail.com."
        );
      })
      .finally(() => setSending(false));
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Reach Out</span>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 style={{ color: "var(--navy-dark)", marginTop: 0 }}>Find Us</h2>
            <ul className="contact-list">
              <li>
                <span className="icon-sm">📍</span>
                <div>
                  <strong>Location</strong>
                  <br />
                  Kathmandu, Nepal
                </div>
              </li>
              <li>
                <span className="icon-sm">f</span>
                <div>
                  <strong>Facebook</strong>
                  <br />
                  <a
                    href="https://www.facebook.com/leobudigandaki/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/leobudigandaki
                  </a>
                </div>
              </li>
              <li>
                <span className="icon-sm">in</span>
                <div>
                  <strong>LinkedIn</strong>
                  <br />
                  <a
                    href="https://np.linkedin.com/company/lckbudigandaki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/company/lckbudigandaki
                  </a>
                </div>
              </li>
              <li>
                <span className="icon-sm">📧</span>
                <div>
                  <strong>Email</strong>
                  <br />
                  <a href="mailto:lckbudigandaki@gmail.com">lckbudigandaki@gmail.com</a>
                </div>
              </li>
              <li>
                <span className="icon-sm">🏛️</span>
                <div>
                  <strong>Sponsoring Lions Club</strong>
                  <br />
                  Lions Club of Kathmandu Budhigandaki
                </div>
              </li>
            </ul>
          </div>

          <div className="form-card">
            <h2 style={{ color: "var(--navy-dark)", marginTop: 0 }}>Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                disabled={sending}
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
              {status && (
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: 12 }}>{status}</p>
              )}
            </form>
            <div className="note">
              <strong>Note for club officers:</strong> this form sends via EmailJS straight
              from the browser — no backend needed. Service, template, and key live in{" "}
              <code>src/data/email.js</code> if they ever need updating.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to join us?</h2>
            <p>Fill out our quick sign-up form to become a member.</p>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Member Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
