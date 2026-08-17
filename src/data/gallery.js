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
      "/gallery/health-camp/3.jpeg",
      "/gallery/health-camp/2.jpeg",
    ],
  },
  {
    id: "shrawan-celebration-hunger-relief-program",
    title: "Shrawan Celebration & Hunger Relief Program",
    photos: [
      "/gallery/shrawan-celebration-hunger-relief-program/1.png",
      "/gallery/shrawan-celebration-hunger-relief-program/2.png",
      "/gallery/shrawan-celebration-hunger-relief-program/3.png",
      "/gallery/shrawan-celebration-hunger-relief-program/4.png",
    ],
  },
  {
    id: "latex-workshop",
    title: "LaTeX Workshop at Thapathali Campus",
    photos: [
      "/gallery/latex-workshop/1.jpg",
      "/gallery/latex-workshop/2.jpg",
    ],
  },
  {
    id: "warm-blanket-distribution",
    title: "Warm Blanket Distribution at Madarsa, Nuwakot",
    photos: [
      "/gallery/warm-blanket-distribution/blanket-distribution-1.jpg",
      "/gallery/warm-blanket-distribution/blanket-distribution-2.jpg"
    ],
  },
  {
    id: "blood-donation",
    title: "Blood Donation Program",
    photos: [
      "/gallery/blood-donation/blood-donation-1.jpg",
    ],
  },
  {
    id: "dengue-awareness",
    title: "Dengue Awareness",
    photos: [
      "/gallery/dengue-awareness/dengue-awareness-1.jpg",
      "/gallery/dengue-awareness/dengue-awareness-2.jpg",
    ],
  },
  {
    id: "menstrual-hygiene",
    title: "Menstrual Hygiene",
    photos: [
      "/gallery/menstrual-hygiene/menstrual-hygiene-1.jpg",
      "/gallery/menstrual-hygiene/menstrual-hygiene-2.jpg",
    ],
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation Program",
    photos: [
      "/gallery/tree-plantation/tree-plantation-1.jpg",
      "/gallery/tree-plantation/tree-plantation-2.jpg",
      "/gallery/tree-plantation/tree-plantation-3.jpg",
    ],
  },
];
