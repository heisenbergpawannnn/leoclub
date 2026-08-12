// Leadership / members list.
// Photos live in public/team/ (compressed from the originals submitted by
// the club). To add someone new: drop a photo in public/team/, add an
// entry below with { name, role, photo, linkedin? }.
const MEMBERS = [
  { name: "Prabin Paudel", role: "President", photo: "/team/prabin-paudel.jpg", linkedin: "https://www.linkedin.com/in/prabin-paudel-a8a315231/" },
  { name: "Pawan Raj Pandey", role: "IT Lead", photo: "/team/pawan-raj-pandey.jpg", linkedin: "https://www.linkedin.com/in/pawanrajpandey/" },

  { name: "Sijen Dangol", role: "Immediate Past President", photo: "/team/sijen-dangol.jpg" },
  { name: "Ujjwal Karki", role: "Past President 24-25", photo: "/team/ujjwal-karki.jpg" },
  { name: "Pratap Ratna Bajracharya", role: "Charter President", photo: "/team/pratap-ratna-bajracharya.jpg" },

  { name: "Abishek Thapa", role: "Club Director", photo: "/team/abishek-thapa.jpg" },
  { name: "Anmol Malla", role: "Joint Secretary", photo: "/team/anmol-malla.jpg" },
  { name: "Bikash Bist", role: "Joint Treasurer", photo: "/team/bikash-bist.jpg" },
  { name: "Prabin Buddhacharya", role: "Treasurer", photo: "/team/prabin-buddhacharya.jpg" },
  { name: "Dilshan Mansuri", role: "Business Head", photo: "/team/dilshan-mansuri.jpg" },
  { name: "Mili Koirala", role: "Chief Empowerment Officer", photo: "/team/mili-koirala.jpg" },
  { name: "Pratima Paudel", role: "Women Empowerment Officer", photo: "/team/pratima-paudel.jpg" },
  { name: "Prerana Poudel", role: "Health Head", photo: "/team/prerana-poudel.jpg" },
  { name: "Rasmita KC", role: "Health Advisor", photo: "/team/rasmita-kc.jpg" },
  { name: "Priyanka Bajracharya", role: "Finance Advisor", photo: "/team/priyanka-bajracharya.jpg" },
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
            <p>Our current executive team, past leadership, and members.</p>
          </div>
          <div className="team-grid">
            {MEMBERS.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-photo">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} />
                  ) : (
                    <span className="team-photo-fallback">&#128100;</span>
                  )}
                </div>
                <div className="team-body">
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                      View LinkedIn &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
