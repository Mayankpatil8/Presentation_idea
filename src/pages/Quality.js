import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const CHECKS = [
  { icon: '📐', t: 'CMM Inspection', d: 'Coordinate Measuring Machine verification of critical dimensions and geometric tolerances on all precision components.' },
  { icon: '🔬', t: 'In-Process Monitoring', d: 'Real-time monitoring at every machining stage to detect deviations early and maintain consistent tolerances throughout production.' },
  { icon: '📏', t: 'Dimensional Inspection', d: '100% dimensional verification with calibrated instruments. Full inspection reports provided with every shipment.' },
  { icon: '✅', t: 'Final Quality Checks Before Shipment', d: 'Comprehensive pre-shipment inspection including visual, dimensional, and surface checks with full traceability documentation.' },
];

const CASES = [
  {
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
    ind: 'Aerospace',
    t: 'Aerospace Housing Component',
    specs: [{ k: 'Material', v: 'Aluminium 7075-T651' }, { k: 'Process', v: '5-Axis CNC Milling' }, { k: 'Tolerance', v: '±0.01mm' }, { k: 'Qty', v: '500 pcs / batch' }],
    r: 'High-precision aerospace housing with strict dimensional tolerances delivered to a European OEM. Full material certification and CMM report included.',
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    ind: 'Industrial',
    t: 'Industrial Machinery Precision Shaft',
    specs: [{ k: 'Material', v: 'Alloy Steel EN24 (4340)' }, { k: 'Process', v: 'CNC Turning + Grinding' }, { k: 'Tolerance', v: 'h6 / ±0.005mm' }, { k: 'Qty', v: '1,200 pcs / month' }],
    r: 'Precision transmission shaft meeting European DIN standards. Consistent quality maintained across repeat production runs.',
  },
];

export default function Quality({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=80"
        label="Our Commitment"
        title="Quality"
        subtitle="ISO-certified quality management ensuring every component meets dimensional accuracy, surface quality, and material specification requirements before shipment."
      />

      <section style={{ background: 'var(--navy-mid)' }}>
        <div className="qual-inner">
          <div className="qual-img">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80" alt="CMM Inspection" />
            <div className="qual-cert-badge">ISO Certified</div>
          </div>
          <div>
            <div className="sec-label" style={{ color: 'var(--accent)' }}>Quality System</div>
            <h2 className="sec-title lt">Our Quality Framework</h2>
            <p style={{ fontSize: '15px', color: '#c0d0e0', marginBottom: '28px', fontWeight: 300, lineHeight: '1.8' }}>
              Our ISO-certified quality management system ensures every component meets dimensional accuracy, surface quality, and material specification requirements before leaving our facility.
            </p>
            {CHECKS.map(c => (
              <div className="qual-check" key={c.t}>
                <div className="qc-icon">{c.icon}</div>
                <div>
                  <div className="qc-title">{c.t}</div>
                  <div className="qc-desc">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label">Project Examples</div>
          <h2 className="sec-title">Case Studies</h2>
          <p className="sec-desc">Representative projects demonstrating our precision capability across industries.</p>
          <div className="cases-grid">
            {CASES.map(c => (
              <div className="case-card" key={c.t}>
                <div className="case-img">
                  <img src={c.img} alt={c.t} />
                  <div className="case-ind">{c.ind}</div>
                </div>
                <div className="case-body">
                  <div className="case-title">{c.t}</div>
                  {c.specs.map(s => (
                    <div className="case-spec" key={s.k}>
                      <div className="spec-k">{s.k}</div>
                      <div className="spec-v">{s.v}</div>
                    </div>
                  ))}
                  <div className="case-result">{c.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <h2>Need Certified Precision Parts?</h2>
        <p>Full quality documentation included with every order.</p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
