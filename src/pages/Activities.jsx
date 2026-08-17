import { Link } from "react-router-dom";
import { getSortedEvents } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";
import Seo from "../components/Seo.jsx";

const ACTIVITIES = [
  {
    icon: "🎊",
    title: "Shrawan Celebration & Hunger Relief Program",
    body:
      "Held at Our Child Protection Foundation Nepal (OCPFN), this program brought our members together with children in care — sharing food, tradition, and time during the festival of Shrawan.",
  },
  {
    icon: "🏥",
    title: "Health Camp",
    body:
      "A community health camp offering basic checkups and health awareness, organized and staffed by our Leo members.",
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    body:
      "We’ve partnered with local entities and organizations on shared announcements, joint community events, and collaborative initiatives, strengthening our network and expanding our collective impact across Kathmandu and beyond.",
  },
  {
    icon: "🏛️",
    title: "Leadership & Member Development",
    body:
      "Regular club meetings and leadership activities that help members plan, organize, and run service projects independently.",
  },
  {
    icon: "🌍",
    title: "Joint Leo Club Collaboration",
    body:
      "We've partnered with sister Leo clubs across Nepal, in line with the Lions/Leo mission of service above self.",
  },
];

export default function Activities() {
  const events = getSortedEvents();

  return (
    <>
      <Seo
        title="Activities & Events"
        description="Explore the Leo Club of Kathmandu Budigandaki's community service activities and events — health camps, blood donation drives, tree plantation, hunger relief programs, and more."
        path="/activities"
      />
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">What We've Been Up To</span>
          <h1>Activities &amp; Events</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {ACTIVITIES.map((a) => (
              <div className="card" key={a.title}>
                <div className="icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {events.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Save the Date</span>
              <h2>Our Events</h2>
              <p>Club programs and events we’ve hosted and shared with our community.</p>
            </div>
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} variant="full" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Have a project idea?</h2>
            <p>Members and community partners are welcome to propose new service initiatives.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary" to="/contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
