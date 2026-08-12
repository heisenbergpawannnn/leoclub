// Leadership / members list.
// To add more people or details (bio, photo), extend the MEMBERS array below.
// photo (optional): put an image in public/team/ and reference it as "/team/your-file.jpg"
const MEMBERS = [
  {
    name: "Prabin Paudel",
    role: "President",
    linkedin: "https://www.linkedin.com/in/prabin-paudel-a8a315231/",
  },
  {
    name: "Pawan Raj Pandey",
    role: "Member",
    linkedin: "https://www.linkedin.com/in/pawanrajpandey/",
  },
];

export default function Team() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">The People Behind the Work</span>
          <h1>Our Team</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Leadership &amp; Members</span>
            <h2>Meet the Club</h2>
            <p>
              This is a starting roster — club officers, send us bios and photos for
              everyone and we'll fill this page out.
            </p>
          </div>
          <div className="card-grid">
            {MEMBERS.map((m) => (
              <div className="card" key={m.name}>
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: 16,
                    }}
                  />
                ) : (
                  <div className="icon">&#128100;</div>
                )}
                <h3>{m.name}</h3>
                <p style={{ fontWeight: 600, color: "var(--sky)", marginBottom: 6 }}>{m.role}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.85rem", color: "var(--navy)" }}
                  >
                    View LinkedIn &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
