import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const CERTS = [
  {
    cls: 'iso', logo: 'ISO', num: '9001', yr: ':2015',
    tag: 'Quality Management', title: 'ISO 9001:2015',
    desc: 'Our foundational quality management system certification, ensuring consistent processes, customer focus, and continuous improvement across all operations — from raw material receipt to final shipment.',
    meta: [{ k: 'Issued by', v: 'Bureau Veritas Certification' }, { k: 'Scope', v: 'CNC Machining, Turning, Milling, Surface Finishing' }, { k: 'Valid until', v: 'December 2026' }, { k: 'Certificate No.', v: 'BV-QMS-2021-04872' }],
  },
  {
    cls: 'env', logo: 'ISO', num: '14001', yr: ':2015',
    tag: 'Environmental Management', title: 'ISO 14001:2015',
    desc: 'Environmental management system certification demonstrating our commitment to reducing environmental impact, managing waste responsibly, and operating a sustainable precision manufacturing facility.',
    meta: [{ k: 'Issued by', v: 'DNV GL Business Assurance' }, { k: 'Scope', v: 'Manufacturing Operations, Waste & Emissions Control' }, { k: 'Valid until', v: 'September 2026' }, { k: 'Certificate No.', v: 'DNV-EMS-2022-11948' }],
  },
  {
    cls: 'safety', logo: 'ISO', num: '45001', yr: ':2018',
    tag: 'Occupational Health & Safety', title: 'ISO 45001:2018',
    desc: 'Occupational health and safety management system certification demonstrating our commitment to maintaining a safe workplace, minimizing risks, preventing work-related injuries, and ensuring the well-being of all employees within our precision manufacturing operations.',
    meta: [
      { k: 'Issued by', v: 'DNV GL Business Assurance' },
      { k: 'Scope', v: 'Workplace Safety, Risk Management & Employee Well-being' },
      { k: 'Valid until', v: 'September 2026' },
      { k: 'Certificate No.', v: 'DNV-OHS-2022-11949' }
    ],
  }
];

const STANDARDS = [
  { i: '📐', n: 'EN 9102', d: 'First Article Inspection requirements for aerospace manufacturing' },
  { i: '🔩', n: 'DIN Standards', d: 'German DIN dimensional and material standards for industrial components' },
  { i: '📋', n: 'REACH Compliance', d: 'European chemical regulation compliance for materials and surface treatments' },
  { i: '🛡️', n: 'RoHS Compliant', d: 'Restriction of hazardous substances compliance for applicable components' },
  { i: '🔬', n: 'ASTM / AMS', d: 'Aerospace material specifications for aluminium, titanium, and steel alloys' },
  { i: '📦', n: 'MIL-SPEC Packaging', d: 'Military-specification packaging for defence component shipments' },
];

const EQUIPMENT = [
  { t: 'CMM — Zeiss Contura G2', d: '3-axis coordinate measuring machine, accuracy ±0.002mm. Calibrated quarterly.' },
  { t: 'Surface Roughness — Mitutoyo SJ-210', d: 'Ra / Rz measurement per ISO 4287. Calibrated bi-annually.' },
  { t: 'Hardness Tester — Wilson Rockwell 574', d: 'HRC / HRB / HB scale. Traceable NABL calibration certificate.' },
  { t: 'Digital Height Gauge & Vernier Instruments', d: 'Full range Mitutoyo calibrated instruments. All certs available on request.' },
];

export default function Certifications({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
        label="Our Standards"
        title="Certifications & Accreditations"
        subtitle="Internationally recognised quality frameworks ensuring every component delivered meets the highest standards demanded by European clients."
      />

      <section style={{ background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label">Quality Credentials</div>
            <h2 className="sec-title">Our Certifications</h2>
            <p className="sec-desc">Each certification represents our ongoing commitment to precision, traceability, and continuous improvement.</p>
          </Reveal>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <Reveal delay={i * 0.15} key={c.title} style={{ height: '100%' }}>
                <div className="cert-card" style={{ height: '100%' }}>
                <div className="cert-top">
                  <div className="cert-badge">
                    <div className="cert-ring" />
                    <div className={`cert-inner ${c.cls}`}>
                      <div className="cert-logo">{c.logo}</div>
                      <div className="cert-num">{c.num}</div>
                      <div className="cert-yr">{c.yr}</div>
                    </div>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-tag">{c.tag}</div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-desc">{c.desc}</div>
                  <div className="cert-meta">
                    {c.meta.map(m => (
                      <div className="cert-meta-row" key={m.k}>
                        <span className="cert-mk">{m.k}</span>
                        <span className="cert-mv">{m.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cert-status">
                    <div className="cert-status-dot" />
                    <span>Currently Active &amp; Audited Annually</span>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label" style={{ color: 'var(--accent)' }}>Compliance</div>
            <h2 className="sec-title lt">Standards &amp; Compliance Framework</h2>
            <p className="sec-desc lt">In addition to formal certifications, Microcraft operates in compliance with a range of international and European technical standards.</p>
          </Reveal>
          <div className="stds-grid">
            {STANDARDS.map((s, i) => (
              <Reveal delay={i * 0.1} key={s.n} style={{ height: '100%' }}>
                <div className="std-item" style={{ height: '100%' }}>
                <div className="std-icon">{s.i}</div>
                <div className="std-name">{s.n}</div>
                <div className="std-desc">{s.d}</div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
          <div>
            <Reveal direction="left">
              <div className="sec-label">Metrology</div>
              <h2 className="sec-title">Certified Inspection Equipment</h2>
              <p style={{ fontSize: '15.5px', color: 'var(--grey-dark)', marginTop: '16px', fontWeight: 400, lineHeight: '1.85', marginBottom: '24px' }}>
                All inspection instruments are calibrated and traceable to national measurement standards. Full documentation provided with every shipment.
              </p>
            </Reveal>
            {EQUIPMENT.map((r, i) => (
              <Reveal delay={0.2 + (i * 0.1)} key={r.t} direction="left">
                <div className="insp-row">
                  <div className="insp-dot" />
                  <div>
                    <strong>{r.t}</strong><br />
                    <span style={{ fontSize: '13.5px', color: 'var(--grey-dark)', fontWeight: 400 }}>{r.d}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="right">
            <img src="../images/qa.png" alt="CMM Inspection" style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '4px' }} />
          </Reveal>
        </div>
      </section>

      <Reveal delay={0.1}>
        <div className="cta-strip">
          <h2>Need Certification Documentation?</h2>
          <p>Full quality docs and material certs provided with every order.</p>
          <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
        </div>
      </Reveal>

      <Footer setPage={setPage} />
    </div>
  );
}
