import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const CAPS = [
  { n: '01', t: 'CNC Milling (3, 4, 5 Axis)', d: 'Multi-axis milling for complex geometries, contoured surfaces, and precision pockets. Suitable for structural aerospace and defence components.' },
  { n: '02', t: 'CNC Turning', d: 'High-precision turning for shafts, bushings, and rotational components. Live tooling capability for combined turning-milling operations.' },
  { n: '03', t: 'Multi Axis Machining', d: '5-axis simultaneous machining for the most demanding geometries — reducing setups, improving accuracy, and delivering superior surface quality.' },
  { n: '04', t: 'Surface Finishing', d: 'Complete surface treatment including anodising, hard chrome, nickel plating, polishing, and blasting to meet worldwide quality standards.' },
];

const MATERIALS = [
  { c: '#b0c4d8', n: 'Aluminium Alloys', s: '2024, 6061, 7075 — Aerospace & Structural' },
  { c: '#8fa4a4', n: 'Stainless Steel', s: '303, 304, 316L, 17-4PH' },
  { c: '#c8b0a8', n: 'Titanium Alloys', s: 'Grade 2, Grade 5 (Ti-6Al-4V)' },
  { c: '#7a8c70', n: 'Alloy Steel', s: '4140, 4340, EN24, EN36' },
  { c: '#d4c880', n: 'Engineering Plastics', s: 'PEEK, Delrin, Nylon, PTFE' },
];

export default function Capabilities({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="../images/cap1.jpg"
        label="What We Do"
        title="Manufacturing Capabilities"
        subtitle="Advanced CNC machining capabilities from 3-axis milling to 5-axis simultaneous machining, CNC turning, and complete surface finishing services."
      />

      <section style={{ background: 'var(--grey-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label" style={{ color: 'var(--accent)' }}>Technical Capabilities</div>
            <h2 className="sec-title lt">CNC Machining Services</h2>
          </Reveal>
          <div className="cap-grid">
            <div>
              {CAPS.map((c, i) => (
                <Reveal delay={i * 0.15} key={c.n}>
                  <div className="cap-item">
                    <div className="cap-num">{c.n}</div>
                    <div>
                      <div className="cap-name">{c.t}</div>
                      <div className="cap-desc">{c.d}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal direction="right">
              <div className="cap-imgs">
                <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" alt="CNC Milling" />
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" alt="CNC Turning" />
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80" alt="5-Axis Machining" className="wide" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label">Materials</div>
            <h2 className="sec-title">Material Expertise</h2>
            <p className="sec-desc">All materials fully traceable and certified to aerospace and industrial specifications.</p>
          </Reveal>
          <div className="mat-grid">
            {MATERIALS.map((m, i) => (
              <Reveal delay={i * 0.1} key={m.n}>
                <div className="mat-chip">
                  <div className="mat-dot" style={{ background: m.c }} />
                  <div>
                    <div className="mat-name">{m.n}</div>
                    <div className="mat-spec">{m.s}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal delay={0.1}>
        <div className="cta-strip">
          <h2>Need a Precision Component?</h2>
          <p>Upload your drawings for a fast detailed quotation.</p>
          <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
        </div>
      </Reveal>

      <Footer setPage={setPage} />
    </div>
  );
}
