import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); if (form.name && form.phone) setSent(true); };

  if (sent) return (
    <div className="form-success" style={{ padding: '2rem', fontSize: '1rem' }}>
      ✅ Thank you, {form.name}! Your message has been received. Dr. Bansal's team will contact you shortly.
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
        <div className="form-group">
          <label>Full Name *</label>
          <input name="name" value={form.name} onChange={handle} placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label>Your Concern *</label>
        <select name="concern" value={form.concern} onChange={handle} required>
          <option value="">— Select a concern —</option>
          <option>De-Addiction (Alcohol / Drugs)</option>
          <option>Depression &amp; Anxiety</option>
          <option>Trauma &amp; PTSD</option>
          <option>Sexual Health</option>
          <option>Family / Couple Counselling</option>
          <option>Online Consultation</option>
          <option>General Psychiatric Assessment</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Message (optional)</label>
        <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Any additional details that would help us prepare for your consultation..." />
      </div>
      <button type="submit" className="btn-primary" style={{ width: '100%' }}>
        Send Message &amp; Request Appointment
      </button>
      <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
        🔒 All enquiries are strictly confidential.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>Book an appointment or send us a message — we will respond promptly</p>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">
          {/* Contact info */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title" style={{ fontSize: '1.75rem' }}>We're Here to Help</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you're seeking help for yourself or a loved one — we offer a safe, confidential space to discuss your concerns. All consultations are handled with the utmost discretion.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+919915111799" style={{ color: 'var(--primary)', fontWeight: 600 }}>+91 99151 11799</a></p>
                <p style={{ fontSize: '0.78rem', marginTop: '0.2rem' }}>Available Mon–Sat, 9 AM – 7 PM</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@mindvisionhospital.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@mindvisionhospital.com</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Mindvision Hospital<br />Ludhiana, Punjab, India</p>
                <a href="https://mindvisionhospital.com" target="_blank" rel="noopener noreferrer"
                   style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.3rem', display: 'inline-block' }}>
                  View on Google Maps →
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">🕐</div>
              <div>
                <h4>Clinic Hours</h4>
                <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p>Sunday: Closed (emergency line available)</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">💻</div>
              <div>
                <h4>Online Consultations</h4>
                <p>Available across India via video call. Same booking process — just mention "online" in your message.</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-card">
            <h3>Book an Appointment</h3>
            <p>Fill in your details and we'll get back to you within a few hours.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <div style={{
            background: 'var(--primary-light)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.75rem',
            color: 'var(--primary)',
          }}>
            <span style={{ fontSize: '3rem' }}>📍</span>
            <strong style={{ fontSize: '1.1rem' }}>Mindvision Hospital, Ludhiana</strong>
            <a href="https://mindvisionhospital.com" target="_blank" rel="noopener noreferrer"
               className="btn-blue" style={{ fontSize: '0.85rem' }}>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
