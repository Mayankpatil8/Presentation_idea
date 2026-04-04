import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const [ref, visible] = useReveal();
  const transforms = { up: 'translateY(32px)', left: 'translateX(-32px)', right: 'translateX(32px)', none: 'none' };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const BULLETS = [
  'Modern CNC infrastructure with 3, 4, and 5-axis machining capability',
  'Dedicated European account management and technical support',
  'End-to-end documentation, secure packaging, and reliable export logistics',
  'ISO-certified quality system with full traceability and inspection records',
];

const STATS = [
  { n: '20+', l: 'Years Experience', d: 'Over 20+ years of precision manufacturing experience' },
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
        subtitle="A precision CNC manufacturing company built for the demands of International aerospace, defence, and industrial sectors."
      />

      <section style={{ background: 'var(--off)' }}>
        <div className="about-inner">
          <Reveal direction="left">
            <div className="about-img-wrap">
              <img src="/images/cylinder_piston.png" alt="Cylinder Piston CNC" className="img-cover" />
              <div className="about-img-badge">Est. India · Serving Europe</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="sec-label">Our Story</div>
              <h2 className="sec-title">Microcraft Engineering</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontSize: '15.5px', color: 'var(--grey-dark)', marginTop: '16px', fontWeight: 400, lineHeight: '1.85' }}>
                Microcraft Engineering is a precision CNC manufacturing company based in India, purpose-built to serve the demanding requirements of International aerospace, defence, industrial machinery, and automation sectors.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: '15.5px', color: 'var(--grey-dark)', marginTop: '14px', fontWeight: 400, lineHeight: '1.85' }}>
                Our modern facility is equipped with advanced multi-axis CNC machines, CMM inspection systems, and a rigorous quality management framework — enabling us to deliver components that meet the strictest European standards at competitive cost.
              </p>
            </Reveal>
            <div style={{ marginTop: '28px' }}>
              {BULLETS.map((b, i) => (
                <Reveal delay={0.3 + (i * 0.08)} key={b}>
                  <div className="about-bullet">
                    <div className="b-icon">✓</div>
                    <span>{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px' }}>
          {STATS.map((s, i) => (
            <Reveal delay={i * 0.15} key={s.l} style={{ height: '100%' }}>
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '28px 24px', textAlign: 'center', height: '100%' }}>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '36px', color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '16px', color: 'var(--white)', margin: '6px 0 8px' }}>{s.l}</div>
                <div style={{ fontSize: '13px', color: 'var(--grey-light)', fontWeight: 300 }}>{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal delay={0.1}>
        <div className="cta-strip">
          <h2>Work With Microcraft</h2>
          <p>Send us your drawings for a detailed quotation within 48 hours.</p>
          <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
        </div>
      </Reveal>

      <Footer setPage={setPage} />
    </div>
  );
}
