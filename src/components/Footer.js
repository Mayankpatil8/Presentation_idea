import React from 'react';

export default function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <button className="logo" onClick={() => go('home')} style={{ display: 'inline-flex', marginBottom: '4px' }}>
            <div className="logo-hex"><span>M</span></div>
            <div className="logo-text">
              <span className="logo-name">Microcraft</span>
              <span className="logo-sub">Engineering</span>
            </div>
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
        <span>© 2025 Microcraft Engineering. All rights reserved.</span>
        <div className="footer-badges">
          <div className="footer-badge">🏅 ISO Certified</div>
          <div className="footer-badge">✈️ Aerospace Precision</div>
          <div className="footer-badge">🇪🇺 EU Export Ready</div>
        </div>
      </div>
    </footer>
  );
}
