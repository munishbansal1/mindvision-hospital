export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <div className="topbar-item">
            <span>📞</span>
            <a href="tel:+919915111799">+91 99151 11799</a>
          </div>
          <div className="topbar-item">
            <span>📧</span>
            <a href="mailto:info@mindvisionhospital.com">info@mindvisionhospital.com</a>
          </div>
          <div className="topbar-item">
            <span>📍</span>
            <span>Ludhiana, Punjab, India</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">in</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">Li</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">▶</a>
          </div>
        </div>
      </div>
    </div>
  );
}
