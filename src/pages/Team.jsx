// Leadership / members list.
// Photos live in public/team/ (compressed from the originals submitted by
// the club). To add someone new: drop a photo in public/team/, add an
// entry below with { name, role, photo, linkedin? }.
const MEMBERS = [
  { name: "Prabin Paudel", role: "President", photo: "/team/prabin-paudel.jpg", linkedin: "https://www.linkedin.com/in/prabin-paudel-a8a315231/" },
  { name: "Jebish Pradhan", role: "Vice President", photo: "/team/jebish-pradhan.jpg", linkedin: "https://www.linkedin.com/in/jebishpradhan/" },
  { name: "Pawan Raj Pandey", role: "IT Lead", photo: "/team/pawan-raj-pandey.jpg", linkedin: "https://www.linkedin.com/in/pawanrajpandey/" },
  { name: "Gaurav Neupane", role: "Secretary", photo: "/team/gaurav-neupane.jpg", linkedin: "https://www.linkedin.com/in/gaurav-neupane-64a0122a3/" },

  { name: "Abishek Thapa", role: "Club Director", photo: "/team/abishek-thapa.jpg", linkedin: "https://www.linkedin.com/in/abishek-thapa-9a77422a4/" },
  { name: "Aayush Regmi", role: "International Director", photo: "/team/aayush-regmi.jpg", linkedin: "https://www.linkedin.com/in/aayushregmi56/" },
  { name: "Prabin Buddhacharya", role: "Treasurer", photo: "/team/prabin-buddhacharya.jpg", linkedin: "https://www.linkedin.com/in/beprabin/" },
  { name: "Anmol Malla", role: "Joint Secretary", photo: "/team/anmol-malla.jpg" },
  { name: "Bikash Bist", role: "Joint Treasurer", photo: "/team/bikash-bist.jpg" },

  { name: "Niranjan Chapagain", role: "Membership Chairperson", photo: "/team/niranjan-chapagain.jpg", linkedin: "https://www.linkedin.com/in/niranjan-chapagain-97453624a/" },
  { name: "Mili Koirala", role: "Chief Empowerment Officer", photo: "/team/mili-koirala.jpg", linkedin: "https://www.linkedin.com/in/mili-koirala/" },
  { name: "Pratima Paudel", role: "Women Empowerment Officer", photo: "/team/pratima-paudel.jpg", linkedin: "https://www.linkedin.com/in/pratima-paudel-252bb124b/"  },
  { name: "Anushka Khand", role: "Tail Twister", photo: "/team/anushka-khand.jpg" },
  
  { name: "Jenish Maharjan", role: "IT Head", photo: "/team/jenish-maharjan.jpg" },
  { name: "Dilshan Mansuri", role: "Business Head", photo: "/team/dilshan-mansuri.jpg", linkedin: "https://www.linkedin.com/in/dilshan-mansuri-429a0327b/" },
  { name: "Prerana Poudel", role: "Health Head", photo: "/team/prerana-poudel-v2.jpg" },
  { name: "Rasmita KC", role: "Health Advisor", photo: "/team/rasmita-kc.jpg", linkedin: "https://www.linkedin.com/in/rasmita-k-c-26623b3b9/" },
  { name: "Priyanka Bajracharya", role: "Finance Advisor", photo: "/team/priyanka-bajracharya.jpg" },
  { name: "Loonibha Bajracharya", role: "General Member", photo: "/team/loonibha-bajracharya.png" },
  { name: "Suraksha Giri", role: "General Member", photo: "/team/suraksha-giri.jpg" },
  { name: "Deepa Chapagain", role: "General Member", photo: "/team/deepa-chapagain.jpg" },
  { name: "Bina Dhakal", role: "General Member", photo: "/team/bina-dhakal.jpg" },
];

const PRESIDENTS = [
  { name: "Prabin Paudel", role: "President, L.Y. 2026/27", photo: "/presidents/prabin-paudel.jpg", linkedin: "https://www.linkedin.com/in/prabin-paudel-a8a315231/" },
  { name: "Sijen Dangol", role: "President, L.Y. 2025/26", photo: "/presidents/sijen-dangol.jpg", linkedin: "https://www.linkedin.com/in/sijendangol/" },
  { name: "Ujjwal Karki", role: "President, L.Y. 2024/25", photo: "/presidents/ujjwal-karki.jpg"  },
  { name: "Aawash Regmi", role: "President, L.Y. 2023/24", photo: "/presidents/aawash-regmi.jpg", linkedin: "https://www.linkedin.com/in/aawash-regmi-3426b21a7/" },
  { name: "Pratap Ratna Bajracharya", role: "President, L.Y. 2022/23", photo: "/presidents/pratap-ratna-bajracharya.jpg", linkedin: "https://www.linkedin.com/in/prb007/" },
]

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
            <p>Our current executive team, and members.</p>
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Presidential Legacy</h2>
          </div>
          <div className="team-grid">
            {PRESIDENTS.map((p) => (
              <div className="team-card" key={p.name}>
                <div className="team-photo">
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} />
                  ) : (
                    <span className="team-photo-fallback">&#128100;</span>
                  )}
                </div>
                <div className="team-body">
                  <h3>{p.name}</h3>
                  <p className="team-role">{p.role}</p>
                  {p.linkedin && (
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
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
