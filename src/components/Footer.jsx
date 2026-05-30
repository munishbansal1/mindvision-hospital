import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <div className="logo-icon" style={{ width: 36, height: 36, fontSize: '1rem', borderRadius: 8 }}>M</div>
              <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>Mindvision Hospital</span>
            </div>
            <p>Ludhiana's ultramodern Psychiatry and De-Addiction Centre. Providing compassionate, expert mental health care under the guidance of Dr. Naresh Kumar Bansal, MD.</p>
            <div className="footer-social">
              <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer">Li</a>
              <a href="https://youtube.com"   target="_blank" rel="noopener noreferrer">▶</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">De-Addiction</Link></li>
              <li><Link to="/services">Depression &amp; Anxiety</Link></li>
              <li><Link to="/services">Trauma &amp; PTSD</Link></li>
              <li><Link to="/services">Sexual Health</Link></li>
              <li><Link to="/services">Online Consultations</Link></li>
              <li><Link to="/services">Family Counselling</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <span>📞</span>
              <span><a href="tel:+919915111799" style={{ color: 'rgba(255,255,255,0.72)' }}>+91 99151 11799</a></span>
            </div>
            <div className="footer-contact-item">
              <span>📧</span>
              <span><a href="mailto:info@mindvisionhospital.com" style={{ color: 'rgba(255,255,255,0.72)' }}>info@mindvisionhospital.com</a></span>
            </div>
            <div className="footer-contact-item">
              <span>📍</span>
              <span>Mindvision Hospital, Ludhiana, Punjab, India</span>
            </div>
            <div className="footer-contact-item">
              <span>🕐</span>
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Mindvision Hospital. All rights reserved. &nbsp;|&nbsp; Ludhiana, Punjab, India &nbsp;|&nbsp; Government Approved Nursing Home &amp; De-Addiction Centre</p>
        </div>
      </div>
    </footer>
  );
}
