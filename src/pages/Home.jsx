import { Link } from "react-router-dom";
import { getUpcomingEvents } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";

export default function Home() {
  const upcoming = getUpcomingEvents().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">Leo Club of Kathmandu Budigandaki</span>
            <h1>
              Together We Serve,
              <br />
              Together We Lead.
            </h1>
            <p className="lead">
              We're a youth service organization in Kathmandu, Nepal — part of the global
              Leo Club movement sponsored by Lions Clubs International. Since 2018, we've
              brought young leaders together to serve our community.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/about">
                Learn About Us
              </Link>
              <Link className="btn btn-outline" to="/contact">
                Get Involved
              </Link>
            </div>
          </div>
          <div className="hero-logo-wrap">
            <img src="/logo.jpg" alt="Leo Club of Kathmandu Budigandaki official emblem" />
          </div>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container stat-grid">
          <div className="stat">
            <b>2018</b>
            <span>Established</span>
          </div>
          <div className="stat">
            <b>136440</b>
            <span>Club Number</span>
          </div>
          <div className="stat">
            <b>325</b>
            <span>Lions District, Nepal</span>
          </div>
          <div className="stat">
            <b>Kathmandu</b>
            <span>Based In</span>
          </div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Save the Date</span>
              <h2>Upcoming Events</h2>
              <p>Join us — here's what's coming up next.</p>
            </div>
            <div className="events-grid">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} variant="compact" />
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 32 }}>
              <Link className="btn btn-outline-dark" to="/events">
                See All Events &rarr;
              </Link>
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Do</span>
            <h2>Serving our community, one project at a time</h2>
            <p>
              As a Leo club, we run health, relief, and social-welfare programs that put
              youth leadership into action.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="icon">&#127974;</div>
              <h3>Health Camps</h3>
              <p>
                We organize community health camps that bring basic checkups and care to
                people who need them.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#127860;</div>
              <h3>Hunger Relief</h3>
              <p>
                Programs like our Shrawan Celebration and Hunger Relief drive bring food,
                warmth, and company to children in care homes.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#129309;</div>
              <h3>Community &amp; Youth Leadership</h3>
              <p>
                We build leadership skills in young people through joint events and
                collaboration with sister Leo clubs across Kathmandu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="media">
            <img src="/logo.jpg" alt="Club emblem" />
          </div>
          <div>
            <span
              className="eyebrow"
              style={{
                color: "var(--sky)",
                fontWeight: 700,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                fontSize: "0.78rem",
              }}
            >
              Our Emblem
            </span>
            <h2>What our badge stands for</h2>
            <p>
              Our emblem carries the silhouette of a Leo and the Lions International lion,
              set against the peaks of Nepal beneath the national flag — a mark of the
              Himalaya we call home and the Lions family we belong to.
            </p>
            <div className="badge-row">
              <span className="badge">Club No. 136440</span>
              <span className="badge">Established 2018</span>
              <span className="badge">Sponsored by Lions Club of Kathmandu Budhigandaki</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Want to serve with us?</h2>
            <p>
              Whether you're a prospective Leo, a partner organization, or just curious —
              we'd love to hear from you.
            </p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/contact">
                Contact the Club
              </Link>
              <a
                className="btn btn-outline"
                href="https://www.facebook.com/leobudigandaki/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit our Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
