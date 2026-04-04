import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const LEADERS = [
  {
    region: 'India Head',
    name: 'Ashvin Chaudhary',
    role: 'Managing Director',
    avatar: 'AC',
    avcls: 'av-blue',
    flag: '🇮🇳',
    linkedin: 'https://www.linkedin.com/in/ashvin-chaudhari-6485853b/',
    email: 'ashvin@microcraft.in',
    bio: 'Driving Microcraft’s manufacturing excellence and strategic growth, Ashvin brings deep expertise in mechanical engineering and precision machining. He leads advanced CNC operations across aerospace, defence, and industrial sectors, ensuring rigorous ISO compliance and uncompromising precision in every component.',
    tags: ['Manufacturing Operations', 'Strategic Growth', 'ISO Compliance'],
  },
  {
    region: 'European Head',
    name: 'Swati Chaudhari',
    role: 'Director, Business Development',
    avatar: 'SC',
    avcls: 'av-gold',
    flag: '🇪🇺',
    linkedin: 'https://www.linkedin.com/in/schaudhari23/',
    email: 'eu@microcraft.in',
    bio: 'Leading strategic business expansion across European markets, Swati drives high-value partnerships in aerospace, defence, and industrial sectors. With exceptional precision in project execution and supply chain excellence, she ensures seamless coordination, reliability, and an uncompromising standard of customer satisfaction.',
    tags: ['International Business', 'Client Relations', 'Project Management'],
  },
];

const PHILOSOPHY = [
  { icon: '⚙️', title: 'Engineering Excellence', desc: 'Every decision is driven by technical precision and manufacturing best practice — from CNC programming to quality inspection.' },
  { icon: '🏅', title: 'Quality Focus', desc: 'ISO-certified thinking at every level of the organisation. Quality is not a department — it is our culture.' },
  { icon: '💬', title: 'Transparent Communication', desc: 'Honest, proactive communication with every European client — on lead times, quality updates, and project milestones.' },
  { icon: '🤝', title: 'Long-Term Customer Partnerships', desc: 'We build lasting relationships with European manufacturers, becoming a trusted precision supplier they return to repeatedly.' },
];

export default function Leadership({ setPage }) {
  return (
    <div className="page">
      <PageHero
        bgImage="../images/test.png"
        label="Our Team"
        title="Leadership"
        subtitle="Meet the people who lead Microcraft Engineering's manufacturing operations and European business development."
      />

      {/* LEADERSHIP CARDS */}
      <section style={{ background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="sec-label">Meet the Team</div>
          <h2 className="sec-title">Our Leadership Team</h2>
          <p className="sec-desc" style={{ marginBottom: '52px' }}>
            Two dedicated leaders — one driving precision manufacturing in India, one championing European client relationships.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {LEADERS.map(l => (
              <div
                key={l.name}
                style={{
                  background: 'var(--white)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05), 0 2px 10px rgba(0,0,0,0.03)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(232, 160, 32, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05), 0 2px 10px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.12)';
                }}
              >
                {/* Card top banner */}
                <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)', padding: '40px 32px 28px', position: 'relative' }}>
                  {/* Region tag */}
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(232,160,32,.15)', border: '1px solid rgba(232,160,32,.35)', color: 'var(--accent)', fontSize: '10px', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', padding: '5px 10px', borderRadius: '3px' }}>
                    {l.flag}&ensp;{l.region}
                  </div>

                  {/* Avatar */}
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '26px', color: 'var(--white)', marginBottom: '16px', border: '3px solid rgba(232,160,32,.4)', background: l.avcls === 'av-blue' ? 'linear-gradient(135deg,#1a4a8a,#1e6abf)' : 'linear-gradient(135deg,#b37a10,#e8a020)' }}>
                    {l.avatar}
                  </div>

                  <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '26px', color: 'var(--white)', marginBottom: '4px' }}>{l.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '.04em' }}>{l.role}</div>
                </div>

                <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontSize: '15.5px', color: 'var(--grey-dark)', lineHeight: '1.85', fontWeight: 450, marginBottom: '24px', flex: 1 }}>{l.bio}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {l.tags.map(tag => (
                      <span key={tag} style={{ background: 'var(--off)', border: '1px solid var(--grey-pale)', color: 'var(--grey-dark)', fontSize: '11px', fontWeight: 600, letterSpacing: '.06em', padding: '5px 12px', borderRadius: '100px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact Block */}
                  <div style={{ padding: '16px 0 0', borderTop: '1px solid var(--grey-pale)', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {l.email && (
                        <div>
                          <a href={`mailto:${l.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
                            <span style={{ fontSize: '16px' }}>✉</span> {l.email}
                          </a>
                          <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 600, marginTop: '2px', marginLeft: '26px', letterSpacing: '.03em' }}>
                            ✓ Expect a reply within 1 business day
                          </div>
                        </div>
                      )}

                      {l.linkedin && (
                        <a href={l.linkedin} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--blue)', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          Connect on LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="sec-label" style={{ color: 'var(--accent)' }}>How We Work</div>
          <h2 className="sec-title lt">Leadership Philosophy</h2>
          <p className="sec-desc lt" style={{ marginBottom: '52px' }}>
            The values that guide every decision our leadership team makes — from production floor to European client meetings.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px' }}>
            {PHILOSOPHY.map((p, i) => (
              <div
                key={p.title}
                style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)', padding: '36px 28px', position: 'relative', overflow: 'hidden', transition: 'background .2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(30,106,191,.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.03)'; }}
              >
                {/* top accent line on hover — using a pseudo-element trick via inline */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--accent)', opacity: i === 0 ? 1 : 0.3 }} />
                <div style={{ fontSize: '34px', marginBottom: '16px' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '10px' }}>{p.title}</div>
                <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.92)', fontWeight: 400, lineHeight: '1.7' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <h2>Work With Our Team</h2>
        <p>Reach out to our European or India team for a detailed quotation within 48 hours.</p>
        <button className="btn-p" style={{ margin: '0 auto' }} onClick={() => setPage('contact')}>▶&ensp;Request a Quote</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
