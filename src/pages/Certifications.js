import React, { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const CERTS = [
  {
    cls: 'iso',
    logo: 'ISO',
    num: '14001',
    yr: ':2015',

    tag: 'Environmental Management',

    title: 'ISO 14001:2015',

    desc: 'Our Environmental Management System certification demonstrates Microcraft Engineering’s commitment to sustainable manufacturing practices, reducing environmental impact, efficient resource utilization, and continuous improvement in all operations related to engineering component manufacturing.',

    meta: [
      { k: 'Issued by', v: 'Royal Assessments Pvt. Ltd.' },
      { k: 'Scope', v: 'Manufacturing and Machining Job Work for Engineering Components' },
      { k: 'Valid until', v: '03 March 2029' },
      { k: 'Certificate No.', v: 'E20260347075' }
    ],
    link: '/images/certificate1.jpg', // Placeholder image for testing
  },
  {
    cls: 'qms',
    logo: 'ISO',
    num: '9001',
    yr: ':2015',

    tag: 'Quality Management',

    title: 'ISO 9001:2015',

    desc: 'Our Quality Management System certification from TÜV SÜD demonstrates Microcraft Engineering’s commitment to consistent quality, precision manufacturing, and continuous improvement in engineering component production processes.',

    meta: [
      { k: 'Issued by', v: 'TÜV SÜD South Asia Private Limited' },
      { k: 'Scope', v: 'Manufacturing and Machining Job Work for Engineering Components' },
      { k: 'Valid until', v: '09 July 2027' },
      { k: 'Certificate No.', v: '99 100 18762' }
    ],
    link: '/images/certificate2.jpg',
  },
  {
    cls: 'safety',
    logo: 'ISO',
    num: '45001',
    yr: ':2018',

    tag: 'Occupational Health & Safety',

    title: 'ISO 45001:2018',

    desc: 'Our Occupational Health and Safety Management System certification demonstrates Microcraft Engineering’s commitment to maintaining a safe and healthy workplace, minimizing operational risks, preventing work-related injuries, and ensuring employee well-being across all manufacturing and machining operations.',

    meta: [
      { k: 'Issued by', v: 'Royal Assessments Pvt. Ltd.' },
      { k: 'Scope', v: 'Manufacturing and Machining Job Work for Engineering Components' },
      { k: 'Valid until', v: '03 March 2029' },
      { k: 'Certificate No.', v: 'E20260347076' }
    ],
    link: '/images/certificate3.jpg',
  }
];

const STANDARDS = [
  { i: '📐', n: 'EN 9102', d: 'First Article Inspection requirements for aerospace manufacturing' },
  { i: '🔩', n: 'DIN Standards', d: 'German DIN dimensional and material standards for industrial components' },
  { i: '📋', n: 'REACH Compliance', d: 'Worldwide chemical regulation compliance for materials and surface treatments' },
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
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="page">
      <SEO
        title="ISO Certifications | Quality Accreditations | Microcraft Engineering"
        description="Microcraft Engineering holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications, ensuring internationally recognised quality standards in precision CNC manufacturing."
        canonical="/certifications"
      />
      <PageHero
        bgImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
        label="Our Standards"
        title="Certifications & Accreditations"
        subtitle="Internationally recognised quality frameworks ensuring every component delivered meets the highest standards demanded by International clients."
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
                    {c.link && (
                      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => openModal(c)} className="btn-cert-view">
                          <span>View Certificate</span>
                        </button>
                      </div>
                    )}
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
            <p className="sec-desc lt">In addition to formal certifications, Microcraft operates in compliance with a range of international and Worldwide technical standards.</p>
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
            <img src="https://res.cloudinary.com/dyelfz2ku/image/upload/v1778125598/qa_orcvog.png" alt="CMM Inspection Equipment at Microcraft Engineering" style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '4px' }} loading="lazy" />
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

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="testi-modal-overlay" onClick={closeModal}>
          <div className="testi-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="testi-modal-close" onClick={closeModal}>&times;</button>
            <div className="testi-modal-img-container">
              <img
                src={selectedCert.link}
                alt={`${selectedCert.title} Certificate`}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <div className="testi-modal-caption">
                <div className="testi-modal-info">
                  <h3>{selectedCert.title} Certificate</h3>
                  <p>Valid until {selectedCert.meta.find(m => m.k === 'Valid until')?.v || 'N/A'}</p>
                </div>
                <button className="btn-p" style={{ padding: '8px 20px', fontSize: '12px' }} onClick={closeModal}>Close View</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer setPage={setPage} />
    </div>
  );
}
