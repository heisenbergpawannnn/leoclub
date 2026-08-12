import { getSortedEvents } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";

export default function Events() {
  const events = getSortedEvents();

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Save the Date</span>
          <h1>Events</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {events.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--muted)" }}>
              No events scheduled right now — check back soon.
            </p>
          ) : (
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} variant="full" />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
