import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/logo.png" alt="Club logo" />
            <strong>Leo Club of Kathmandu Budigandaki</strong>
          </div>
          <p>
            Together We Serve, Together We Lead.
            <br />
            Club No. 136440 &middot; Established 2018 &middot; Kathmandu, Nepal
          </p>
          <div className="social-row">
            <a
              href="https://www.facebook.com/leobudigandaki/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://np.linkedin.com/company/lckbudigandaki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a href="mailto:lckbudigandaki@gmail.com" aria-label="Email">
              @
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/activities">Activities &amp; Events</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Affiliation</h4>
          <ul>
            <li>
              <a href="https://lionsbudigandaki.org/" target="_blank" rel="noopener noreferrer">
                Lions Club of Kathmandu Budhi Gandaki
              </a>
            </li>
            <li>
              <a href="https://www.lionsclubs.org" target="_blank" rel="noopener noreferrer">
                Lions Clubs International
              </a>
            </li>
            <li>
              <a href="https://e-leoclubhouse.org/" target="_blank" rel="noopener noreferrer">
                e-LeoClubhouse Network
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} Leo Club of Kathmandu Budigandaki. All rights reserved.
      </div>
    </footer>
  );
}
