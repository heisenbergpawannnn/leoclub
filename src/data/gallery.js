// Gallery events. Each event shows one cover photo in the grid; if it has
// more than one photo, clicking it opens a lightbox to browse the rest.
//
// To add a new event: drop numbered photos in public/gallery/<slug>/
// (1.jpg, 2.jpg, ...) and add an entry below. Events with an empty
// `photos` array show as "photo coming soon" placeholders.
export const GALLERY_EVENTS = [
  {
    id: "health-camp",
    title: "Health Camp",
    photos: [
      "/gallery/health-camp/1.jpg",
      "/gallery/health-camp/2.jpg",
      "/gallery/health-camp/3.jpg",
      "/gallery/health-camp/4.jpg",
    ],
  },
  {
    id: "shrawan-celebration-hunger-relief-program",
    title: "Shrawan Celebration & Hunger Relief Program",
    photos: [
      "/gallery/shrawan-celebration-hunger-relief-program/3.jpg",
      "/gallery/shrawan-celebration-hunger-relief-program/1.jpg",
      "/gallery/shrawan-celebration-hunger-relief-program/2.jpg",
      "/gallery/shrawan-celebration-hunger-relief-program/4.jpg",
      "/gallery/shrawan-celebration-hunger-relief-program/5.jpg",
      "/gallery/shrawan-celebration-hunger-relief-program/6.jpg",
    ],
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    photos: [
      "/gallery/community-outreach/1.jpg",
      "/gallery/community-outreach/2.jpg",
      "/gallery/community-outreach/3.jpg",
    ],
  },
  {
    id: "club-meeting",
    title: "Club Meeting",
    photos: ["/gallery/club-meeting/1.jpg"],
  },
];
