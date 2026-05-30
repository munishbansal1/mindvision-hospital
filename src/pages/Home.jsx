import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: '🚭', color: '#fff3e0', label: 'De-Addiction', desc: 'Comprehensive treatment for alcohol, opioids, heroin, cannabis, and cigarette addiction — combining medical care with counselling and recreational therapy.', bg: '#e65100' },
  { icon: '🧠', color: '#e8f5e9', label: 'Depression & Anxiety', desc: 'Expert psychological care to restore motivation, joy, and inner peace. Personalised therapy for mild, moderate, and severe cases.', bg: '#2e7d32' },
  { icon: '💙', color: '#e3f2fd', label: 'Trauma & PTSD', desc: 'Specialised therapy for trauma survivors — addressing anxiety, fear, flashbacks, and the emotional weight of past experiences.', bg: '#1565c0' },
  { icon: '❤️', color: '#fce4ec', label: 'Sexual Health', desc: 'Confidential treatment for psychosexual disorders including erectile dysfunction, premature ejaculation, Dhat syndrome, and reduced sexual desire.', bg: '#c62828' },
  { icon: '💻', color: '#f3e5f5', label: 'Online Consultations', desc: 'Video consultations and remote counselling sessions — bringing expert psychiatric care to you, wherever you are in India.', bg: '#6a1b9a' },
  { icon: '👨‍👩‍👧', color: '#e0f7fa', label: 'Family & Couple Counselling', desc: 'Helping families and couples navigate conflict, communication, and mental health challenges together in a safe, neutral environment.', bg: '#00695c' },
];

const conditions = [
  { icon: '😔', label: 'Schizophrenia' },
  { icon: '😰', label: 'OCD' },
  { icon: '😴', label: 'Sleep Disorders' },
  { icon: '🧩', label: 'Bipolar Disorder' },
  { icon: '😤', label: 'Anger Management' },
  { icon: '🤯', label: 'Stress Management' },
  { icon: '👶', label: 'Child Psychiatry' },
  { icon: '🧓', label: 'Geriatric Psychiatry' },
  { icon: '🍷', label: 'Alcohol Addiction' },
  { icon: '💊', label: 'Drug Addiction' },
  { icon: '🎮', label: 'Behavioural Addictions' },
  { icon: '🧪', label: 'Neuropsychiatry' },
];

const faqs = [
  { q: 'What conditions does Mindvision Hospital treat?', a: 'We treat a wide range of mental health and neurological conditions including depression, anxiety, schizophrenia, bipolar disorder, OCD, PTSD, sleep disorders, and various addictions to alcohol, opioids, cannabis, and cigarettes.' },
  { q: 'Is treatment at Mindvision Hospital confidential?', a: 'Absolutely. All consultations and treatment records are strictly confidential. We provide a safe, neutral space where patients and families can share openly without fear of judgement or disclosure.' },
  { q: 'Do you offer online consultations?', a: 'Yes. Dr. Naresh Kumar Bansal offers video consultations and remote counselling sessions, making expert psychiatric care accessible across India.' },
  { q: 'How long does de-addiction treatment take?', a: 'Treatment duration varies based on the substance, duration of use, and individual response. Programmes can range from a few weeks to several months, combining medical detox, counselling, and recreational therapy.' },
  { q: 'Is the hospital government approved?', a: 'Yes. Mindvision Hospital is a government-approved nursing home and de-addiction centre, operating in full compliance with all applicable health regulations in Punjab.' },
  { q: 'Do you offer inpatient (residential) care?', a: 'Yes. For de-addiction and certain psychiatric conditions, we offer structured inpatient care including recreational activities such as table tennis, carrom, chess, painting, and meditation to support holistic recovery.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-q${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        {q}
        <span className={`faq-arrow${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', concern: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.concern) return;
    setSent(true);
  };

  if (sent) return (
    <div className="form-success">
      ✅ Thank you, {form.name}! We will call you shortly to confirm your appointment.
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label>Your Name *</label>
        <input name="name" value={form.name} onChange={handle} placeholder="Full name" required />
      </div>
      <div className="form-group">
        <label>Phone Number *</label>
        <input name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" required />
      </div>
      <div className="form-group">
        <label>Select Concern *</label>
        <select name="concern" value={form.concern} onChange={handle} required>
          <option value="">— Choose a concern —</option>
          <option>De-Addiction (Alcohol / Drugs)</option>
          <option>Depression &amp; Anxiety</option>
          <option>Trauma &amp; PTSD</option>
          <option>Sexual Health</option>
          <option>Family / Couple Counselling</option>
          <option>Online Consultation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Brief Message (optional)</label>
        <textarea name="message" value={form.message} onChange={handle} rows={2} placeholder="Any additional details..." />
      </div>
      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Request Appointment
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-badge">
              🏥 Government Approved Nursing Home &amp; De-Addiction Centre
            </div>
            <h1>
              Inspiring <span>Better Health</span><br />
              &amp; Peaceful Living
            </h1>
            <p className="hero-sub">
              Ludhiana's ultramodern Psychiatry, Neuropsychiatry, and De-Addiction Centre.
              Led by Dr. Naresh Kumar Bansal MD — 19+ years of expert care for mental health, addiction, and neurological conditions.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Book Appointment</Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>19+</strong><span>Years Experience</span></div>
              <div className="hero-stat"><strong>6+</strong><span>Specialisations</span></div>
              <div className="hero-stat"><strong>Govt.</strong><span>Approved Facility</span></div>
              <div className="hero-stat"><strong>Online</strong><span>Consultations</span></div>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="hero-card">
            <h3>Book an Appointment</h3>
            <p>Speak to Dr. Naresh Kumar Bansal — same day consultations available</p>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="services-section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">What We Treat</p>
            <h2 className="section-title">Our Specialist Services</h2>
            <p className="section-sub">Comprehensive mental health and de-addiction care under one roof — individualised treatment for every patient.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon, color, label, desc, bg }) => (
              <Link to="/services" key={label} className="service-card" style={{ textDecoration: 'none' }}>
                <div className="service-icon-wrap" style={{ background: color }}>
                  <span style={{ fontSize: '2rem' }}>{icon}</span>
                </div>
                <h3>{label}</h3>
                <p>{desc}</p>
                <span className="service-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <div className="section-head" style={{ color: '#fff' }}>
            <p className="section-label">Why Mindvision</p>
            <h2 className="section-title" style={{ color: '#fff' }}>Why Patients Choose Us</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.72)' }}>Committed to providing the most effective, compassionate, and confidential psychiatric care in Ludhiana.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: '👨‍⚕️', title: 'Expert Psychiatric Care', desc: 'Led by Dr. Naresh Kumar Bansal MD — a specialist in Psychiatry, Neuropsychiatry, and De-addiction with over 19 years of clinical experience.' },
              { icon: '🔒', title: 'Safe & Confidential', desc: 'Government-approved facility. All consultations are private and confidential. We provide a neutral, judgement-free environment for patients and families.' },
              { icon: '🎯', title: 'Individualised Treatment', desc: 'No two patients are the same. Every treatment plan is tailored to the individual — combining medical care, counselling, and supportive therapies.' },
              { icon: '🏥', title: 'Inpatient & Outpatient', desc: 'Flexible care options including structured inpatient residential programmes and outpatient consultations — adapting to what works best for each patient.' },
              { icon: '💻', title: 'Online Consultations', desc: 'Can\'t visit in person? Video consultations bring expert psychiatric care directly to you, anywhere in India, at your convenience.' },
              { icon: '🌿', title: 'Holistic Recovery', desc: 'We go beyond medication. Our programmes include recreational therapy — table tennis, chess, painting, meditation — to support complete well-being.' },
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

      {/* ── About Dr. Bansal ──────────────────────────── */}
      <section className="about-section">
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
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="section-label">Meet the Lead Doctor</p>
            <h2 className="section-title">A Trusted Specialist for Mind &amp; Behaviour</h2>
            <p>Dr. Naresh Kumar Bansal is a highly experienced Consultant Psychiatrist, Neuropsychiatrist, and De-addiction Specialist based in Ludhiana, Punjab. With over <strong>19 years of overall medical experience</strong>, he specialises in treating a wide spectrum of mental health, neurological, and behavioural conditions.</p>
            <p>His patient-centred approach emphasises understanding the root causes of each condition, creating personalised treatment plans, and supporting patients and their families at every step of the recovery journey.</p>
            <ul className="about-features">
              <li>MD qualified Psychiatrist with 19+ years of clinical experience</li>
              <li>Specialist in Neuropsychiatry and De-addiction medicine</li>
              <li>Expert in both inpatient and outpatient psychiatric care</li>
              <li>Founder of Mindvision Hospital — Ludhiana's ultramodern mental health facility</li>
              <li>Online consultations available across India</li>
            </ul>
            <Link to="/team" className="btn-blue">Full Profile →</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className="stats-section">
        <div className="container stats-grid">
          {[
            { value: '19+', label: 'Years of Experience' },
            { value: '100%', label: 'Confidential Care' },
            { value: 'Govt.', label: 'Approved Facility' },
            { value: '24/7', label: 'Emergency Support' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Qualities ─────────────────────────────────── */}
      <section className="qualities-section">
        <div className="container qualities-inner">
          <div>
            <p className="section-label">Our Approach</p>
            <h2 className="section-title">Qualities of Expert Psychiatric Care</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Effective psychiatry is built on deep clinical knowledge, genuine empathy, and a commitment to long-term patient well-being. At Mindvision Hospital, these values guide every consultation and treatment plan.
            </p>
            <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1rem', fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
              "Re-write your story and discover the path to a healthy and peaceful life. We promise to be there for you every step of your journey."
              <footer style={{ fontStyle: 'normal', fontWeight: 700, marginTop: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem' }}>— Dr. Naresh Kumar Bansal, MD</footer>
            </blockquote>
          </div>
          <div className="qualities-list">
            {[
              { title: 'Deep Clinical Knowledge', desc: 'Grounded in years of specialised training and practice in psychiatry, neuropsychiatry, and addiction medicine.' },
              { title: 'Genuine Empathy', desc: 'Every patient is treated with dignity, respect, and compassion — regardless of their condition or background.' },
              { title: 'Flexible Treatment', desc: 'Adapting approaches to meet individual needs — from brief counselling to long-term inpatient care.' },
              { title: 'Highly Attentive', desc: 'Listening carefully to the patient\'s full history and concerns before forming any diagnosis or treatment plan.' },
              { title: 'Continuous Learning', desc: 'Staying current with the latest developments in psychiatric research, pharmacology, and therapeutic techniques.' },
            ].map(({ title, desc }, i) => (
              <div key={title} className="quality-item">
                <div className="quality-num">{i + 1}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions Treated ────────────────────────── */}
      <section className="conditions-section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Conditions We Treat</p>
            <h2 className="section-title">Wide Spectrum of Care</h2>
            <p className="section-sub">Dr. Bansal specialises in diagnosing and treating a broad range of mental health, neurological, and behavioural conditions.</p>
          </div>
          <div className="conditions-grid">
            {conditions.map(({ icon, label }) => (
              <div key={label} className="condition-pill">
                <span className="cp-icon">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ───────────────────────────────── */}
      <section className="faq-section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Everything you need to know before your first visit.</p>
          </div>
          <div className="faq-list">
            {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/faq" className="btn-blue">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Take the First Step Towards Healing</h2>
          <p>Whether it is for yourself or someone you love — we promise to be there for you every step of the journey. Reach out today for a confidential consultation.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Book an Appointment</Link>
            <a href="tel:+919915111799" className="btn-outline">Call +91 99151 11799</a>
          </div>
        </div>
      </section>
    </>
  );
}
