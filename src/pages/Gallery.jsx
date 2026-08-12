// Placeholder gallery. To add real photos:
// 1. Drop image files into public/gallery/ (e.g. public/gallery/health-camp.jpg)
// 2. Add an entry below with { photo: "/gallery/health-camp.jpg", alt: "..." }
//    and remove the "caption"-only placeholder for that tile.
const TILES = [
  { caption: "Health Camp" },
  { caption: "Shrawan Celebration & Hunger Relief Program" },
  { caption: "Joint Leo Club Event" },
  { caption: "Club Meeting" },
  { caption: "Community Outreach" },
  { caption: "Member Induction" },
];

export default function Gallery() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Moments From Our Work</span>
          <h1>Gallery</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {TILES.map((tile) =>
              tile.photo ? (
                <div className="gallery-item has-photo" key={tile.caption}>
                  <img src={tile.photo} alt={tile.alt || tile.caption} />
                </div>
              ) : (
                <div className="gallery-item" key={tile.caption}>
                  <span>
                    {tile.caption}
                    <br />
                    — photo coming soon —
                  </span>
                </div>
              )
            )}
          </div>
          <p style={{ textAlign: "center", marginTop: 36 }}>
            <a
              className="btn btn-outline-dark"
              href="https://www.facebook.com/leobudigandaki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more on our Facebook page &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
