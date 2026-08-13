import { useEffect, useState } from "react";
import { GALLERY_EVENTS } from "../data/gallery.js";

export default function Gallery() {
  // { eventIndex, photoIndex } while a lightbox is open, otherwise null
  const [lightbox, setLightbox] = useState(null);

  const openEvent = (eventIndex) => setLightbox({ eventIndex, photoIndex: 0 });
  const close = () => setLightbox(null);

  const activeEvent = lightbox ? GALLERY_EVENTS[lightbox.eventIndex] : null;

  const step = (delta) => {
    if (!lightbox || !activeEvent) return;
    const count = activeEvent.photos.length;
    setLightbox({
      ...lightbox,
      photoIndex: (lightbox.photoIndex + delta + count) % count,
    });
  };

  // Keyboard nav for the lightbox
  useEffect(() => {
    if (!lightbox) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

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
            {GALLERY_EVENTS.map((event, i) =>
              event.photos.length > 0 ? (
                <button
                  type="button"
                  className="gallery-item has-photo"
                  key={event.id}
                  onClick={() => openEvent(i)}
                  aria-label={`View ${event.photos.length} photos from ${event.title}`}
                >
                  <img src={event.photos[0]} alt={event.title} />
                  <span className="gallery-caption">{event.title}</span>
                  {event.photos.length > 1 && (
                    <span className="gallery-count">+{event.photos.length - 1}</span>
                  )}
                </button>
              ) : (
                <div className="gallery-item" key={event.id}>
                  <span>
                    {event.title}
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

      {activeEvent && (
        <div className="lightbox" onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            &times;
          </button>

          {activeEvent.photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              &#8249;
            </button>
          )}

          <img
            className="lightbox-img"
            src={activeEvent.photos[lightbox.photoIndex]}
            alt={`${activeEvent.title} (${lightbox.photoIndex + 1} of ${activeEvent.photos.length})`}
            onClick={(e) => e.stopPropagation()}
          />

          {activeEvent.photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          )}

          <div className="lightbox-caption">
            {activeEvent.title}
            {activeEvent.photos.length > 1 && (
              <span className="lightbox-counter">
                {lightbox.photoIndex + 1} / {activeEvent.photos.length}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
