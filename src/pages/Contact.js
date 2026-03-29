import React, { useState, useRef } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const COUNTRIES = ['India', 'Germany', 'France', 'United Kingdom', 'Netherlands', 'Sweden', 'Italy', 'Spain', 'Poland', 'Belgium', 'Switzerland', 'Austria', 'Denmark', 'Norway', 'Finland', 'United States', 'Canada', 'Japan', 'South Korea', 'Other'];

const DETAILS = [
  { icon: '🏢', label: 'Company', val: 'Microcraft Engineering' },
  { icon: '✉️', label: 'Email', val: 'info@microcraft.in' },
  { icon: '📞', label: 'Phone / WhatsApp', val: '+91 XXXXX XXXXX' },
];

const EXPORT_FEATURES = [
  { i: '📦', t: 'Secure Packaging', d: 'Custom export packaging with VCI protection and foam-secured component trays.' },
  { i: '📄', t: 'Full Documentation', d: 'Commercial invoices, packing lists, COO certificates, material certs, and inspection reports.' },
  { i: '🤝', t: 'EU Business Support', d: 'Dedicated European sales and technical support for RFQs, samples, and supply agreements.' },
  { i: '🔁', t: 'Reliable Lead Times', d: 'From 2-week prototype samples to high-volume repeat supply programs.' },
];

export default function Contact({ setPage }) {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const uploadRef = useRef(null);

  const addFiles = (incoming) => {
    const valid = Array.from(incoming).filter(f => f.size <= 25 * 1024 * 1024);
    setFiles(prev => {
      const existing = new Set(prev.map(f => f.name));
      return [...prev, ...valid.filter(f => !existing.has(f.name))];
    });
  };
  const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name));
  const onDrop = (e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); };
  const fmtSize = (b) => b < 1048576 ? (b/1024).toFixed(1)+' KB' : (b/1048576).toFixed(1)+' MB';

  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80"
        label="Get In Touch"
        title="Request for Quotation"
        subtitle="Submit your engineering drawings and project requirements. Our technical team will respond with a detailed quotation within 24 hours."
      />

      <section style={{ background: 'var(--off-white)' }}>
        <div className="contact-inner">
          {/* Left: Info */}
          <div>
            <div className="sec-label">Contact Details</div>
            <h2 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '26px', color: 'var(--navy)', margin: '16px 0 12px' }}>Microcraft Engineering</h2>
            <p style={{ fontSize: '14px', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: '1.8', marginBottom: '32px' }}>
              Microcraft Engineering is a precision CNC manufacturer serving global clients across India, Europe, and beyond. We support aerospace, defence, industrial, and automation sectors with high-accuracy components, full documentation, and reliable international delivery.
            </p>
            {DETAILS.map(d => (
              <div className="contact-detail" key={d.label}>
                <div className="cd-icon">{d.icon}</div>
                <div>
                  <div className="cd-label">{d.label}</div>
                  <div className="cd-val">{d.val}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '36px', background: 'var(--navy)', borderRadius: '8px', padding: '22px 24px', border: '1px solid rgba(232,160,32,.2)' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
                Global Client Reach
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {[
                  { abbr: 'IN', label: 'India',  color: '#e07820', bg: 'rgba(224,120,32,0.15)', desc: 'Domestic manufacturing for all sectors' },
                  { abbr: 'EU', label: 'Europe', color: '#4a90d9', bg: 'rgba(74,144,217,0.15)', desc: 'EU & UK export-ready supply' },
                  { abbr: 'GL', label: 'Global', color: '#2ecc8a', bg: 'rgba(46,204,138,0.15)', desc: 'USA, Asia & international projects' },
                ].map(r => (
                  <div key={r.abbr} style={{
                    background: r.bg,
                    border: `1px solid ${r.color}55`,
                    borderRadius: '8px',
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '44px', height: '44px', borderRadius: '8px',
                      background: r.color, marginBottom: '10px',
                      fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '13px',
                      color: '#fff', letterSpacing: '.06em',
                    }}>{r.abbr}</div>
                    <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '4px' }}>{r.label}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '28px', color: 'var(--navy)', marginBottom: '8px' }}>Request Submitted!</div>
                <p style={{ fontSize: '15px', color: 'var(--grey-mid)', fontWeight: 300 }}>Our technical team will review your enquiry and respond within 24 hours.</p>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '26px', color: 'var(--navy)', marginBottom: '6px' }}>Request for Quotation</div>
                <div style={{ fontSize: '13px', color: 'var(--grey-mid)', marginBottom: '28px' }}>Fill in your details — we respond within 24 hours.</div>
                <div className="form-grid">
                  <div className="fg"><label>Full Name *</label><input type="text" placeholder="Your name" /></div>
                  <div className="fg"><label>Company *</label><input type="text" placeholder="Company name" /></div>
                  <div className="fg"><label>Email *</label><input type="email" placeholder="you@company.com" /></div>
                  <div className="fg">
                    <label>Country *</label>
                    <select defaultValue="">
                      <option value="" disabled>Select country</option>
                      {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="fg form-full"><label>Quantity / Batch Size</label><input type="text" placeholder="e.g. 500 pcs / month" /></div>
                  <div className="fg form-full"><label>Material Specification</label><input type="text" placeholder="e.g. Aluminium 7075, Stainless 316L, Titanium Ti-6Al-4V" /></div>
                  <div className="fg form-full"><label>Project Description *</label><textarea placeholder="Describe your component, application, tolerance requirements..." /></div>
                  <div className="fg form-full">
                    <label>Upload Engineering Drawings</label>
                    <div
                      className="upload-zone"
                      style={dragging ? { borderColor: 'var(--accent)', background: 'rgba(232,160,32,.04)' } : {}}
                      onClick={() => uploadRef.current.click()}
                      onDragOver={e => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={onDrop}
                    >
                      <input
                        ref={uploadRef}
                        type="file"
                        multiple
                        accept=".dwg,.dxf,.pdf,.step,.stp,.iges,.igs,.stl"
                        style={{ display: 'none' }}
                        onChange={e => addFiles(e.target.files)}
                      />
                      <div style={{ fontSize: '28px', marginBottom: '6px' }}>📎</div>
                      <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy)', marginBottom: '3px' }}>
                        {dragging ? '⬇ Drop files here' : 'Click or drag & drop files'}
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--grey-mid)', margin: 0 }}>DWG, DXF, PDF, STEP, IGES, STL — Max 25 MB each</p>
                    </div>
                    {files.length > 0 && (
                      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {files.map(f => (
                          <div key={f.name} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            background: '#f4f6f8', border: '1px solid #dde2e8',
                            borderRadius: '4px', padding: '7px 12px',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                              <span style={{ flexShrink: 0 }}>📄</span>
                              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                              <span style={{ fontSize: '11px', color: 'var(--grey-mid)', flexShrink: 0 }}>{fmtSize(f.size)}</span>
                            </div>
                            <button onClick={e => { e.stopPropagation(); removeFile(f.name); }}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0392b', fontSize: '18px', fontWeight: 700, lineHeight: 1, padding: '0 4px', flexShrink: 0 }}
                              title="Remove">×</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="form-full">
                    <button className="form-btn" onClick={() => setSubmitted(true)}>▶&ensp;Submit Request for Quotation</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Export Info */}
      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label" style={{ color: 'var(--accent)' }}>Global Reach</div>
          <h2 className="sec-title lt">European Export &amp; Client Support</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', marginTop: '40px' }}>
            {EXPORT_FEATURES.map(f => (
              <div key={f.t} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '24px 20px' }}>
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{f.i}</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '6px' }}>{f.t}</div>
                <div style={{ fontSize: '13px', color: 'var(--grey-light)', fontWeight: 300 }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
