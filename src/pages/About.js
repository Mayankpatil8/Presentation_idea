import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const BULLETS = [
  'Modern CNC infrastructure with 3, 4, and 5-axis machining capability',
  'Dedicated European account management and technical support',
  'End-to-end documentation, secure packaging, and reliable export logistics',
  'ISO-certified quality system with full traceability and inspection records',
];

const STATS = [
  { n: '15+', l: 'Years Experience', d: 'Over 15 years of precision manufacturing experience' },
  { n: '5-Axis', l: 'CNC Technology', d: 'Advanced 5-axis machining for complex geometries' },
  { n: 'ISO', l: 'Certified QMS', d: 'ISO 9001:2015 certified quality management system' },
  { n: '40+', l: 'European Clients', d: 'Trusted by European aerospace and industrial companies' },
];

export default function About({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1400&q=80"
        label="Who We Are"
        title="About Microcraft Engineering"
        subtitle="A precision CNC manufacturing company built for the demands of European aerospace, defence, and industrial sectors."
      />

      <section style={{ background: 'var(--off-white)' }}>
        <div className="about-inner">
          <div className="about-img-wrap">
            <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=900&q=80" alt="CNC Workshop" />
            <div className="about-img-badge">Est. India · Serving Europe</div>
          </div>
          <div>
            <div className="sec-label">Our Story</div>
            <h2 className="sec-title">Microcraft Engineering</h2>
            <p style={{ fontSize: '15px', color: 'var(--grey-mid)', marginTop: '16px', fontWeight: 300, lineHeight: '1.8' }}>
              Microcraft Engineering is a precision CNC manufacturing company based in India, purpose-built to serve the demanding requirements of European aerospace, defence, industrial machinery, and automation sectors.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--grey-mid)', marginTop: '14px', fontWeight: 300, lineHeight: '1.8' }}>
              Our modern facility is equipped with advanced multi-axis CNC machines, CMM inspection systems, and a rigorous quality management framework — enabling us to deliver components that meet the strictest European standards at competitive cost.
            </p>
            <div style={{ marginTop: '28px' }}>
              {BULLETS.map(b => (
                <div className="about-bullet" key={b}>
                  <div className="b-icon">✓</div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px' }}>
          {STATS.map(s => (
            <div key={s.l} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '36px', color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '16px', color: 'var(--white)', margin: '6px 0 8px' }}>{s.l}</div>
              <div style={{ fontSize: '13px', color: 'var(--grey-light)', fontWeight: 300 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <h2>Work With Microcraft</h2>
        <p>Send us your drawings for a detailed quotation within 48 hours.</p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
