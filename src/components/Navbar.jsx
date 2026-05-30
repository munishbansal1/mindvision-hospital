import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team',     label: 'Our Team' },
  { to: '/faq',      label: 'FAQ' },
  { to: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <div className="logo-icon">M</div>
          <div>
            <div className="logo-text-main">Mindvision</div>
            <div className="logo-text-sub">Hospital &amp; De-Addiction Centre</div>
          </div>
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={pathname === to ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <Link to="/contact" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}>
            Book Appointment
          </Link>
          <button
            className="navbar-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
