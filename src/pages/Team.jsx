import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Medical Team</h1>
        <p>Expert specialists committed to your mental health and recovery</p>
      </div>

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label">Meet the Doctor</p>
            <h2 className="section-title">Led by an Experienced Specialist</h2>
            <p className="section-sub">Mindvision Hospital is led by one of Punjab's most experienced Consultant Psychiatrists and De-addiction Specialists.</p>
          </div>

          {/* Lead doctor — featured card */}
          <div style={{
            background: 'var(--light)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
            maxWidth: 860,
            margin: '0 auto 3rem',
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            boxShadow: 'var(--shadow-md)',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-mid) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 320,
            }}>
              <div style={{
                width: 120, height: 120,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: '3px solid rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.5rem', fontWeight: 900, color: '#fff',
              }}>NB</div>
            </div>
            <div style={{ padding: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--accent)', marginBottom: '0.5rem', display: 'block' }}>Lead Specialist</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.2rem' }}>Dr. Naresh Kumar Bansal</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.25rem', fontWeight: 600 }}>MBBS · MD (Psychiatry) · Consultant Psychiatrist, Neuropsychiatrist &amp; De-addiction Specialist</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Dr. Naresh Kumar Bansal is a highly experienced Consultant Psychiatrist, Neuropsychiatrist, and De-addiction Specialist based in Ludhiana, Punjab, India. With over <strong>19 years of overall medical experience</strong>, he specialises in treating a wide spectrum of mental health, neurological, and behavioural conditions.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                As the founder and lead specialist at Mindvision Hospital, Dr. Bansal has built a reputation for compassionate, evidence-based care — combining pharmacotherapy, psychotherapy, and holistic recovery approaches tailored to each individual patient.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {['Consultant Psychiatrist', 'Neuropsychiatrist', 'De-addiction Specialist', '19+ Years Experience', 'Online Consultations', 'Inpatient & Outpatient'].map(tag => (
                  <span key={tag} className="doctor-tag">{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Book with Dr. Bansal</Link>
                <a href="tel:+919915111799" className="btn-blue">Call Now</a>
              </div>
            </div>
          </div>

          {/* Specialisations grid */}
          <div className="section-head" style={{ marginTop: '3rem' }}>
            <p className="section-label">Areas of Expertise</p>
            <h2 className="section-title">Conditions Treated by Dr. Bansal</h2>
          </div>
          <div className="conditions-grid">
            {[
              { icon: '🧠', label: 'Psychiatric Disorders' },
              { icon: '🧩', label: 'Neuropsychiatric Conditions' },
              { icon: '🚭', label: 'De-addiction & Substance Use' },
              { icon: '😔', label: 'Depression & Mood Disorders' },
              { icon: '😰', label: 'Anxiety & Panic Disorders' },
              { icon: '💙', label: 'Trauma & PTSD' },
              { icon: '❤️', label: 'Sexual Health & Psychosexual Disorders' },
              { icon: '👨‍👩‍👧', label: 'Family & Couple Counselling' },
              { icon: '😴', label: 'Sleep Disorders' },
              { icon: '🎮', label: 'Behavioural Addictions' },
              { icon: '👶', label: 'Child & Adolescent Psychiatry' },
              { icon: '🧓', label: 'Geriatric Psychiatry' },
            ].map(({ icon, label }) => (
              <div key={label} className="condition-pill">
                <span className="cp-icon">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Book a Consultation with Dr. Bansal</h2>
          <p>Available for in-person consultations in Ludhiana and online consultations across India.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Book Appointment</Link>
            <a href="tel:+919915111799" className="btn-outline">Call +91 99151 11799</a>
          </div>
        </div>
      </section>
    </>
  );
}
