import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>About Mindvision Hospital</h1>
        <p>Ludhiana's ultramodern Psychiatry, Neuropsychiatry &amp; De-Addiction Centre</p>
      </div>
      <div style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container about-inner">
          <div className="doctor-card">
            <div className="doctor-photo">
              <div className="doctor-initials">NB</div>
            </div>
            <div className="doctor-info">
              <h3>Dr. Naresh Kumar Bansal</h3>
              <p className="deg">MBBS · MD (Psychiatry)</p>
              <div className="doctor-tags">
                <span className="doctor-tag">Consultant Psychiatrist</span>
                <span className="doctor-tag">Neuropsychiatrist</span>
                <span className="doctor-tag">De-addiction Specialist</span>
                <span className="doctor-tag">19+ Years Experience</span>
                <span className="doctor-tag">Ludhiana, Punjab</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Inspiring Better Health Since Day One</h2>
            <p>Mindvision Hospital was founded with a single, clear mission: to provide the most compassionate, effective, and accessible mental health care in Punjab. Based in Ludhiana, we operate as a <strong>government-approved nursing home and de-addiction centre</strong>, serving patients from across the region.</p>
            <p>Our facility is ultramodern, purpose-built for psychiatric and de-addiction care — designed to be a calm, welcoming, and healing environment for patients and their families.</p>
            <p>Under the leadership of Dr. Naresh Kumar Bansal MD, we combine clinical excellence with genuine human care. We believe that mental health deserves the same attention and urgency as physical health — and we are committed to breaking the stigma around seeking help.</p>
            <ul className="about-features">
              <li>Government-approved nursing home and de-addiction centre</li>
              <li>Comprehensive inpatient and outpatient programmes</li>
              <li>Holistic recovery including recreational therapy</li>
              <li>Strictly confidential — safe space for every patient</li>
              <li>Online consultations available across India</li>
            </ul>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </div>

      <section className="why-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-head" style={{ color: '#fff' }}>
            <p className="section-label">Our Mission</p>
            <h2 className="section-title" style={{ color: '#fff' }}>What We Stand For</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🕊️', title: 'Healing Environment', desc: 'A safe, calm, and neutral space where patients can open up without fear of judgement.' },
              { icon: '🎯', title: 'Personalised Care', desc: 'No two journeys are the same. Every treatment plan is built around the individual.' },
              { icon: '🤝', title: 'Family Involvement', desc: 'We involve families where helpful — building understanding and a stronger support system.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Help is closer than you think. Reach out today for a confidential consultation with Dr. Naresh Kumar Bansal.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Book Appointment</Link>
            <a href="tel:+919915111799" className="btn-outline">Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
