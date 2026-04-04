import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';


const INDUSTRIES = [
  {
    img: '/images/aero.jpg',
    n: 'Aerospace',
    sub: 'Manufacturing Applications',
    d: 'Delivering mission-critical precision for structural components, complex aerospace housings, brackets, and full assemblies. We specialize in working with exotic alloys capable of withstanding extreme environmental stressors while guaranteeing lightweight performance. Full material traceability and First Article Inspection (FAI) documentation are rigorously maintained.',
    features: ['AS9100D Compliant', 'Turbine & Engine Parts', 'Titanium & Inconel'],
    num: '01'
  },
  {
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
    n: 'Defence',
    sub: 'Tactical Equipment',
    d: 'Manufacturing safety-critical components machined flawlessly to MIL-SPEC tolerances. Extensive experience producing complex geometries for heavy armour mounting systems, sophisticated optics enclosures, and tactical electronic components deployed by defence primes.',
    features: ['MIL-SPEC Tolerances', 'Secure Enclosures', '100% Traceability'],
    num: '02'
  },
  {
    img: '../images/virat.png',
    n: 'Industrial',
    sub: 'BFW Virat Series',

    d: 'BFW’s Virat double-column VMC is built for heavy-duty precision machining. With its rigid gantry architecture and high structural stability, it delivers unmatched performance for large-scale components across aerospace, energy, automotive, and mold industries. Designed for productivity and accuracy, Virat machines ensure reliable, high-volume manufacturing with superior surface finish.',

    features: [
      'Double Column Gantry Design',
      'High Rigidity & Stability',
      'Large Component Machining',
      'Aerospace & Heavy Industry Ready'
    ],

    num: '03'
  },
  {
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    n: 'Robotics',
    sub: 'Automation Systems',
    d: 'Engineering lightweight, ultra-high-precision aluminium and stainless steel structural components for modern robotics. Our bespoke machining supports next-generation robotic arms, custom end-effectors, and automated assembly solutions requiring absolute dimensional stability and zero backlash.',
    features: ['Zero-backlash Tolerances', 'Custom End-effectors', 'Lightweight Kinematics'],
    num: '04'
  },
  {
    img: '/images/cnc_automotive.png',
    n: 'Automotive',
    sub: 'Advanced Engineering',
    d: 'Providing engine blocks, transmission components, and performance chassis parts machined to strict European automotive standards. Our facility is optimized for high-volume production, ensuring every single batch maintains identical quality, supported by comprehensive PPAP validation.',
    features: ['Tier-1 Automotive Supply', 'Engine & Transmission', 'PPAP Validation'],
    num: '05'
  },
];

export default function Industries({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=1400&q=80"
        label="Sectors We Serve"
        title="Industries We Serve"
        subtitle="Trusted by procurement and engineering teams across five high-performance International industries."
      />

      <section style={{ background: 'var(--white)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div className="sec-label" style={{ textAlign: 'center' }}>Our Sectors</div>
            <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '64px' }}>Precision Manufacturing Across Industries</h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {INDUSTRIES.map((ind, i) => (
              <Reveal delay={0.1} key={ind.n}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                    gap: '52px',
                    alignItems: 'center',
                    background: 'var(--white)',
                    borderRadius: '16px',
                    padding: '48px',
                    position: 'relative',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.02)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(232, 160, 32, 0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                  }}
                >
                  {/* Giant faint background number */}
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    [i % 2 === 0 ? 'right' : 'left']: '40px',
                    fontSize: '200px',
                    fontWeight: 900,
                    color: 'rgba(37, 99, 235, 0.03)',
                    fontFamily: 'var(--fd)',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    {ind.num}
                  </div>

                  {i % 2 === 0 ? (
                    <>
                      {/* Image Left */}
                      <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '420px', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', zIndex: 1 }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', zIndex: 1 }} />
                        <img src={ind.img} alt={ind.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 2 }}>
                          <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, color: '#fff', background: 'var(--accent)', padding: '4px 10px', borderRadius: '4px', display: 'inline-block' }}>
                            Sector {ind.num}
                          </div>
                        </div>
                      </div>

                      {/* Content Right */}
                      <div style={{ zIndex: 1, paddingRight: '20px' }}>
                        <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '20px', fontSize: '13px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          {ind.sub}
                        </div>
                        <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 42px)', color: 'var(--navy)', marginBottom: '24px', lineHeight: '1.1' }}>
                          {ind.n}
                        </h3>
                        <p style={{ fontSize: '16.5px', color: 'var(--grey-dark)', fontWeight: 400, lineHeight: '1.85', marginBottom: '32px' }}>
                          {ind.d}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                          {ind.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>✓</div>
                              <span style={{ fontSize: '14.5px', color: 'var(--navy)', fontWeight: 700 }}>{f}</span>
                            </div>
                          ))}
                        </div>
                        <button className="btn-p" onClick={() => setPage('contact')}>Request a Quote</button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content Left */}
                      <div style={{ zIndex: 1, paddingLeft: '20px' }}>
                        <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '20px', fontSize: '13px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                          {ind.sub}
                        </div>
                        <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 42px)', color: 'var(--navy)', marginBottom: '24px', lineHeight: '1.1' }}>
                          {ind.n}
                        </h3>
                        <p style={{ fontSize: '16.5px', color: 'var(--grey-dark)', fontWeight: 400, lineHeight: '1.85', marginBottom: '32px' }}>
                          {ind.d}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                          {ind.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>✓</div>
                              <span style={{ fontSize: '14.5px', color: 'var(--navy)', fontWeight: 700 }}>{f}</span>
                            </div>
                          ))}
                        </div>
                        <button className="btn-p" onClick={() => setPage('contact')}>Request a Quote</button>
                      </div>

                      {/* Image Right */}
                      <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '420px', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', zIndex: 1 }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', zIndex: 1 }} />
                        <img src={ind.img} alt={ind.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 2 }}>
                          <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, color: '#fff', background: 'var(--accent)', padding: '4px 10px', borderRadius: '4px', display: 'inline-block' }}>
                            Sector {ind.num}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
