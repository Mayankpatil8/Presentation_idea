import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const INFRASTRUCTURE = [
  { icon: '⚙️', t: 'CNC Vertical Machining Centers', d: 'Advanced vertical milling for complex geometries and precision cuts.' },
  { icon: '🔄', t: 'CNC Turning Centers', d: 'High-performance turning for accurate cylindrical components.' },
  { icon: '⚡', t: 'Wire-cut EDM Machines', d: 'Electrical discharge machining for high-precision, intricate details.' },
  { icon: '💎', t: 'Precision Grinding Machines', d: 'Surface and cylindrical grinding for ultra-fine surface finishes.' },
  { icon: '🧰', t: 'Tool Room Equipment', d: 'Comprehensive tool room setup supporting all custom manufacturing needs.' },
];

const QUALITY_ASSURANCE = [
  { icon: '🔍', t: 'Raw Material Inspection', d: 'Rigorous verification of incoming materials prior to production.' },
  { icon: '📐', t: 'In-Process Dimensional Checks', d: 'Monitoring dimensions at every stage to detect and prevent deviations.' },
  { icon: '✅', t: 'Final Component Inspection', d: 'Extensive final review to ensure perfect compliance with customer drawings.' },
  { icon: '📏', t: 'Precision Measuring Instruments', d: 'Utilizing highly calibrated tools for exact dimensional assessments.' },
  { icon: '🎛️', t: 'Surface Plate Inspection', d: 'Detailed checks for geometric tolerances, flatness, and alignment.' },
];

const CASES = [
  {
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
    ind: 'Aerospace',
    t: 'Aerospace Housing Component',
    specs: [{ k: 'Material', v: 'Aluminium 7075-T651' }, { k: 'Process', v: '5-Axis CNC Milling' }, { k: 'Tolerance', v: '±0.008mm' }, { k: 'Qty', v: '500 pcs / batch' }],
    r: 'High-precision aerospace housing subjected to rigorous geometric dimensioning and tolerancing (GD&T). Full material certification and comprehensive CMM inspection reports provided for seamless Tier-1 assembly integration.',
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    ind: 'Industrial',
    t: 'Industrial Precision Shaft',
    specs: [{ k: 'Material', v: 'Alloy Steel EN24 (4340)' }, { k: 'Process', v: 'Turning & Precision Grinding' }, { k: 'Tolerance', v: 'h6 / ±0.005mm' }, { k: 'Qty', v: '1,200 pcs / month' }],
    r: 'Precision transmission shaft engineered to the most demanding international DIN/ISO standards. Uncompromising quality maintained flawlessly across repeat high-volume continuous production runs.',
  },
  {
    img: '/images/optics_enclosure_zoomed.png',
    ind: 'Defence',
    t: 'Tactical Optics Enclosure',
    specs: [{ k: 'Material', v: 'Titanium Grade 5' }, { k: 'Process', v: 'Multi-axis Milling' }, { k: 'Tolerance', v: '±0.005mm' }, { k: 'Qty', v: '200 pcs / batch' }],
    r: 'Complex, lightweight enclosure requiring perfect surface flatness for critical optical calibration. Delivered with 100% full-dimensional trace reporting and strict documentation compliance.',
  },
  {
    img: '/images/robotic_bracket_zoomed.png',
    ind: 'Robotics',
    t: 'Actuator Structural Bracket',
    specs: [{ k: 'Material', v: 'Stainless Steel 316L' }, { k: 'Process', v: 'Milling & Finishing' }, { k: 'Tolerance', v: '±0.01mm' }, { k: 'Qty', v: '2,500 pcs / month' }],
    r: 'High-strength structural bracket ensuring absolute zero-backlash movement in automated robotic arms. Subjected to extensive in-process CMM checks to guarantee perfect interchangeability.',
  },
];

export default function Quality({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="/images/ai.png"
        label="Our Commitment"
        title="Quality"
        subtitle="Stringent ISO-certified quality management ensuring every component flawlessly meets the most demanding international dimensional accuracy, surface finish, and material specification requirements."
      />

      <section style={{ background: 'var(--navy-mid)' }}>
        <div className="qual-inner">
          <div className="qual-img">
            <img src="/images/ai.png" alt="Manufacturing Infrastructure" />
            <div className="qual-cert-badge">Advanced Facility</div>
          </div>
          <div>
            <div className="sec-label" style={{ color: 'var(--accent)' }}>Our Facility</div>
            <h2 className="sec-title lt">Manufacturing Infrastructure</h2>
            <p style={{ fontSize: '15px', color: '#c0d0e0', marginBottom: '28px', fontWeight: 300, lineHeight: '1.8' }}>
              Our facility includes modern machining equipment capable of performing complex machining operations. This infrastructure allows us to manufacture components for both prototype development and production batches.
            </p>
            {INFRASTRUCTURE.map(c => (
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

      <section style={{ background: 'var(--off-white)', padding: '80px 20px' }}>
        <div className="qual-inner" style={{ alignItems: 'center' }}>
          <div>
            <div className="sec-label" style={{ color: 'var(--navy-mid)' }}>Quality Control</div>
            <h2 className="sec-title" style={{ color: '#111' }}>Quality Assurance</h2>
            <p style={{ fontSize: '15px', color: '#555', marginBottom: '28px', fontWeight: 300, lineHeight: '1.8' }}>
              Quality is central to every stage of production at Microcraft Engineering. All components are inspected to ensure compliance with customer drawings and specifications.
            </p>
            {QUALITY_ASSURANCE.map(c => (
              <div className="qual-check" key={c.t}>
                <div className="qc-icon">{c.icon}</div>
                <div>
                  <div className="qc-title" style={{ color: '#222' }}>{c.t}</div>
                  <div className="qc-desc" style={{ color: '#666' }}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="qual-img">
            <img src="/images/qa_inspection.png" alt="Quality Assurance" className="img-cover" />
            <div className="qual-cert-badge" style={{ background: 'var(--accent)', color: 'white' }}>Microcraft Engineering</div>
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
