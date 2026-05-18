import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ textDecoration: 'none', display: 'flex' }}>
            <button
              className="logo"
              tabIndex={-1}
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
          </Link>
          <p className="footer-desc">
            Precision CNC machining for International aerospace, defence, and industrial manufacturers.
            ISO-certified quality, reliable export logistics.
          </p>
          <div style={{ marginTop: '20px', fontSize: '13px', color: 'var(--grey-light)', lineHeight: '1.6' }}>
            <span style={{ color: 'var(--white)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Registered Office:</span>
            GIDC Savli, ELS Tower, A 15 To 18,<br />
            Savli - Vadodara Rd, Vadodara,<br />
            Manjusar, Gujarat 391776
          </div>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <div className="footer-links">
            <Link to="/capabilities" onClick={(e) => { e.preventDefault(); go('capabilities'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>CNC Milling (3/4/5 Axis)</button></Link>
            <Link to="/capabilities" onClick={(e) => { e.preventDefault(); go('capabilities'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>CNC Turning</button></Link>
            <Link to="/capabilities" onClick={(e) => { e.preventDefault(); go('capabilities'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Multi-Axis Machining</button></Link>
            <Link to="/capabilities" onClick={(e) => { e.preventDefault(); go('capabilities'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Surface Finishing</button></Link>
            <Link to="/quality" onClick={(e) => { e.preventDefault(); go('quality'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Quality Inspection</button></Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Industries</div>
          <div className="footer-links">
            <Link to="/industries" onClick={(e) => { e.preventDefault(); go('industries'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Aerospace</button></Link>
            <Link to="/industries" onClick={(e) => { e.preventDefault(); go('industries'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Defence</button></Link>
            <Link to="/industries" onClick={(e) => { e.preventDefault(); go('industries'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Industrial Machinery</button></Link>
            <Link to="/industries" onClick={(e) => { e.preventDefault(); go('industries'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Robotics &amp; Automation</button></Link>
            <Link to="/industries" onClick={(e) => { e.preventDefault(); go('industries'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Automotive</button></Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links">
            <Link to="/about" onClick={(e) => { e.preventDefault(); go('about'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>About Us</button></Link>
            <Link to="/certifications" onClick={(e) => { e.preventDefault(); go('certifications'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Certifications</button></Link>
            <Link to="/testimonials" onClick={(e) => { e.preventDefault(); go('testimonials'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Testimonials</button></Link>
            <Link to="/contact" onClick={(e) => { e.preventDefault(); go('contact'); }} style={{ textDecoration: 'none' }}><button tabIndex={-1}>Request a Quote</button></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-meta">
          <span>© 2025 Microcraft Engineering. All rights reserved.</span>
          <a href="https://www.linkedin.com/company/microcraftengineering/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--grey-light)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--grey-light)'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
        <div className="footer-badges">
          <div className="footer-badge">🏅 ISO Certified</div>
          <div className="footer-badge">✈️ Aerospace Precision</div>
          <div className="footer-badge">🌍 Global Export Solutions</div>
        </div>
      </div>
    </footer>
  );
}
