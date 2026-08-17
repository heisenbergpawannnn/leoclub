import Seo from "../components/Seo.jsx";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about the Leo Club of Kathmandu Budigandaki (Club No. 136440), chartered in 2018 under the Lions Club of Kathmandu Budhi Gandaki. Discover our mission of Leadership, Experience, and Opportunity."
        path="/about"
      />
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
              "LEO" stands for <strong>L</strong>eadership, <strong>E</strong>xperience, and{" "}
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
            <img src="/logo.png" alt="Leo Club of Kathmandu Budigandaki official emblem" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="media">
            <img
              src="/lions-club-logo.png"
              alt="Lions Club of Kathmandu Budhi Gandaki emblem"
            />
          </div>
          <div>
            <span className="eyebrow">Our Sponsoring Club</span>
            <h2>Lions Club of Kathmandu Budhi Gandaki</h2>
            <p>
              Empowering youth through leadership, service, and community development since
              2017. The Lions Club of Kathmandu Budhi Gandaki is our chartering and
              sponsoring body — the parent Lions club that made the founding of our Leo club
              possible and continues to guide and support our service journey today.
            </p>
            <p>
              Founded in 2017, the club started with a simple idea: bring together
              passionate leaders who want to make a difference. What began as a small group
              of dedicated individuals has grown into a vibrant community, partnering with organizations 
              like the Nepal Red Cross Society and Rotaract Club to create lasting impact in the community.
            </p>
            <div className="badge-row">
              <span className="badge">Sponsoring Club</span>
              <span className="badge">Chartered 2017</span>
            </div>
            <p style={{ marginTop: 24 }}>
              <a
                className="btn btn-outline-dark"
                href="https://lionsbudigandaki.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Lions Club of Kathmandu Budhi Gandaki &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Journey</span>
            <h2>Milestones</h2>
          </div>
          <ul className="timeline" style={{ maxWidth: 640, margin: "0 auto" }}>
            <li>
              <span className="year">2018</span>
              <h3>Club Chartered by Leo Suresh Adhikari</h3>
              <p>
               The Leo Club of Kathmandu Budhigandaki was officially established and chartered as Leo Club No. 136440, under the sponsorship of the Lions Club of Kathmandu Budhigandaki, with Leo Suresh Adhikari serving as its charter president.
              </p>
            </li>

            <li>
              <span className="year">2020/21</span>
              <h3>Presidency of Leo Sashanka Pandey</h3>
              <p>The 2020/21 Lions Year marked a new chapter in the club’s journey under the leadership of Leo Sashanka Pandey, with a continued focus on growth, service, and fellowship. </p>
            </li>

            <li>
              <span className="year">2022/23</span>
              <h3>Club Revival under Leo Pratap Ratna Bajracharya</h3>
              <p>The club was revived under the leadership of Leo Pratap Ratna Bajracharya during the 2022/23 Lions Year, marking a new chapter in its journey of service and leadership.</p>
            </li>

            <li>
              <span className="year">2023/24</span>
              <h3>Presidency of Leo Aawash Regmi</h3>
              <p> Under the presidency of Leo Aawash Regmi, the club continued to strengthen its service initiatives and engagement within the community. </p>
            </li>

            <li>
              <span className="year">2024/25</span>
              <h3>Presidency of Leo Ujjwal Karki</h3>
              <p> Under the presidency of Leo Ujjwal Karki, the club focused on strengthening fellowship and building meaningful relationships with fellow Leo Clubs, laying the foundation for greater collaboration and collective service. </p>
            </li>

            <li>
              <span className="year">2025/26</span>
              <h3>Presidency of Leo Sijen Dangol</h3>
              <p> Building on the strong fellowship established in previous years, the club organized impactful service projects, providing blankets, sanitary pads, stationery items, and other essential supplies to those in need. </p>
            </li>

            <li>
              <span className="year">2026/27</span>
              <h3>Presidency of Leo Prabin Paudel</h3>
              <p>
                Under the ongoing presidency of Leo Prabin Paudel, the club is placing a stronger focus on health and medical initiatives, working to expand its impact through health awareness programs, medical support, and community-focused healthcare projects.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
