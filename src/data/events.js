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
    id: "health-camp-2026-07-11",
    emoji: "🩸",
    title: "Diabetes and Hypertension Checkup Camp",
    tagline: "Promoting awareness, early detection, and healthier communities.",
    description:
      "Leo Club of Kathmandu Budigandaki, in collaboration with the Lions of Budigandaki, is organizing a free Diabetes and Hypertension Checkup Camp to promote preventive healthcare and encourage early detection. The camp provides community members with accessible health screenings and an opportunity to learn more about managing diabetes and high blood pressure. 🦁❤️",
    date: "2026-07-11",
    startTime: "06:30",
    endTime: "09:30",
    location: "Radha Krishna Mandir, Raniban",
    image: "/events/health-camp.jpg",
  },
  {
    id: "shrawan-celebration-hunger-relief-2026",
    emoji: "🌸",
    title: "Shrawan Celebration & Hunger Relief Program",
    tagline: "Celebrating Shrawan with joy, kindness, and community.",
    description:
      "Let us celebrate the month of Shrawan with children through a joyful community program combining celebration and service. The program includes serving khir, donating essential food items, distributing churas, applying mehendi, and sharing an evening of music and dance. The initiative brings together celebration, compassion, and meaningful community engagement. 🦁🌸",
    date: "2026-07-25",
    startTime: "13:00",
    endTime: "19:00",
    location: "Helping Hands Children Home, Nagarjun",
    image: "/events/shrawan-celebration.jpg",
  },
  {
    id: "first-general-meeting-2026-07-31",
    emoji: "🦁",
    title: "1st General Meeting",
    tagline: "Coming together to plan, connect, and lead with purpose.",
    description:
      "LCK Budigandaki is organizinng its 1st General Meeting of the Lions Year 2026/27, bringing members together to discuss upcoming plans, programs, and organizational priorities. The meeting also provides an opportunity to strengthen team coordination, share ideas, and build a strong foundation for a meaningful and impactful year of service. 🦁🤝",
    date: "2026-07-31",
    startTime: "20:00",
    endTime: "21:00",
    location: "Google Meet",
    image: "/events/general-meeting.jpg",
  },
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
