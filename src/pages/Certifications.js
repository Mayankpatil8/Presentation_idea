import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const CERTS = [
  {
    cls: 'iso', logo: 'ISO', num: '9001', yr: ':2015',
    tag: 'Quality Management', title: 'ISO 9001:2015',
    desc: 'Our foundational quality management system certification, ensuring consistent processes, customer focus, and continuous improvement across all operations — from raw material receipt to final shipment.',
    meta: [{ k: 'Issued by', v: 'Bureau Veritas Certification' }, { k: 'Scope', v: 'CNC Machining, Turning, Milling, Surface Finishing' }, { k: 'Valid until', v: 'December 2026' }, { k: 'Certificate No.', v: 'BV-QMS-2021-04872' }],
  },
  {
    cls: 'as', logo: 'AS', num: '9100', yr: 'Rev D',
    tag: 'Aerospace Quality', title: 'AS9100 Rev D',
    desc: 'The international standard for aviation, space, and defence quality management systems. Validates our capability to produce safety-critical aerospace components with full traceability and zero-defect focus.',
    meta: [{ k: 'Issued by', v: 'TÜV SÜD Management Service GmbH' }, { k: 'Scope', v: 'Precision CNC — Aerospace & Defence Components' }, { k: 'Valid until', v: 'March 2027' }, { k: 'Certificate No.', v: 'TUV-AS-2022-00391-DE' }],
  },
  {
    cls: 'env', logo: 'ISO', num: '14001', yr: ':2015',
    tag: 'Environmental Management', title: 'ISO 14001:2015',
    desc: 'Environmental management system certification demonstrating our commitment to reducing environmental impact, managing waste responsibly, and operating a sustainable precision manufacturing facility.',
    meta: [{ k: 'Issued by', v: 'DNV GL Business Assurance' }, { k: 'Scope', v: 'Manufacturing Operations, Waste & Emissions Control' }, { k: 'Valid until', v: 'September 2026' }, { k: 'Certificate No.', v: 'DNV-EMS-2022-11948' }],
  },
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

      <section style={{ background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label">Quality Credentials</div>
          <h2 className="sec-title">Our Certifications</h2>
          <p className="sec-desc">Each certification represents our ongoing commitment to precision, traceability, and continuous improvement.</p>
          <div className="cert-grid">
            {CERTS.map(c => (
              <div className="cert-card" key={c.title}>
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
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label" style={{ color: 'var(--accent)' }}>Compliance</div>
          <h2 className="sec-title lt">Standards &amp; Compliance Framework</h2>
          <p className="sec-desc lt">In addition to formal certifications, Microcraft operates in compliance with a range of international and European technical standards.</p>
          <div className="stds-grid">
            {STANDARDS.map(s => (
              <div className="std-item" key={s.n}>
                <div className="std-icon">{s.i}</div>
                <div className="std-name">{s.n}</div>
                <div className="std-desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
          <div>
            <div className="sec-label">Metrology</div>
            <h2 className="sec-title">Certified Inspection Equipment</h2>
            <p style={{ fontSize: '15px', color: 'var(--grey-mid)', marginTop: '16px', fontWeight: 300, lineHeight: '1.8', marginBottom: '24px' }}>
              All inspection instruments are calibrated and traceable to national measurement standards. Full documentation provided with every shipment.
            </p>
            {EQUIPMENT.map(r => (
              <div className="insp-row" key={r.t}>
                <div className="insp-dot" />
                <div>
                  <strong>{r.t}</strong><br />
                  <span style={{ fontSize: '13px', color: 'var(--grey-mid)' }}>{r.d}</span>
                </div>
              </div>
            ))}
          </div>
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80" alt="CMM Inspection" style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
      </section>

      <div className="cta-strip">
        <h2>Need Certification Documentation?</h2>
        <p>Full quality docs and material certs provided with every order.</p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
