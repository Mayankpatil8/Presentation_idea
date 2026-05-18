import React, { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const TESTIMONIALS = [
  {


    stars: '★★★★★',

    quote: '"Product quality is very good and even complex engineering jobs are handled efficiently. Microcraft Engineering stands out with their ability to support urgent delivery requirements and maintain consistent performance."',

    detailedFeedback: {
      quality: "Product quality is very good with high consistency.",
      capability: "Able to handle difficult and complex engineering jobs.",
      support: "Provides support to expedite and prepone deliveries when required.",
      performance: "Rated at 95% for overall performance.",
      recommendation: "Yes — considered a cut above others in the industry.",
      futureGrowth: "Business volumes are expected to grow in the coming years.",
      suggestion: "Maintain stock availability of regular raw materials for smoother operations."
    },

    initials: 'MK',
    avcls: 'av-gold',

    name: 'Markus Keller',
    role: 'Head of Procurement',
    company: 'Keller Precision GmbH',

    contactPerson: 'Stefan Müller',

    badge: '✓ Verified Client · European Manufacturing Sector',

    formImage: '/images/feedback5.png', // your image

    icon: '📄',

    date: '04-05-2025',

    ratings: {
      responsiveness: 4,
      professionalism: 4,
      technicalSupport: 4,
      delivery: 4,
      quality: 5,
      overall: 5
    }
  },
  {
    stars: '★★★★★',

    quote: '"The team at Microcraft Engineering maintains a high level of professionalism and consistently meets our technical expectations. Their responsiveness and commitment to delivery timelines make them a dependable partner for our operations."',

    initials: 'VL',
    avcls: 'av-gold',

    name: 'Jimmy Wykes',
    role: 'Senior Engineer',
    company: 'VEEM Ltd.',

    contactPerson: 'Jimmy Wykes',

    badge: '✓ Verified Client · Oil & Gas Sector',

    formImage: '/images/feedback4.jpg', // second form image

    icon: '📄',

    date: '05-05-2025',

    ratings: {
      responsiveness: 4,
      professionalism: 4,
      technicalSupport: 4,
      delivery: 4,
      quality: 4,
      overall: 4
    }
  },
  {
    stars: '★★★☆☆',

    quote: '"Microcraft Engineering maintains a professional approach and demonstrates good responsiveness in communication. While overall performance is satisfactory, there is scope for improvement in delivery timelines and consistency in technical execution."',

    detailedFeedback: {
      responsiveness: "Good responsiveness and communication support.",
      professionalism: "Professional handling of projects and interactions.",
      technicalSupport: "Satisfactory, with room for improvement in technical consistency.",
      delivery: "Delivery timelines can be improved for better alignment with expectations.",
      quality: "Product quality is acceptable but can be enhanced further.",
      overall: "Overall experience is satisfactory with potential for improvement."
    },

    initials: 'SE',
    avcls: 'av-blue',

    name: 'Mr. Anil Singh',
    role: 'Project Manager',
    company: 'Schneider Electric Infrastructure Ltd.',

    contactPerson: 'Mr. Anil Singh',

    badge: '✓ Verified Client · Energy & Infrastructure Sector',

    formImage: '/images/feedback6.jpg',

    icon: '📄',

    date: '29-04-2025',

    ratings: {
      responsiveness: 4,
      professionalism: 4,
      technicalSupport: 3,
      delivery: 3,
      quality: 3,
      overall: 3
    }
  },
  {


    stars: '★★★★★',

    quote: '"Microcraft Engineering has demonstrated excellent responsiveness and professionalism throughout our engagements. Their technical support is strong, and delivery performance aligns well with our operational expectations."',

    initials: 'WF',
    avcls: 'av-blue',

    name: 'Mr. Pradip',
    role: 'Technical Lead',
    company: 'Weatherford India Pvt. Ltd.',

    contactPerson: 'Pradip Patel',

    badge: '✓ Verified Client · Oil & Gas Sector',

    formImage: '/images/feedback3.jpg', // make sure file exists

    icon: '📄',

    date: '05-05-2025',

    ratings: {
      responsiveness: 4,
      professionalism: 4,
      technicalSupport: 4,
      delivery: 4,
      quality: 4,
      overall: 4
    }
  },
  {
    stars: '★★★★☆',

    quote: '"Microcraft Engineering has shown excellent professionalism and strong technical expertise. Their responsiveness and delivery are reliable, and the quality of work meets high industrial standards. Overall, a highly dependable engineering partner."',

    initials: 'TD',
    avcls: 'av-industrial',

    initials: 'TD',
    avcls: 'av-gold',
    name: 'T.D Williamson',
    role: 'Client Representative',
    company: 'T.D Williamson India Pvt. Ltd.',

    contactPerson: 'Kavan Trivedi',

    badge: '✓ Verified Client · Industrial Engineering Sector',

    formImage: '../images/feedback1.jpg', // ✅ correct path

    icon: '📄',

    date: '05-05-2025',

    ratings: {
      responsiveness: 3,
      professionalism: 4,
      technicalSupport: 4,
      delivery: 3,
      quality: 4,
      overall: 4
    }
  },
  {
    stars: '★★★★☆',

    quote: '"We have experienced dependable support from Microcraft Engineering, especially in handling technical requirements efficiently. Their team communicates well and ensures steady quality output across projects."',
    detailedFeedback: {
      support: "The support team is very responsive and knowledgeable, resolving issues quickly and efficiently.",
      valueAddition: "Provides strong value through consistent delivery and a collaborative long-term partnership approach.",
      recommendation: "Yes, we would recommend Microcraft Engineering for precision engineering requirements.",
      futureOutlook: "We expect continued business growth together, with opportunities to further improve lead times.",
      improvements: "Reducing lead time and enhancing operational efficiency will strengthen performance further.",
      ambience: "Work environment is good, with minor improvements suggested in lighting and facility organization."
    },

    initials: 'RK',
    avcls: 'av-blue',

    name: 'Rohit Kulkarni',
    role: 'Operations Manager',
    company: 'Apex Precision Technologies Pvt. Ltd.',

    contactPerson: 'Sanjay Deshmukh',

    badge: '✓ Verified Client · Manufacturing Sector',

    formImage: '../images/feedback2.png', // ✅ correct path

    icon: '📄',

    date: '05-05-2025',

    ratings: {
      responsiveness: 4,
      professionalism: 4,
      technicalSupport: 4,
      delivery: 3,
      quality: 4,
      overall: 4
    }
  },

  {
    stars: '★★★★☆',

    quote: '"Microcraft Engineering has been a consistent partner in supporting our precision component requirements. Their team adapts well to project needs and maintains good coordination throughout execution."',

    initials: 'DS',
    avcls: 'av-blue',

    name: 'Deepak Sharma',
    role: 'Production Head',
    company: 'Automech Components Pvt. Ltd.',

    contactPerson: 'Rajesh Verma',

    badge: '✓ Verified Client · Automotive Sector',

    formImage: '/images/feedback7.png',

    icon: '📄',

    date: '18-04-2025',

    ratings: {
      responsiveness: 4,
      professionalism: 4,
      technicalSupport: 3,
      delivery: 4,
      quality: 4,
      overall: 4
    }
  }
];

export default function Testimonials({ setPage }) {
  const [selectedForm, setSelectedForm] = useState(null);

  const openModal = (testi) => {
    setSelectedForm(testi);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedForm(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="page">
      <SEO
        title="Client Testimonials | Global CNC Machining Reviews"
        description="Read verified testimonials from Microcraft Engineering's global clients including Keller Precision GmbH, Weatherford India, Schneider Electric, and more."
        canonical="/testimonials"
      />
      <PageHero
        bgImage="../images/led.png"
        label="Client Feedback"
        title="Customer Testimonials"
        subtitle="Direct verification from our clients. We take pride in our transparency and the high standards of quality confirmed by global engineering leaders."
      />

      <Reveal delay={0.1}>
        <div className="tstat-bar">
          {[{ n: '95%+', l: 'Customer Rating' }, { n: '4.8★', l: 'Global Average' }, { n: '100%', l: 'Transparency' }, { n: 'Verified', l: 'Feedback Forms' }].map(s => (
            <div className="tstat" key={s.l}><div className="tstat-num">{s.n}</div><div className="tstat-lbl">{s.l}</div></div>
          ))}
        </div>
      </Reveal>

      <section style={{ background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label">Verified Feedback</div>
            <h2 className="sec-title">Real Testimonials from Real Clients</h2>
            <p className="sec-desc">We believe in absolute transparency. Below are summaries of real feedback forms submitted by our global partners.</p>
          </Reveal>

          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal delay={i * 0.15} key={t.name} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className={`testi-card${t.featured ? ' testi-featured' : ''}`}>
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

                <div className="testi-footer">
                  <div className="testi-badge">{t.badge}</div>
                  <button className="view-form-btn" onClick={() => openModal(t)}>
                    <span style={{ marginRight: '6px' }}>📄</span>
                    View Original Form
                  </button>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedForm && (
        <div className="testi-modal-overlay" onClick={closeModal}>
          <div className="testi-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="testi-modal-close" onClick={closeModal}>&times;</button>
            <div className="testi-modal-img-container">
              <img
                src={selectedForm.formImage}
                alt={`Feedback form from ${selectedForm.name}`}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <div className="testi-modal-caption">
                <div className="testi-modal-info">
                  <h3>Customer Feedback Form</h3>
                  <p>{selectedForm.company} — Verified on {selectedForm.date}</p>
                </div>
                <button className="btn-p" style={{ padding: '8px 20px', fontSize: '12px' }} onClick={closeModal}>Close View</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Reveal delay={0.1}>
        <div className="cta-strip">
          <h2>Ready to Experience Microcraft Quality?</h2>
          <p>Join our list of satisfied global clients. Send your requirements today.</p>
          <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
        </div>
      </Reveal>

      <Footer setPage={setPage} />
    </div>
  );
}
