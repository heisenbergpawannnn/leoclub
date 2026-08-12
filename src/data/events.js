// Club events.
//
// To add a new event, add an entry below. To retire one, just leave it here —
// it automatically drops off the homepage once its end time passes, but stays
// on the full /events page (in ascending date order) as a past event.
//
// date: "YYYY-MM-DD", startTime/endTime: "HH:MM" (24-hour, local time).
// image (optional): put the poster in public/events/ and reference it as "/events/your-file.jpg"

export const EVENTS = [
  {
    id: "futsal-fellowship-match-2026-08-13",
    emoji: "⚽",
    title: "Futsal Fellowship Match",
    tagline: "An evening of fun, fitness, friendship, and fellowship.",
    description:
      "We're excited to bring you another evening of fun, fitness, friendship, and fellowship! Leo Club of Kathmandu Budigandaki is organizing a friendly futsal match designed to refresh, recharge, and strengthen our bonds beyond service. 🦁⚽",
    date: "2026-08-13",
    startTime: "19:00",
    endTime: "20:00",
    location: "Bishal Futsal, Samakhushi",
    image: "/events/futsal-fellowship-match.png",
  },
];

function toDateTime(dateStr, timeStr) {
  return new Date(`${dateStr}T${timeStr}:00`);
}

export function eventStart(event) {
  return toDateTime(event.date, event.startTime);
}

export function eventEnd(event) {
  return toDateTime(event.date, event.endTime);
}

export function isPastEvent(event, now = new Date()) {
  return eventEnd(event) < now;
}

// All events, soonest first.
export function getSortedEvents() {
  return [...EVENTS].sort((a, b) => eventStart(a) - eventStart(b));
}

// Only events that haven't ended yet, soonest first — for the homepage.
export function getUpcomingEvents(now = new Date()) {
  return getSortedEvents().filter((e) => !isPastEvent(e, now));
}
