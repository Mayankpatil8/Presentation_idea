import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

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
      <SEO
        title="Quality Assurance | ISO Certified CNC Manufacturer India"
        description="Microcraft Engineering's ISO-certified quality management ensures every precision component meets stringent dimensional accuracy, surface finish, and material specification requirements."
        canonical="/quality"
      />
      <PageHero
        bgImage="/images/ai.png"
        label="Our Commitment"
        title="Quality"
        subtitle="Stringent ISO-certified quality management ensuring every component flawlessly meets the most demanding international dimensional accuracy, surface finish, and material specification requirements."
      />

      <section style={{ background: 'var(--navy-mid)' }}>
        <div className="qual-inner">
          <Reveal direction="left">
            <div className="qual-img">
              <img src="https://res.cloudinary.com/dyelfz2ku/image/upload/v1778125547/ai_yd6bu4.png" alt="Manufacturing Infrastructure at Microcraft Engineering" loading="lazy" />
              <div className="qual-cert-badge">Advanced Facility</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="sec-label" style={{ color: 'var(--accent)' }}>Our Facility</div>
              <h2 className="sec-title lt">Manufacturing Infrastructure</h2>
              <p style={{ fontSize: '15px', color: '#c0d0e0', marginBottom: '28px', fontWeight: 300, lineHeight: '1.8' }}>
                Our facility includes modern machining equipment capable of performing complex machining operations. This infrastructure allows us to manufacture components for both prototype development and production batches.
              </p>
            </Reveal>
            {INFRASTRUCTURE.map((c, i) => (
              <Reveal delay={0.2 + (i * 0.1)} key={c.t}>
                <div className="qual-check">
                  <div className="qc-icon">{c.icon}</div>
                  <div>
                    <div className="qc-title">{c.t}</div>
                    <div className="qc-desc">{c.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      <section style={{ background: 'var(--off)', padding: '80px 20px' }}>
        <div className="qual-inner" style={{ alignItems: 'center' }}>
          <div>
            <Reveal direction="left">
              <div className="sec-label" style={{ color: 'var(--navy-mid)' }}>Quality Control</div>

              <h2 className="sec-title" style={{ color: 'var(--navy)' }}>Quality Assurance</h2>

              <p style={{ fontSize: '15.5px', color: 'var(--grey-dark)', marginBottom: '28px', fontWeight: 400, lineHeight: '1.85' }}>
                Quality is central to every stage of production at Microcraft Engineering. All components are inspected to ensure compliance with customer drawings and specifications.
              </p>
            </Reveal>
            {QUALITY_ASSURANCE.map((c, i) => (
              <Reveal delay={0.2 + (i * 0.1)} direction="left" key={c.t}>
                <div className="qual-check">
                  <div className="qc-icon">{c.icon}</div>
                  <div>
                    <div className="qc-title" style={{ color: 'var(--navy)', fontWeight: 700 }}>{c.t}</div>
                    <div className="qc-desc" style={{ color: 'var(--grey-dark)', fontWeight: 400 }}>{c.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="right">
            <div className="qual-img">
              <img src="https://res.cloudinary.com/dyelfz2ku/image/upload/v1778126116/qa_inspection_qqiohr.jpg" alt="Quality Assurance and Inspection at Microcraft Engineering" className="img-cover" loading="lazy" />
              <div
                style={{
                  background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                  borderRadius: '12px',
                  padding: '25px',
                  marginBottom: '30px',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
                  QUALITY DOCUMENTATION
                </div>

                <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>
                  Instrument Calibration Records
                </h3>

                <p style={{ fontSize: '14px', color: '#cbd5f5', marginBottom: '20px', lineHeight: '1.6' }}>
                  Comprehensive list of calibrated instruments, accuracy standards, and inspection capabilities ensuring precision compliance.
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

                  <a
                    href="/docs/instruction.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '10px 18px',
                      background: 'white',
                      color: '#111',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    👁 View Document
                  </a>

                  <a
                    href="/docs/instruments.pdf"
                    download
                    style={{
                      padding: '10px 18px',
                      background: 'var(--accent)',
                      color: '#fff',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    📄 Download PDF
                  </a>

                </div>
              </div>
              <div className="qual-cert-badge" style={{ background: 'var(--accent)', color: 'white' }}>Microcraft Engineering</div>
            </div>
          </Reveal>
        </div>

      </section>

      <section style={{ background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label">Project Examples</div>
            <h2 className="sec-title">Case Studies</h2>
            <p className="sec-desc">Representative projects demonstrating our precision capability across industries.</p>
          </Reveal>
          <div className="cases-grid">
            {CASES.map((c, i) => (
              <Reveal delay={i * 0.15} key={c.t} style={{ height: '100%' }}>
                <div className="case-card" style={{ height: '100%' }}>
                  <div className="case-img">
                    <img src={c.img} alt={c.t + ' - Microcraft Engineering precision component'} loading="lazy" />
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal delay={0.1}>
        <div className="cta-strip">
          <h2>Need Certified Precision Parts?</h2>
          <p>Full quality documentation included with every order.</p>
          <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
        </div>
      </Reveal>

      <Footer setPage={setPage} />
    </div>
  );
}
