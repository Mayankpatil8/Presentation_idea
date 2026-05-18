import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'industries', label: 'Industries' },
  { id: 'quality', label: 'Quality' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'blog', label: 'Insights' },
  { id: 'contact', label: 'Request Quote', cta: true },
];

export default function Nav({ page, setPage }) {
  const [mob, setMob] = useState(false);

  const go = (id) => { setPage(id); setMob(false); };

  return (
    <>
      <nav className="nav">
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
              src="https://res.cloudinary.com/dyelfz2ku/image/upload/v1778125071/logo3_es2aja.png"
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
        </Link>
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.id} className={page === item.id ? 'active' : ''}>
              <Link 
                to={item.id === 'home' ? '/' : `/${item.id}`} 
                onClick={(e) => { e.preventDefault(); go(item.id); }}
                style={{ textDecoration: 'none' }}
              >
                <button
                  className={item.cta ? 'nav-cta' : ''}
                  tabIndex={-1}
                >
                  {item.label}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setMob(!mob)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mob-menu ${mob ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <Link 
            key={item.id} 
            to={item.id === 'home' ? '/' : `/${item.id}`} 
            onClick={(e) => { e.preventDefault(); go(item.id); }}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <button tabIndex={-1} style={{ width: '100%' }}>{item.label}</button>
          </Link>
        ))}
      </div>
    </>
  );
}
