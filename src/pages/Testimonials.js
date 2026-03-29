import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const TESTIMONIALS = [
  { featured: true, stars: '★★★★★', quote: '"We sourced a critical aluminium housing component for our satellite ground equipment from Microcraft. The tolerances were ±0.008mm — and they delivered every single part within spec, on time, with full CMM reports. Exceptional precision and reliability. We\'ve now placed them on our approved vendor list."', initials: 'HM', avcls: 'av-blue', name: 'Hans Möller', role: 'Senior Procurement Manager', company: '🇩🇪 Rheinmetall Aerospace Systems, Germany', badge: '★ Verified Client · Aerospace Sector' },
  { stars: '★★★★★', quote: '"Outstanding quality and communication. We needed 800 precision shafts in EN24 alloy steel with tight h6 tolerance. Microcraft delivered the complete batch in 4 weeks — ahead of schedule — with material certs and full dimensional inspection reports attached."', initials: 'SL', avcls: 'av-steel', name: 'Sophie Laurent', role: 'Manufacturing Engineer', company: '🇫🇷 Safran Industrial, France', badge: '✓ Verified Client · Industrial Sector' },
  { stars: '★★★★★', quote: '"We trialled Microcraft with 200 titanium brackets for a defence sub-assembly. The components were machined to an exceptional standard — better surface finish than our previous European supplier, and at a significantly better price. Export documentation was faultless."', initials: 'JW', avcls: 'av-gold', name: 'James Worthington', role: 'Supply Chain Director', company: '🇬🇧 BAE Systems Component Supply, UK', badge: '✓ Verified Client · Defence Sector' },
  { stars: '★★★★★', quote: '"We\'ve been using Microcraft for our industrial robot arm parts for 18 months. Consistent quality, responsive technical team, and packaging that protects every component perfectly. The Zeiss CMM reports included with each shipment make our incoming inspection very straightforward."', initials: 'RV', avcls: 'av-blue', name: 'Rik van der Berg', role: 'Operations Manager', company: '🇳🇱 Vanderlande Automation, Netherlands', badge: '✓ Verified Client · Robotics & Automation' },
  { stars: '★★★★☆', quote: '"Very good overall experience. The first sample order had a minor surface finish query which their team resolved immediately — no pushback, just action. Since then, 3 production orders have been flawless. Highly recommended as a reliable Indian precision machining partner."', initials: 'EK', avcls: 'av-steel', name: 'Erik Karlsson', role: 'Quality Assurance Lead', company: '🇸🇪 Volvo Cars Component Sourcing, Sweden', badge: '✓ Verified Client · Automotive Sector' },
  { stars: '★★★★★', quote: '"Microcraft not only delivered perfectly machined stainless components, but their documentation — material declarations, surface treatment certificates — was exactly what our REACH compliance team required. Truly a professional supplier for European standards."', initials: 'MF', avcls: 'av-gold', name: 'Marco Ferrari', role: 'Head of Procurement', company: '🇮🇹 Comau Industrial Systems, Italy', badge: '✓ Verified Client · Industrial Machinery' },
];



export default function Testimonials({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80"
        label="Client Feedback"
        title="Customer Testimonials"
        subtitle="Trusted by procurement managers, engineers, and quality teams across European aerospace, defence, and industrial companies."
      />

      <div className="tstat-bar">
        {[{ n: '98%', l: 'On-Time Delivery' }, { n: '4.9★', l: 'Average Rating' }, { n: '40+', l: 'European Clients' }, { n: '0 ppm', l: 'Defect Rate Target' }].map(s => (
          <div className="tstat" key={s.l}><div className="tstat-num">{s.n}</div><div className="tstat-lbl">{s.l}</div></div>
        ))}
      </div>

      <section style={{ background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label">What Clients Say</div>
          <h2 className="sec-title">Trusted by European Manufacturers</h2>
          <p className="sec-desc">Verified feedback from procurement managers, quality engineers, and operations directors.</p>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className={`testi-card${t.featured ? ' testi-featured' : ''}`}>
                <div className="testi-stars">{t.stars}</div>
                <div className="testi-quote">{t.quote}</div>
                <div className="testi-author">
                  <div className={`t-avatar ${t.avcls}`}>{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                    <div className="t-company">{t.company}</div>
                  </div>
                </div>
                <div className="testi-badge">{t.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <div className="cta-strip">
        <h2>Ready to Experience Microcraft Quality?</h2>
        <p>Send your drawings and get a detailed quotation within 48 hours.</p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
