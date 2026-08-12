import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MEMBERSHIP_FORM_URL } from "../data/links.js";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Activities" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
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
          <a
            className="btn btn-primary btn-nav"
            href={MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Member
          </a>
        </div>
      </nav>
    </header>
  );
}
