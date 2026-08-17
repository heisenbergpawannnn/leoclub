import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../data/email.js";
import Seo from "../components/Seo.jsx";

const DEVELOPERS = [
  {
    name: "Pawan Raj Pandey",
    role: "IT Lead",
    photo: "/team/pawan-raj-pandey.jpg",
    email: "pawanpandey1251@gmail.com",
    website: "https://pawanrajpandey.com.np",
    websiteLabel: "pawanrajpandey.com.np",
  },
  {
    name: "Prabin Paudel",
    role: "President",
    photo: "/team/prabin-paudel.jpg",
    email: "prabinpaudel43@gmail.com",
    website: "https://www.prabin-paudel.com.np/",
    websiteLabel: "prabin-paudel.com.np",
  },
];

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
      <Seo
        title="Contact Us"
        description="Get in touch with the Leo Club of Kathmandu Budigandaki — reach us by email, social media, or find us in Kathmandu, Nepal."
        path="/contact"
      />
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
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to join us?</h2>
            <p>Fill out our quick sign-up form to become a member.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/join">
                Become a Member Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Behind the Scenes</span>
            <h2>Designed, Built &amp; Maintained By</h2>
            <p>
              This website was designed, built, and is maintained by IT Lead{" "}
              <strong>Pawan Raj Pandey</strong> and President <strong>Prabin Paudel</strong>.
            </p>
          </div>
          <div className="dev-grid">
            {DEVELOPERS.map((d) => (
              <div className="team-card" key={d.name}>
                <div className="team-photo">
                  <img src={d.photo} alt={`${d.name}, ${d.role}`} />
                </div>
                <div className="team-body">
                  <h3>{d.name}</h3>
                  <p className="team-role">{d.role}</p>
                  <div className="dev-links">
                    <a href={`mailto:${d.email}`}>{d.email}</a>
                    <a href={d.website} target="_blank" rel="noopener noreferrer">
                      {d.websiteLabel} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              maxWidth: 640,
              margin: "36px auto 0",
              color: "var(--muted)",
            }}
          >
            This site was built to showcase the activities, stories, and impact of our
            community, a labour of love alongside everything else we do as Leos. If you
            have any inquiries, suggestions, or feedback about the website itself, we'd love
            to hear from you at the emails above. Thank you for visiting, and for supporting
            us along the way.
          </p>
        </div>
      </section>
    </>
  );
}
