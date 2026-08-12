import { useState } from "react";
import { MEMBERSHIP_FORM_URL } from "../data/links.js";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // This is a static site — there's no backend to send the message yet.
    // Wire this up to a free form service (e.g. Formspree, StaticForms) when ready.
    setStatus(
      "This form isn't wired to a backend yet. Please reach us via Facebook or LinkedIn below, or connect a form service (e.g. Formspree) once ready."
    );
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
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message
              </button>
              {status && (
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: 12 }}>{status}</p>
              )}
            </form>
            <div className="note">
              <strong>Note for club officers:</strong> this is a static site, so this form
              can't send email on its own yet. Wire it up to a free form backend (e.g.{" "}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
                Formspree
              </a>{" "}
              or{" "}
              <a href="https://www.staticforms.xyz" target="_blank" rel="noopener noreferrer">
                StaticForms
              </a>
              ) in a few minutes, or just point people to Facebook/email for now.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to join us?</h2>
            <p>Fill out our quick sign-up form to become a member or volunteer.</p>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Member / Volunteer Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
