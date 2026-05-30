import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🚭', title: 'De-Addiction Programme',
    summary: 'Comprehensive treatment for substance addiction',
    detail: `Mindvision Hospital offers a structured, medically-supervised de-addiction programme for individuals struggling with dependence on alcohol, opioids, heroin, cannabis, and cigarettes.\n\nOur approach combines medical detox, individual and group counselling, family therapy, and recreational activities — including table tennis, carrom, chess, painting, and meditation — to support complete recovery of mind, body, and spirit.\n\nBoth inpatient (residential) and outpatient options are available, tailored to the severity and nature of the addiction.`,
    treats: ['Alcohol addiction', 'Opioid/heroin dependence', 'Cannabis dependence', 'Cigarette addiction', 'Multiple substance use', 'Withdrawal management'],
  },
  {
    icon: '🧠', title: 'Depression & Anxiety',
    summary: 'Restoring motivation, joy, and inner peace',
    detail: `Depression and anxiety are among the most common mental health conditions — and among the most treatable. At Mindvision Hospital, we provide personalised therapy and medical care to help patients rediscover their motivation, joy, and sense of self.\n\nWe use a combination of evidence-based psychotherapy, pharmacotherapy where indicated, and lifestyle counselling to address mild, moderate, and severe presentations.`,
    treats: ['Major depressive disorder', 'Generalised anxiety disorder', 'Panic disorder', 'Social anxiety', 'Dysthymia', 'Mixed anxiety-depression'],
  },
  {
    icon: '💙', title: 'Trauma & PTSD',
    summary: 'Expert care for trauma survivors',
    detail: `Trauma leaves lasting marks on the mind and body. Whether from accidents, abuse, loss, or other distressing experiences, post-traumatic symptoms — flashbacks, nightmares, hypervigilance, emotional numbness — deserve proper specialist treatment.\n\nOur trauma-informed approach creates a safe space for patients to process their experiences at their own pace, using specialised therapeutic techniques.`,
    treats: ['PTSD (Post-Traumatic Stress Disorder)', 'Acute stress disorder', 'Childhood trauma', 'Grief and loss', 'Survivor guilt', 'Emotional dysregulation after trauma'],
  },
  {
    icon: '❤️', title: 'Sexual Health',
    summary: 'Confidential psychosexual therapy',
    detail: `Sexual health is as important as physical and mental health. Mindvision Hospital provides confidential, non-judgemental assessment and treatment for psychosexual disorders, helping patients and couples restore confidence and well-being.\n\nDr. Bansal emphasises that these conditions are medical, treatable, and nothing to be ashamed of.`,
    treats: ['Erectile dysfunction', 'Premature ejaculation', 'Dhat syndrome', 'Reduced sexual desire', 'Sexual dysfunction related to mental health', 'Relationship and intimacy counselling'],
  },
  {
    icon: '💻', title: 'Online Consultations',
    summary: 'Expert care from wherever you are',
    detail: `Distance should not be a barrier to mental health care. Dr. Naresh Kumar Bansal offers secure video consultations and remote counselling sessions — delivering expert psychiatric assessment and ongoing therapy to patients across India.\n\nOnline consultations are available for most conditions, including follow-up appointments, medication management, and individual therapy sessions.`,
    treats: ['Initial psychiatric assessment', 'Follow-up consultations', 'Medication management', 'Individual therapy sessions', 'Family consultations', 'Second opinion consultations'],
  },
  {
    icon: '👨‍👩‍👧', title: 'Family & Couple Counselling',
    summary: 'Healing relationships through communication',
    detail: `Mental health conditions affect entire families, not just individuals. Our family and couple counselling service helps loved ones understand, support, and communicate effectively — reducing conflict, building resilience, and strengthening relationships.\n\nWe also support families of patients in de-addiction programmes, helping them understand addiction and how best to support recovery.`,
    treats: ['Marital conflict and communication', 'Family dynamics and boundaries', 'Supporting a loved one with mental illness', 'Family involvement in de-addiction recovery', 'Parent-child relationship counselling', 'Separation and adjustment issues'],
  },
];

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive psychiatric, neuropsychiatric, and de-addiction care for every patient</p>
      </div>

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Specialised Mental Health Services</h2>
            <p className="section-sub">Every service at Mindvision Hospital is delivered with clinical expertise, compassion, and complete confidentiality.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map(({ icon, title, summary, detail, treats }, i) => (
              <div key={title} style={{
                background: i % 2 === 0 ? '#fff' : 'var(--light)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: '1fr 280px',
                gap: '2rem',
                alignItems: 'start',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '2rem' }}>{icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.1rem' }}>{title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{summary}</p>
                    </div>
                  </div>
                  {detail.split('\n\n').map((para, j) => (
                    <p key={j} style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.75rem' }}>{para}</p>
                  ))}
                </div>
                <div style={{ background: 'var(--primary-light)', borderRadius: 12, padding: '1.25rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--primary)', marginBottom: '0.75rem' }}>We Treat</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {treats.map(t => (
                      <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text)' }}>
                        <span style={{ color: 'var(--green)', fontWeight: 900 }}>✓</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Contact us and we'll guide you to the right treatment. All consultations are confidential.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Book a Consultation</Link>
            <a href="tel:+919915111799" className="btn-outline">Call +91 99151 11799</a>
          </div>
        </div>
      </section>
    </>
  );
}
