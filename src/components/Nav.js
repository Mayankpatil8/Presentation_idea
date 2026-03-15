import React, { useState } from 'react';

const NAV_ITEMS = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'capabilities',   label: 'Capabilities' },
  { id: 'industries',     label: 'Industries' },
  { id: 'quality',        label: 'Quality' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'testimonials',   label: 'Testimonials' },
  { id: 'contact',        label: 'Request Quote', cta: true },
];

export default function Nav({ page, setPage }) {
  const [mob, setMob] = useState(false);

  const go = (id) => { setPage(id); setMob(false); };

  return (
    <>
      <nav className="nav">
        <button className="logo" onClick={() => go('home')}>
          <div className="logo-hex"><span>M</span></div>
          <div className="logo-text">
            <span className="logo-name">Microcraft</span>
            <span className="logo-sub">Engineering</span>
          </div>
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
