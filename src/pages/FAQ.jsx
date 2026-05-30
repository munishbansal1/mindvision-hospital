import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  { cat: 'General', q: 'What is Mindvision Hospital?', a: 'Mindvision Hospital is a government-approved nursing home and ultramodern Psychiatry, Neuropsychiatry, and De-Addiction Centre based in Ludhiana, Punjab. We provide expert outpatient and inpatient care under the leadership of Dr. Naresh Kumar Bansal MD.' },
  { cat: 'General', q: 'Is treatment at Mindvision confidential?', a: 'Absolutely. All consultations, records, and treatment plans are strictly confidential. We provide a safe, neutral, and judgement-free environment for every patient and their family.' },
  { cat: 'General', q: 'Do you accept walk-in patients?', a: 'Yes, walk-in patients are welcome, though we recommend booking an appointment to ensure you are seen promptly without a wait. Call +91 99151 11799 or book online.' },
  { cat: 'General', q: 'What are your consultation timings?', a: 'Mindvision Hospital is open Monday to Saturday, 9:00 AM to 7:00 PM. For urgent mental health concerns outside of hours, please call and we will do our best to assist you.' },
  { cat: 'De-Addiction', q: 'What substances does the de-addiction programme treat?', a: 'We treat addiction to alcohol, opioids, heroin, cannabis, cigarettes, and other substances. We also treat multiple substance use and co-occurring psychiatric conditions (dual diagnosis).' },
  { cat: 'De-Addiction', q: 'How long does de-addiction treatment take?', a: 'Treatment duration varies based on the substance, severity of dependence, and individual response. Programmes range from a few weeks to several months. Dr. Bansal will create a personalised plan after a full assessment.' },
  { cat: 'De-Addiction', q: 'Do you offer inpatient (residential) de-addiction care?', a: 'Yes. Our inpatient programme provides medically supervised detox, individual and group counselling, and recreational therapy — including table tennis, carrom, chess, painting, and meditation — in a structured, supportive environment.' },
  { cat: 'De-Addiction', q: 'Can family members be involved in de-addiction treatment?', a: 'Yes — family involvement is an important part of recovery for many patients. We offer family counselling sessions to help loved ones understand addiction, set healthy boundaries, and provide effective support.' },
  { cat: 'Mental Health', q: 'What mental health conditions do you treat?', a: 'We treat depression, anxiety, PTSD, schizophrenia, bipolar disorder, OCD, panic disorder, sleep disorders, anger management issues, and many other psychiatric and neuropsychiatric conditions.' },
  { cat: 'Mental Health', q: 'How do I know if I need to see a psychiatrist?', a: 'If you are experiencing persistent low mood, anxiety, sleep problems, intrusive thoughts, hearing voices, significant behavioural changes, or any mental health concern affecting your daily life — a consultation with Dr. Bansal can help clarify what support you need.' },
  { cat: 'Mental Health', q: 'Do you offer therapy as well as medication?', a: 'Yes. Dr. Bansal takes an integrated approach combining pharmacotherapy (medication where appropriate) with evidence-based psychotherapy, counselling, and lifestyle guidance.' },
  { cat: 'Online', q: 'Do you offer online consultations?', a: 'Yes. Dr. Naresh Kumar Bansal offers secure video consultations and remote counselling sessions for patients across India. Online appointments are suitable for most conditions including initial assessments, follow-ups, and therapy sessions.' },
  { cat: 'Online', q: 'How do I book an online consultation?', a: 'Call +91 99151 11799 or fill in the contact form on our website to request an online appointment. We will confirm a convenient time and send you the video link before the session.' },
  { cat: 'Facility', q: 'Is Mindvision Hospital government approved?', a: 'Yes. Mindvision Hospital is a government-approved nursing home and de-addiction centre, fully compliant with all applicable health regulations in Punjab, India.' },
  { cat: 'Facility', q: 'What facilities does Mindvision Hospital have?', a: 'We have an ultramodern psychiatry facility with consultation rooms, inpatient wards, and a dedicated recreational area for de-addiction patients — including table tennis, carrom, chess, painting, and meditation facilities.' },
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

const cats = ['All', 'General', 'De-Addiction', 'Mental Health', 'Online', 'Facility'];

export default function FAQ() {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? faqs : faqs.filter(f => f.cat === cat);

  return (
    <>
      <div className="page-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know before your first visit to Mindvision Hospital</p>
      </div>

      <section className="faq-section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 20,
                  border: `2px solid ${cat === c ? 'var(--primary)' : 'var(--border)'}`,
                  background: cat === c ? 'var(--primary)' : '#fff',
                  color: cat === c ? '#fff' : 'var(--muted)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="faq-list">
            {filtered.map(faq => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Call us or send a message — we are happy to help with any enquiry, big or small.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <a href="tel:+919915111799" className="btn-outline">Call +91 99151 11799</a>
          </div>
        </div>
      </section>
    </>
  );
}
