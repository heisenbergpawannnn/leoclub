export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Who We Are</h1>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Our Story</h2>
            <p>
              The Leo Club of Kathmandu Budigandaki was established in <strong>2018</strong> and
              is registered as <strong>Club No. 136440</strong> within Lions Clubs
              International's Leo program. We are sponsored by the Lions Club of Kathmandu
              Budhigandaki and operate as part of the broader Lions district network active
              across Kathmandu and Nepal.
            </p>
            <p>
              "Leo" stands for <strong>L</strong>eadership, <strong>E</strong>xperience, and{" "}
              <strong>O</strong>pportunity — the three pillars of the international Leo
              movement, which gives young people a platform to develop leadership skills
              while serving their communities.
            </p>
            <div className="badge-row">
              <span className="badge">Club No. 136440</span>
              <span className="badge">Established 2018</span>
              <span className="badge">Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="media">
            <img src="/logo.png" alt="Club emblem" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Motto</span>
            <h2>Together We Serve, Together We Lead</h2>
            <p>
              Every project we run is guided by this simple idea: real change happens when
              young people lead it together.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="icon">&#127981;</div>
              <h3>Leadership</h3>
              <p>
                We give young people real responsibility — planning, organizing, and running
                community projects from the ground up.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#127760;</div>
              <h3>Experience</h3>
              <p>
                Every event is a chance to build practical skills in teamwork,
                communication, and civic engagement.
              </p>
            </div>
            <div className="card">
              <div className="icon">&#10024;</div>
              <h3>Opportunity</h3>
              <p>
                We connect members to a global network of Leo and Lions clubs, and to
                opportunities to grow beyond our own community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Journey</span>
            <h2>Milestones</h2>
          </div>
          <ul className="timeline" style={{ maxWidth: 640, margin: "0 auto" }}>
            <li>
              <span className="year">2018</span>
              <h4>Club Chartered</h4>
              <p>
                The Leo Club of Kathmandu Budigandaki was officially established and
                chartered as Club No. 136440, sponsored by the Lions Club of Kathmandu
                Budhigandaki.
              </p>
            </li>
            <li>
              <span className="year">Ongoing</span>
              <h4>Community Health Camps</h4>
              <p>Regular health camps bringing basic checkups and care to the local community.</p>
            </li>
            <li>
              <span className="year">Ongoing</span>
              <h4>Shrawan Celebration &amp; Hunger Relief Program</h4>
              <p>
                An annual program held with Our Child Protection Foundation Nepal (OCPFN),
                spending time with children and supporting their wellbeing.
              </p>
            </li>
            <li>
              <span className="year">Ongoing</span>
              <h4>Joint Leo Club Collaborations</h4>
              <p>Partnering with sister Leo clubs across Kathmandu on shared community initiatives.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
