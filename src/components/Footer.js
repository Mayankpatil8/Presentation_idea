import React from 'react';

export default function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <button
          className="logo"
          onClick={() => go('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px 0'
          }}
        >
          <img
            src="../images/logo3.png"
            alt="Microcraft Engineering"
            style={{
              height: '40px',          // 🔥 adjust between 60–80 based on navbar height
              width: 'auto',
              objectFit: 'contain',

              // 🔥 Make logo POP on black navbar
              filter: 'brightness(1.3) contrast(1.2)',

              // 🔥 subtle glow for visibility
              dropShadow: '0 0 8px rgba(255,140,0,0.6)'
            }}
          />
        </button>
          <p className="footer-desc">
            Precision CNC machining for European aerospace, defence, and industrial manufacturers.
            ISO-certified quality, reliable export logistics.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <div className="footer-links">
            <button onClick={() => go('capabilities')}>CNC Milling (3/4/5 Axis)</button>
            <button onClick={() => go('capabilities')}>CNC Turning</button>
            <button onClick={() => go('capabilities')}>Multi-Axis Machining</button>
            <button onClick={() => go('capabilities')}>Surface Finishing</button>
            <button onClick={() => go('quality')}>Quality Inspection</button>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Industries</div>
          <div className="footer-links">
            <button onClick={() => go('industries')}>Aerospace</button>
            <button onClick={() => go('industries')}>Defence</button>
            <button onClick={() => go('industries')}>Industrial Machinery</button>
            <button onClick={() => go('industries')}>Robotics &amp; Automation</button>
            <button onClick={() => go('industries')}>Automotive</button>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links">
            <button onClick={() => go('about')}>About Us</button>
            <button onClick={() => go('certifications')}>Certifications</button>
            <button onClick={() => go('testimonials')}>Testimonials</button>
            <button onClick={() => go('contact')}>Request a Quote</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span>© 2025 Microcraft Engineering. All rights reserved.</span>
          <a href="https://www.linkedin.com/company/microcraftengineering/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--grey-light)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--grey-light)'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
        <div className="footer-badges">
          <div className="footer-badge">🏅 ISO Certified</div>
          <div className="footer-badge">✈️ Aerospace Precision</div>
          <div className="footer-badge">🇪🇺 EU Export Ready</div>
        </div>
      </div>
    </footer>
  );
}
