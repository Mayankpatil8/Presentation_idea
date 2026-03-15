import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const INDUSTRIES = [
  { img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800&q=80', n: 'Aerospace Manufacturing', d: 'Precision structural components, housings, brackets, and assemblies for commercial and defence aerospace applications. Full material traceability and FAI documentation included.' },
  { img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80', n: 'Defence Equipment', d: 'Safety-critical components machined to MIL-SPEC tolerances. Experience with armour, optics, and electronic enclosure components for European defence primes.' },
  { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', n: 'Industrial Machinery', d: 'High-volume precision parts for industrial machinery — shafts, gears, housings, and custom components meeting DIN and ISO standards for European OEMs.' },
  { img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', n: 'Robotics & Automation', d: 'Lightweight, high-precision aluminium and stainless components for robotic arms, end-effectors, and automation assemblies requiring tight dimensional control.' },
  { img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', n: 'Automotive Engineering', d: 'Engine, transmission, and chassis components machined to European automotive standards. High-volume production with consistent quality across batches.' },
];

export default function Industries({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=1400&q=80"
        label="Sectors We Serve"
        title="Industries We Serve"
        subtitle="Trusted by procurement and engineering teams across five high-performance European industries."
      />

      <section style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sec-label">Our Sectors</div>
          <h2 className="sec-title">Precision Manufacturing Across Industries</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', marginTop: '48px' }}>
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                  gap: '52px',
                  alignItems: 'center',
                }}
              >
                {i % 2 === 0 ? (
                  <>
                    <div style={{ borderRadius: '4px', overflow: 'hidden', height: '320px' }}>
                      <img src={ind.img} alt={ind.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div className="sec-label">Sector 0{i + 1}</div>
                      <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)', color: 'var(--navy)', marginBottom: '12px' }}>{ind.n}</h3>
                      <p style={{ fontSize: '15px', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: '1.8', marginBottom: '24px' }}>{ind.d}</p>
                      <button className="btn-p" onClick={() => setPage('contact')}>Get a Quote</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="sec-label">Sector 0{i + 1}</div>
                      <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)', color: 'var(--navy)', marginBottom: '12px' }}>{ind.n}</h3>
                      <p style={{ fontSize: '15px', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: '1.8', marginBottom: '24px' }}>{ind.d}</p>
                      <button className="btn-p" onClick={() => setPage('contact')}>Get a Quote</button>
                    </div>
                    <div style={{ borderRadius: '4px', overflow: 'hidden', height: '320px' }}>
                      <img src={ind.img} alt={ind.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
