import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const COUNTRIES = ['Germany','France','United Kingdom','Netherlands','Sweden','Italy','Spain','Poland','Belgium','Switzerland','Austria','Denmark','Norway','Finland','Other'];

const DETAILS = [
  { icon: '🏭', label: 'Company', val: 'Microcraft Engineering' },
  { icon: '📍', label: 'Location', val: 'India (European Export)' },
  { icon: '✉️', label: 'Email', val: 'info@microcraft.in' },
  { icon: '📞', label: 'Phone', val: '+91 XXXXX XXXXX' },
];

const EXPORT_FEATURES = [
  { i: '📦', t: 'Secure Packaging', d: 'Custom export packaging with VCI protection and foam-secured component trays.' },
  { i: '📄', t: 'Full Documentation', d: 'Commercial invoices, packing lists, COO certificates, material certs, and inspection reports.' },
  { i: '🤝', t: 'EU Business Support', d: 'Dedicated European sales and technical support for RFQs, samples, and supply agreements.' },
  { i: '🔁', t: 'Reliable Lead Times', d: 'From 2-week prototype samples to high-volume repeat supply programs.' },
];

export default function Contact({ setPage }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80"
        label="Get In Touch"
        title="Request for Quotation"
        subtitle="Submit your engineering drawings and project requirements. Our technical team will respond with a detailed quotation within 48 hours."
      />

      <section style={{ background: 'var(--off-white)' }}>
        <div className="contact-inner">
          {/* Left: Info */}
          <div>
            <div className="sec-label">Contact Details</div>
            <h2 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '26px', color: 'var(--navy)', margin: '16px 0 12px' }}>Microcraft Engineering</h2>
            <p style={{ fontSize: '14px', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: '1.8', marginBottom: '32px' }}>
              We serve European aerospace, defence, and industrial manufacturers from our precision CNC facility in India. Our dedicated European support team handles all enquiries.
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
            <div style={{ marginTop: '36px', background: 'var(--navy)', borderRadius: '4px', padding: '24px', border: '1px solid rgba(232,160,32,.2)' }}>
              <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '10px' }}>🇪🇺 Serving All European Markets</div>
              <div style={{ fontSize: '13px', color: 'var(--grey-light)', lineHeight: '1.8' }}>
                Germany · France · United Kingdom · Netherlands · Sweden · Italy · Spain · Poland · Belgium · Switzerland · Austria · Denmark · Norway · Finland
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '28px', color: 'var(--navy)', marginBottom: '8px' }}>Request Submitted!</div>
                <p style={{ fontSize: '15px', color: 'var(--grey-mid)', fontWeight: 300 }}>Our technical team will review your enquiry and respond within 48 hours.</p>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '26px', color: 'var(--navy)', marginBottom: '6px' }}>Request for Quotation</div>
                <div style={{ fontSize: '13px', color: 'var(--grey-mid)', marginBottom: '28px' }}>Fill in your details — we respond within 48 hours.</div>
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
                    <div className="upload-zone">
                      <div style={{ fontSize: '28px' }}>📎</div>
                      <p style={{ fontSize: '13px', color: 'var(--grey-mid)', marginTop: '6px' }}>Click to upload DWG, DXF, PDF, STEP — Max 25MB</p>
                    </div>
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
