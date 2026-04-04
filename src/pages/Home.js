import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const SLIDES = [
  {
    img: '/images/photo2.jpg',
    tag: 'Automotive Components',
    title: 'Precision Automotive Parts\nEngineered for Performance & Reliability',
  },
  {
    img: '/images/photo7.jpg',
    tag: 'Aerospace Components',
    title: 'Advanced Aerospace Components\nManufactured with Extreme Accuracy',
  },
  {
    img: '/images/photo1.jpg',
    tag: 'Large Machine Manufacturing',
    title: 'Heavy-Duty Industrial Machinery\nBuilt for Strength and Scale',
  },
  {
    img: '/images/photo3.jpg',
    tag: 'Internal Engine Components',
    title: 'High-Precision Engine Parts\nDesigned for Maximum Efficiency',
  },
  {
    img: '/images/photo5.png',
    tag: 'Mechanical Parts',
    title: 'Precision Mechanical Components\nBuilt to Tight Tolerances',
  },
  {
    img: '/images/cap1.jpg',
    tag: 'CNC Machine',
    title: 'CNC Mechanical Machine\nDesign to Tight Tolerances',
  },
  {
    img: '/images/photoking.jpg',
    tag: 'Welding & Fabrication',
    title: 'High-Quality Welding Solutions\nfor Strong and Durable Structures',
  },
];

const CAPABILITIES = [
  { label: 'CNC Milling', detail: '3-Axis, 4-Axis & 5-Axis precision machining' },
  { label: 'CNC Turning', detail: 'High-accuracy rotational components' },
  { label: 'Wire-Cut EDM', detail: 'Precision cutting for complex geometries' },
  { label: 'Welding & Fabrication', detail: 'Robust structural and custom fabrication' },
  { label: 'Tooling & Fixtures', detail: 'Custom jigs, dies & production tooling' },
  { label: 'Mechanical Components', detail: 'Tight tolerance precision parts' },
];

const MATERIALS = [
  'Carbon Steel', 'Alloy Steel', 'Stainless Steel',
  'Aluminium Alloys', 'Titanium', 'Inconel & High-Temp Alloys', 'Engineering Plastics',
];

const TRUST_POINTS = [
  { icon: '🕐', text: '25+ years precision machining experience' },
  { icon: '👷', text: 'Skilled engineers and technicians' },
  { icon: '🏭', text: 'Advanced CNC manufacturing equipment' },
  { icon: '📐', text: 'Structured quality inspection processes' },
  { icon: '💰', text: 'Competitive manufacturing cost' },
  { icon: '📦', text: 'Reliable delivery performance' },
];

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const [ref, visible] = useReveal();
  const transforms = { up: 'translateY(32px)', left: 'translateX(-32px)', right: 'translateX(32px)', none: 'none' };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Home({ setPage }) {
  const [slide, setSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page">

      {/* ══════════════════════════════════════════════════
          HERO — Cinematic full-bleed background slider
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: 'calc(100vh - 90px)',  // 🔥 PERFECT FIX
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#020408'
      }}>

        {/* Background image slides */}
        {SLIDES.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? 'scale(1)' : 'scale(1.06)',
              transition: 'opacity 1.4s ease, transform 1.8s ease',
              zIndex: 0,
            }}
          >
            <img
              src={s.img}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                filter: 'saturate(0.6) brightness(0.9)'
              }}
            />
          </div>
        ))}

        {/* Cinematic overlays — layered depth */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(105deg, rgba(2, 4, 8, 0.94) 0%, rgba(2, 4, 8, 0.73) 45%, rgba(2, 4, 8, 0.43) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(0deg, rgba(2,4,8,0.85) 0%, transparent 50%)',
        }} />
        {/* Subtle blue-tinted vignette top */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(10, 10, 12, 0.36) 0%, transparent 100%)',
        }} />

        {/* ── Hero content ── */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 5%',
          maxWidth: '600px',
        }}>

          {/* Strip */}
          <div
            className="hero-strip"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <div className="hero-strip-line" />
            <span className="hero-strip-text">Precision CNC Manufacturing</span>
            <div className="live-dot" />
            <span style={{ fontSize: '12px', color: '#3ecf6e', fontWeight: 900, letterSpacing: '.20em' }}>
              ACTIVE SUPPLIER
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: 'var(--fd)',
            fontWeight: 800,
            fontSize: 'clamp(25px, 4.0vw, 50px)',  // 🔥 MEDIUM SIZE
            lineHeight: 1.05,
            color: '#f0f4fa',
            marginBottom: '20px',
            letterSpacing: '-0.01em'
          }}>
            Precision CNC Machining{' '}
            <br />
            for Global{' '}
            <em style={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #c8921a 0%, #e0a830 50%, #f0c050 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              fontStyle: 'normal',
            }}>
              Engineering Industries
            </em>
          </h1>

          {/* Gold divider */}
          <div style={{
            width: heroLoaded ? '64px' : '0px',
            height: '2px',
            background: 'linear-gradient(90deg, #c8921a, #e0a830, transparent)',
            marginBottom: '28px',
            borderRadius: '1px',
            transition: 'width 0.8s ease 0.45s',
          }} />

          {/* Body text */}
          <div style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s',
          }}>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(200,216,235,0.85)',
              fontWeight: 300,
              maxWidth: '520px',
              marginBottom: '20px'
            }}>
              Delivering <span style={{ color: '#e0a830', fontWeight: 500 }}>high-precision CNC components</span>
              for aerospace and industrial applications, with over 25 years of manufacturing excellence.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.82, color: 'rgba(200,216,235,0.75)', fontWeight: 300, maxWidth: '620px' }}> We support engineering companies in India and internationally with precision machining solutions used in aerospace, industrial automation, energy systems, and industrial machinery. </p>
          </div>

          {/* Slide indicator dots */}
          <div style={{
            display: 'flex', gap: '8px', marginTop: '44px',
            opacity: heroLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease 0.8s',
          }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                style={{
                  width: i === slide ? '28px' : '8px',
                  height: '3px',
                  borderRadius: '2px',
                  background: i === slide
                    ? 'linear-gradient(90deg,#c8921a,#e0a830)'
                    : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.4s ease',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Slide caption — bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '5%',   // ✅ change here
          zIndex: 4,
          display: 'none',
          textAlign: 'left', // optional but better
        }}>
          {SLIDES.map((s, i) => (
            <div
              key={i}
              style={{
                opacity: i === slide ? 1 : 0,
                transform: i === slide ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
                position: i === 0 ? 'relative' : 'absolute',
                bottom: i === 0 ? 'auto' : 0,
                right: i === 0 ? 'auto' : 0,
                pointerEvents: 'none',
              }}
            >
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg,#c8921a,#e0a830)',
                color: '#04091a',
                fontFamily: 'var(--fd)',
                fontSize: '9px', fontWeight: 900,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '5px 12px', borderRadius: '3px', marginBottom: '6px',
              }}>
                {s.tag}
              </div>
              <div style={{
                fontFamily: 'var(--fd)',
                fontSize: '15px', fontWeight: 700,
                color: 'rgba(240,244,250,0.9)',
                lineHeight: 1.3,
                whiteSpace: 'pre-line',
                textShadow: '0 2px 20px rgba(0,0,0,0.9)',
              }}>
                {s.title}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute',
          right: '5%',
          top: '78%',
          transform: 'translateY(-40%)',
          zIndex: 4,
          maxWidth: '320px',
          textAlign: 'left',
        }}>

          {/* Small label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '12px'
          }}>

            {/* Line */}
            <div className="hero-strip-line" />

            {/* Text */}
            <div style={{
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#c8921a',
              fontWeight: 700,
            }}>
              Trusted Globally
            </div>

          </div>

          {/* Main text */}
          <h2 style={{
            fontFamily: 'var(--fd)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 3.2vw, 36px)',  // ⭐ better scale
            lineHeight: 1.1,
            color: '#f0f4fa',
            marginBottom: '18px',
            letterSpacing: '-0.01em'
          }}>
            Proven performance <br />
            with real results
          </h2>

          <p style={{
            fontSize: '17px',
            lineHeight: 1.5,
            color: 'rgba(240,244,250,0.85)',
            marginBottom: '22px'
          }}>
            Trusted by{' '}
            <span style={{
              color: '#e0a830',
              fontWeight: 900
            }}>
              globally reputed Customers.
            </span>
          </p>

          {/* Button */}
          <button
            onClick={() => setPage('testimonials')}
            style={{
              background: 'linear-gradient(135deg,#c8921a,#e0a830)',
              color: '#04091a',
              border: 'none',
              padding: '12px 20px',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              borderRadius: '6px',
              cursor: 'pointer',

              boxShadow: '0 6px 20px rgba(200,146,26,0.35)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(200, 145, 26, 0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(27, 25, 22, 0.69)';
            }}
          >
            View Testimonials →
          </button>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════ */}
      <div style={{
        background: 'linear-gradient(90deg, #0f1833e4 0%, #10172f 50%, #132254 100%)',
        borderTop: '1px solid rgba(200,146,26,0.25)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
      }}>
        {[
          { n: '25+', l: 'Years Experience' },
          { n: '5-Axis', l: 'CNC Technology' },
          { n: 'ISO', l: 'Certified QMS' },
          { n: '40+', l: 'Global Clients' },
        ].map((s, i) => (
          <div key={s.l} style={{
            padding: '22px 20px',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            textAlign: 'center',
            cursor: 'default',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,146,26,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              fontFamily: 'var(--fd)', fontWeight: 900,
              fontSize: '30px', color: '#c8921a', lineHeight: 1,
            }}>{s.n}</div>
            <div style={{
              fontSize: '9px', color: 'rgba(120,150,180,0.8)',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              marginTop: '5px', fontWeight: 600,
            }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════
          TRUSTED EXPERIENCE
      ══════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--off)', padding: '120px 5%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

            <Reveal direction="left">
              <div className="sec-label">Our Track Record</div>
              <h2 className="sec-title" style={{ marginBottom: '28px' }}>
                Trusted Engineering Experience
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.82,
                  color: 'var(--grey-dark)',
                  marginBottom: '16px',
                  fontWeight: 400
                }}
              >
                Our machining expertise has supported projects connected with respected organisations such as{' '}
                <strong style={{ color: '#000', fontWeight: 700 }}>ABB</strong>,{' '}
                <strong style={{ color: '#000', fontWeight: 700 }}>Weatherford India Pvt. Ltd.</strong>,{' '}
                <strong style={{ color: '#000', fontWeight: 700 }}>Kesar Precision Components</strong>,{' '}
                <strong style={{ color: '#000', fontWeight: 700 }}>Kelmar Precision Engineering</strong>, and{' '}
                <strong style={{ color: '#000', fontWeight: 700 }}>Schneider Electric</strong>.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.82,
                  color: 'var(--grey-dark)',
                  fontWeight: 400
                }}
              >
                Working with technically demanding industries has helped us develop strong manufacturing processes and quality systems that meet strict engineering standards.
              </p>

            </Reveal>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 22px',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                background: '#fff',
                maxWidth: '420px'
              }}
            >
              {/* Logo Box */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#0f172a',
                  color: '#facc15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  fontSize: '10px',
                  fontWeight: 600,
                  textAlign: 'center',
                  padding: '6px',
                  lineHeight: '1.2'
                }}
              >
                WF
              </div>

              {/* Text Content */}
              <div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: '4px'
                  }}
                >
                  Weatherford India Pvt. Ltd.
                </div>

                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--grey-mid)'
                  }}
                >
                  Oilfield Services & Equipment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          CORE CAPABILITIES
      ══════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(200,146,26,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <Reveal>
            <div className="sec-label">What We Do</div>
            <h2 className="sec-title lt" style={{ marginBottom: '52px' }}>Core Capabilities</h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.label} delay={i * 0.07}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '28px 24px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(200,146,26,0.07)';
                    e.currentTarget.style.border = '1px solid rgba(200,146,26,0.25)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,146,26,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '28px', height: '2px',
                    background: 'linear-gradient(90deg,#c8921a,#e0a830)',
                    borderRadius: '1px', marginBottom: '18px',
                  }} />
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#e8eef6', marginBottom: '8px', fontFamily: 'var(--fd)', letterSpacing: '0.02em', fontSize: '17px' }}>
                    {cap.label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(150,175,200,0.75)', lineHeight: 1.65, fontWeight: 300 }}>
                    {cap.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} style={{ marginTop: '44px' }}>
            <button className="btn-p" onClick={() => setPage('capabilities')}>
              View Full Capabilities →
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MATERIALS EXPERTISE
      ══════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--off)', padding: '96px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '72px', alignItems: 'center' }}>

            <Reveal direction="left">
              <div className="sec-label">Raw Materials</div>
              <h2 className="sec-title" style={{ marginBottom: '18px' }}>Materials Expertise</h2>
              <p style={{ fontSize: '15px', lineHeight: 1.82, color: 'var(--text-secondary)', fontWeight: 300 }}>
                We machine a wide range of engineering materials including carbon steels, exotic
                alloys, titanium, and high-temperature materials for the most demanding industrial
                and aerospace applications.
              </p>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {MATERIALS.map((mat, i) => (
                <Reveal key={mat} delay={i * 0.06}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '8px',
                    padding: '13px 18px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.border = '1px solid rgba(200,146,26,0.3)';
                      e.currentTarget.style.background = 'rgba(200,146,26,0.05)';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <span style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg,#c8921a,#e0a830)',
                      flexShrink: 0,
                      boxShadow: '0 0 6px rgba(200,146,26,0.5)',
                    }} />
                    {mat}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY TRUST US
      ══════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(200,146,26,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1050px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <Reveal>
            <div className="sec-label" style={{ justifyContent: 'center' }}>Our Promise</div>
            <h2 className="sec-title lt" style={{ textAlign: 'center', margin: '0 auto 52px' }}>
              Why Companies Trust Microcraft Engineering
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', textAlign: 'left' }}>
            {TRUST_POINTS.map((pt, i) => (
              <Reveal key={pt.text} delay={i * 0.08}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '22px 20px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  height: '100%',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(200,146,26,0.07)';
                    e.currentTarget.style.border = '1px solid rgba(200,146,26,0.25)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg,rgba(200,146,26,0.15),rgba(200,146,26,0.08))',
                    border: '1px solid rgba(200,146,26,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>
                    {pt.icon}
                  </div>
                  <span style={{ color: 'rgba(200,216,235,0.85)', fontSize: '14px', fontWeight: 400, lineHeight: 1.65, paddingTop: '9px' }}>
                    {pt.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES TEASER
      ══════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--off)', textAlign: 'center', padding: '96px 5%' }}>
        <Reveal>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="sec-label" style={{ justifyContent: 'center' }}>What We Serve</div>
            <h2 className="sec-title" style={{ textAlign: 'center', margin: '0 auto 18px' }}>
              Industries We Serve
            </h2>
            <p className="sec-desc" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
              Aerospace, Defence, Industrial Machinery, Robotics &amp; Automation, and Automotive —
              trusted by manufacturers across five sectors in India and internationally.
            </p>
            <button className="btn-p" onClick={() => setPage('industries')}>
              Explore Industries →
            </button>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════ */}
      <div className="cta-strip">
        <Reveal>
          <h2>Ready to Source Precision Components?</h2>
          <p>
            Upload your CAD drawing and request a quotation. We respond with a detailed
            quote within 48 hours.
          </p>
          <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>
            ▶&ensp;Upload Drawing & Request Quote
          </button>
        </Reveal>
      </div>

      <Footer setPage={setPage} />

      {/* ── Global hero animation keyframe ── */}
      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </div>
  );
}