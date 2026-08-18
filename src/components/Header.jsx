import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/activities", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink className="brand" to="/">
          <img src="/logo.png" alt="Leo Club of Kathmandu Budigandaki logo" />
          <span className="brand-text">
            Leo Club of Kathmandu Budigandaki
            <small>Together We Serve, Together We Lead</small>
          </span>
        </NavLink>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink className="btn btn-primary btn-nav" to="/join">
            Join Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
