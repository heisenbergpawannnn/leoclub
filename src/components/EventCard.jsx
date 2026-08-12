import { isPastEvent } from "../data/events.js";

function formatDate(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTimeRange(startTime, endTime) {
  const fmt = (t) => {
    const [h, m] = t.split(":").map(Number);
    const d = new Date();
    d.setHours(h, m, 0, 0);
    return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  };
  return `${fmt(startTime)} – ${fmt(endTime)}`;
}

export default function EventCard({ event, variant = "full" }) {
  const past = isPastEvent(event);

  return (
    <div className={`event-card ${past ? "event-past" : ""}`}>
      {event.image && (
        <div className="event-poster">
          <img src={event.image} alt={event.title} />
          {past && <span className="event-badge event-badge-past">Past Event</span>}
          {!past && <span className="event-badge event-badge-upcoming">Upcoming</span>}
        </div>
      )}
      <div className="event-body">
        <h3>
          {event.emoji} {event.title}
        </h3>
        {variant === "full" && event.description && <p className="event-desc">{event.description}</p>}
        {variant !== "full" && event.tagline && <p className="event-desc">{event.tagline}</p>}
        <ul className="event-meta">
          <li>
            <span className="icon-sm">📅</span> {formatDate(event.date)}
          </li>
          <li>
            <span className="icon-sm">⏰</span> {formatTimeRange(event.startTime, event.endTime)}
          </li>
          <li>
            <span className="icon-sm">📍</span> {event.location}
          </li>
        </ul>
      </div>
    </div>
  );
}
