import { Link } from "react-router-dom";
import { getSortedEvents } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";

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
    title: "Joint Leo Club Collaboration",
    body:
      "We've partnered with sister Leo clubs across Kathmandu on shared announcements and joint community events, strengthening the wider Leo network in the city.",
  },
  {
    icon: "🏛️",
    title: "Leadership & Member Development",
    body:
      "Regular club meetings and leadership activities that help members plan, organize, and run service projects independently.",
  },
  {
    icon: "🌍",
    title: "Community Outreach",
    body:
      "Ongoing outreach and volunteering work across Kathmandu, in line with the Lions/Leo mission of service above self.",
  },
];

export default function Activities() {
  const events = getSortedEvents();

  return (
    <>
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
              <h2>Current Events</h2>
              <p>Upcoming and recent club programs featured here alongside our service activities.</p>
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
