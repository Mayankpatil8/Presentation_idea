import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const SLIDES = [
  {
    img: '/images/photoking.jpg',
    tag: 'Welding & Fabrication',
    title: 'High-Quality Welding Solutions\nfor Strong and Durable Structures',
  },
  {
    img: '/images/photo2.jpg',
    tag: 'Automotive Components',
    title: 'Precision Automotive Parts\nEngineered for Performance & Reliability',
  },
  {
    img: '/images/photo7.jpg',
    tag: 'Aerospace Components',
    title: 'Advanced Aerospace Components\nManufactured with Extreme Accuracy',
  },
  {
    img: '/images/photo1.jpg',
    tag: 'Large Machine Manufacturing',
    title: 'Heavy-Duty Industrial Machinery\nBuilt for Strength and Scale',
  },
  {
    img: '/images/photo3.jpg',
    tag: 'Internal Engine Components',
    title: 'High-Precision Engine Parts\nDesigned for Maximum Efficiency',
  },
  {
    img: '/images/photo5.jpg',
    tag: 'Mechanical Parts',
    title: 'Precision Mechanical Components\nBuilt to Tight Tolerances',
  },
  {
    img: '/images/photo6.jpg',
    tag: 'CNC Machining',
    title: 'Advanced CNC Machining Solutions\nfor High Accuracy Production',
  },
];

const CAPABILITIES = [
  { label: 'CNC Milling', detail: '3-Axis, 4-Axis & 5-Axis precision machining' },
  { label: 'CNC Turning', detail: 'High-accuracy rotational components' },
  { label: 'Wire-Cut EDM', detail: 'Precision cutting for complex geometries' },
  { label: 'Welding & Fabrication', detail: 'Robust structural and custom fabrication' },
  { label: 'Tooling & Fixtures', detail: 'Custom jigs, dies & production tooling' },
  { label: 'Mechanical Components', detail: 'Tight tolerance precision parts' },
  { label: 'Prototype & Production', detail: 'From single prototypes to batch production' },
];

const MATERIALS = [
  'Carbon Steel',
  'Alloy Steel',
  'Stainless Steel',
  'Aluminium Alloys',
  'Titanium',
  'Inconel & High-Temp Alloys',
  'Engineering Plastics',
];

const TRUST_POINTS = [
  { icon: '🕐', text: '25+ years precision machining experience' },
  { icon: '👷', text: 'Skilled engineers and technicians' },
  { icon: '🏭', text: 'Advanced CNC manufacturing equipment' },
  { icon: '📐', text: 'Structured quality inspection processes' },
  { icon: '💰', text: 'Competitive manufacturing cost' },
  { icon: '📦', text: 'Reliable delivery performance' },
];

const sectionPad = { padding: '72px 24px' };

export default function Home({ setPage }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-left">
          <div className="hero-strip">
            <div className="hero-strip-line" />
            <span className="hero-strip-text">Precision CNC Manufacturing</span>
            <div className="live-dot" />
            <span style={{ fontSize: '9px', color: '#3ecf6e', fontWeight: 700, letterSpacing: '.12em' }}>
              ACTIVE SUPPLIER
            </span>
          </div>

          <h1>
            Precision CNC Machining for Global{' '}
            <em>Engineering Industries</em>
          </h1>
          <div className="hero-divider" />

          <p style={{ marginBottom: '10px' }}>
            Microcraft Engineering is a precision machining company delivering high-accuracy CNC
            components for demanding engineering applications.
          </p>
          <p style={{ marginBottom: '10px' }}>
            With more than 25 years of manufacturing experience, our facility produces complex
            components with consistent quality, reliable delivery, and competitive manufacturing
            efficiency.
          </p>
          <p>
            We support engineering companies in India and internationally with precision machining
            solutions used in aerospace, industrial automation, energy systems, and industrial
            machinery.
          </p>

          <div className="hero-pills" style={{ marginTop: '24px' }}>
            {['5-Axis CNC Machining', '25+ Years Experience', 'Global Supply', '±0.01mm Tolerance'].map(t => (
              <div className="hero-pill" key={t}>
                <div className="pill-dot" />{t}
              </div>
            ))}
          </div>

          <div className="hero-btns">
            <button className="btn-p" onClick={() => setPage('contact')}>
              ▶&ensp;Upload Drawing & Request Quote
            </button>
            <button className="btn-s" onClick={() => setPage('capabilities')}>
              →&ensp;Our Capabilities
            </button>
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
          {/* <div className="hero-float">
            <div className="hf-num">5-Axis</div>
            <div className="hf-label">CNC Technology</div>
          </div> */}
          <button
            className="slider-arrow slider-prev"
            onClick={() => setSlide(s => (s - 1 + SLIDES.length) % SLIDES.length)}
          >‹</button>
          <button
            className="slider-arrow slider-next"
            onClick={() => setSlide(s => (s + 1) % SLIDES.length)}
          >›</button>
          <div className="slider-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`slider-dot ${i === slide ? 'active' : ''}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <div className="hero-stats">
            {[
              { n: '25+', l: 'Years Experience' },
              { n: '5-Axis', l: 'CNC Machining' },
              { n: 'ISO', l: 'Certified Quality' },
              { n: 'Global', l: 'Export Ready' },
            ].map(s => (
              <div className="stat" key={s.l}>
                <div className="stat-num">{s.n}</div>
                <div className="stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED EXPERIENCE ───────────────────────────────────────── */}
      <section style={{ background: 'var(--off)', ...sectionPad }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

            <div>
              <div className="sec-label">Our Track Record</div>
              <h2 className="sec-title" style={{ marginBottom: '20px' }}>
                Trusted Engineering Experience
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px' }}>
                Our machining expertise has supported projects connected with respected organisations
                such as <strong style={{ color: 'var(--text)' }}>ABB</strong> and the{' '}
                <strong style={{ color: 'var(--text)' }}>Indian Space Research Organisation</strong>.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)' }}>
                Working with technically demanding industries has helped us develop strong
                manufacturing processes and quality systems that meet strict engineering standards.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'ABB', sub: 'Automation & Electrical Technology' },
                { name: 'ISRO', sub: 'Indian Space Research Organisation' },
              ].map(org => (
                <div
                  key={org.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    background: '#fff',
                    border: '1px solid #e2e6ed',
                    borderLeft: '4px solid var(--accent)',
                    borderRadius: '8px',
                    padding: '20px 28px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'var(--navy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                      flexShrink: 0,
                    }}
                  >
                    {org.name}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--navy)', marginBottom: '2px' }}>
                      {org.name}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{org.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', ...sectionPad }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="sec-label">What We Do</div>
          <h2 className="sec-title lt" style={{ marginBottom: '48px' }}>Core Capabilities</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {CAPABILITIES.map(cap => (
              <div
                key={cap.label}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '26px 22px',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '3px',
                  background: 'var(--accent)',
                  borderRadius: '2px',
                  marginBottom: '16px',
                }} />
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '6px' }}>
                  {cap.label}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                  {cap.detail}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px' }}>
            <button className="btn-p" onClick={() => setPage('capabilities')}>
              View Full Capabilities →
            </button>
          </div>
        </div>
      </section>

      {/* ── MATERIALS EXPERTISE ──────────────────────────────────────── */}
      <section style={{ background: 'var(--off)', ...sectionPad }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '64px', alignItems: 'center' }}>

            <div>
              <div className="sec-label">Raw Materials</div>
              <h2 className="sec-title" style={{ marginBottom: '16px' }}>Materials Expertise</h2>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)' }}>
                We machine a wide range of engineering materials including carbon steels, exotic
                alloys, titanium, and high-temperature materials for the most demanding industrial
                and aerospace applications.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {MATERIALS.map(mat => (
                <div
                  key={mat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#fff',
                    border: '1px solid #e2e6ed',
                    borderRadius: '6px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }} />
                  {mat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', ...sectionPad }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>Our Promise</div>
          <h2 className="sec-title lt" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            Why Companies Trust Microcraft Engineering
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'left' }}>
            {TRUST_POINTS.map(pt => (
              <div
                key={pt.text}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '20px 18px',
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(62,207,110,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                }}>
                  {pt.icon}
                </div>
                <span style={{ color: '#dde2ed', fontSize: '14px', fontWeight: 500, lineHeight: 1.55, paddingTop: '8px' }}>
                  {pt.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES TEASER ────────────────────────────────────────── */}
      <section style={{ background: 'var(--off)', textAlign: 'center', ...sectionPad }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>What We Serve</div>
          <h2 className="sec-title" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
            Industries We Serve
          </h2>
          <p className="sec-desc" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Aerospace, Defence, Industrial Machinery, Robotics &amp; Automation, and Automotive —
            trusted by manufacturers across five sectors in India and internationally.
          </p>
          <button className="btn-p" onClick={() => setPage('industries')}>
            Explore Industries →
          </button>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div className="cta-strip">
        <h2>Ready to Source Precision Components?</h2>
        <p>
          Upload your CAD drawing and request a quotation. We respond with a detailed
          quote within 48 hours.
        </p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>
          ▶&ensp;Upload Drawing & Request Quote
        </button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
