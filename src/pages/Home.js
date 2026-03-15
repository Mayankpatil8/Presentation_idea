import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const SLIDES = [
  { img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80', tag: '5-Axis CNC Milling', title: 'Complex Aerospace Components\nwith Micron-Level Precision' },
  { img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80', tag: 'CNC Turning', title: 'Precision Shafts & Rotational\nComponents to DIN Standards' },
  { img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80', tag: 'ISO Quality Control', title: 'CMM Inspection & Full\nDimensional Certification' },
  { img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80', tag: 'Aerospace Manufacturing', title: 'Flight-Critical Components\nfor European OEMs' },
  { img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1200&q=80', tag: 'Industrial Manufacturing', title: 'Modern CNC Workshop\nBuilt for European Supply' },
];

const STRENGTHS = [
  { icon: '⚙️', title: 'Advanced CNC Machining', desc: '3, 4, and 5-axis machining centres capable of producing complex geometries and tight tolerance parts for the most demanding applications.' },
  { icon: '✈️', title: 'Aerospace & Defence Precision', desc: 'Deep specialisation in safety-critical components for aerospace and defence, meeting AS9100 and European material traceability requirements.' },
  { icon: '🏅', title: 'ISO-Certified Quality Control', desc: 'Comprehensive quality management with CMM inspection, dimensional verification, and full documentation at every stage of production.' },
  { icon: '🚢', title: 'European Export Logistics', desc: 'Secure packaging, full customs documentation, CE compliance support, and on-time delivery to European clients.' },
];

export default function Home({ setPage }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-left">
          <div className="hero-strip">
            <div className="hero-strip-line" />
            <span className="hero-strip-text">Precision CNC Manufacturing</span>
            <div className="live-dot" />
            <span style={{ fontSize: '9px', color: '#3ecf6e', fontWeight: 700, letterSpacing: '.12em' }}>ACTIVE SUPPLIER</span>
          </div>

          <h1>Precision CNC Machining for European <em>Aerospace, Defence</em> &amp; Industry</h1>
          <div className="hero-divider" />
          <p>Microcraft Engineering delivers high-precision machined components to European manufacturers — combining advanced 5-axis CNC infrastructure with ISO-certified quality control and reliable export logistics.</p>

          <div className="hero-pills">
            {['5-Axis CNC Machining', 'ISO Certified', 'EU Export Ready', '±0.01mm Tolerance'].map(t => (
              <div className="hero-pill" key={t}><div className="pill-dot" />{t}</div>
            ))}
          </div>

          <div className="hero-btns">
            <button className="btn-p" onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
            <button className="btn-s" onClick={() => setPage('capabilities')}>→&ensp;Our Capabilities</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-right-ov" />
          {SLIDES.map((s, i) => (
            <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`}>
              <img src={s.img} alt={s.tag} />
              <div className="slide-cap">
                <div className="slide-tag">{s.tag}</div>
                <div className="slide-title">{s.title}</div>
              </div>
            </div>
          ))}
          <div className="hero-float">
            <div className="hf-num">5-Axis</div>
            <div className="hf-label">CNC Technology</div>
          </div>
          <button className="slider-arrow slider-prev" onClick={() => setSlide(s => (s - 1 + SLIDES.length) % SLIDES.length)}>‹</button>
          <button className="slider-arrow slider-next" onClick={() => setSlide(s => (s + 1) % SLIDES.length)}>›</button>
          <div className="slider-dots">
            {SLIDES.map((_, i) => (
              <button key={i} className={`slider-dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} />
            ))}
          </div>
          <div className="hero-stats">
            {[{ n: '15+', l: 'Years Experience' }, { n: '5-Axis', l: 'CNC Machining' }, { n: 'ISO', l: 'Certified Quality' }, { n: 'EU', l: 'Export Ready' }].map(s => (
              <div className="stat" key={s.l}><div className="stat-num">{s.n}</div><div className="stat-lbl">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label">Why Choose Us</div>
          <h2 className="sec-title lt">Core Strengths</h2>
          <div className="str-grid">
            {STRENGTHS.map(c => (
              <div className="str-card" key={c.title}>
                <div className="str-icon">{c.icon}</div>
                <div className="str-title">{c.title}</div>
                <div className="str-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES TEASER */}
      <section style={{ background: 'var(--off)', textAlign: 'center' }}>
        <div className="sec-label" style={{ justifyContent: 'center' }}>What We Serve</div>
        <h2 className="sec-title" style={{ textAlign: 'center', margin: '0 auto 12px' }}>Industries We Serve</h2>
        <p className="sec-desc" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
          Aerospace, Defence, Industrial Machinery, Robotics &amp; Automation, and Automotive — trusted by European manufacturers across five sectors.
        </p>
        <button className="btn-p" onClick={() => setPage('industries')}>Explore Industries →</button>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <h2>Ready to Source Precision Components?</h2>
        <p>Send us your engineering drawings. We respond with a detailed quotation within 48 hours.</p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
