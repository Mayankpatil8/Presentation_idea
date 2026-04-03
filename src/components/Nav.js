import React, { useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'industries', label: 'Industries' },
  { id: 'quality', label: 'Quality' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Request Quote', cta: true },
];

export default function Nav({ page, setPage }) {
  const [mob, setMob] = useState(false);

  const go = (id) => { setPage(id); setMob(false); };

  return (
    <>
      <nav className="nav">
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
              height: '55px',          // 🔥 adjust between 60–80 based on navbar height
              width: 'auto',
              objectFit: 'contain',

              // 🔥 Make logo POP on black navbar
              filter: 'brightness(1.3) contrast(1.2)',

              // 🔥 subtle glow for visibility
              dropShadow: '0 0 8px rgba(255,140,0,0.6)'
            }}
          />
        </button>
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.id} className={page === item.id ? 'active' : ''}>
              <button
                className={item.cta ? 'nav-cta' : ''}
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setMob(!mob)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mob-menu ${mob ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <button key={item.id} onClick={() => go(item.id)}>{item.label}</button>
        ))}
      </div>
    </>
  );
}
