import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export const BLOGS = [
  {
    id: 'cnc-machining-partner-guide',
    title: 'How to Choose the Right CNC Machining Partner for Your Business',
    description: 'Discover the key factors to consider when selecting a precision manufacturing partner to ensure quality, efficiency, and cost-effectiveness.',
    date: 'March 10, 2026',
    image: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1778123506/1_ujh9t1.png',
  },
  {
    id: 'cnc-india-vs-europe',
    title: 'CNC Machining in India vs Europe: Cost, Quality & Efficiency Comparison',
    description: 'Analyze the benefits of outsourcing to India versus Europe, exploring cost reduction, lead times, and uncompromised quality standards.',
    date: 'March 25, 2026',
    image: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1778124180/2x_jjty4a.png',
  },
  {
    id: 'what-is-5-axis-cnc-machining',
    title: 'What is 5-Axis CNC Machining and Why It Matters for Complex Parts',
    description: 'An in-depth look at 5-axis CNC technology and how it enables the manufacturing of highly intricate components with extreme accuracy.',
    date: 'April 10, 2026',
    image: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1778124181/3a_xdw8x2.png',
  },
  {
    id: 'top-industries-precision-cnc',
    title: 'Top Industries Using Precision CNC Machining Today',
    description: 'Explore how aerospace, automotive, oil & gas, and industrial machinery sectors rely heavily on precise custom metal parts.',
    date: 'April 25, 2026',
    image: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1778124672/4q_rn3ny5.png',
  },
  {
    id: 'common-challenges-precision-manufacturing',
    title: 'Common Challenges in Precision Manufacturing and How to Overcome Them',
    description: 'Understand the hurdles in maintaining accuracy and material integrity, and learn effective solutions for successful risk-free manufacturing.',
    date: 'May 5, 2026',
    image: 'https://res.cloudinary.com/dyelfz2ku/image/upload/v1778124732/5w_sprwel.png',
  }
];

export default function Blog({ setPage }) {

  return (
    <div className="page" style={{ background: 'var(--off)', minHeight: '100vh' }}>
      <SEO
        title="Engineering Blog | CNC Machining Insights"
        description="Explore Microcraft Engineering's expert insights on CNC machining, precision manufacturing, aerospace components, and industrial engineering best practices."
        canonical="/blog"
      />
      <PageHero
        bgImage="/images/test.png"
        label="Insights & Guides"
        title="Insights on CNC Machining & Precision Engineering"
        subtitle="Explore industry insights, machining expertise, and practical guides to help global businesses choose the right manufacturing partner."
      />

      <section style={{ padding: '80px 5%', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))', gap: '36px' }}>
          {BLOGS.map((blog, i) => (
            <Reveal key={blog.id} delay={i * 0.1}>
              <div
                className="blog-card"
                style={{
                  background: 'var(--navy)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  cursor: 'pointer',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease'
                }}
                onClick={() => setPage(`blog/${blog.id}`)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(200,146,26,0.18)';
                  const img = e.currentTarget.querySelector('.blog-img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  const img = e.currentTarget.querySelector('.blog-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Image container — 16:9 aspect ratio */}
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', overflow: 'hidden', background: '#0a0f1e' }}>
                  <img
                    className="blog-img"
                    src={blog.image}
                    alt={blog.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease',
                      display: 'block'
                    }}
                  />
                  {/* Bottom gradient overlay for seamless blend */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '45%',
                    background: 'linear-gradient(to top, var(--navy) 0%, transparent 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Card content */}
                <div style={{ padding: '28px 26px 30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#c8921a',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '10px'
                  }}>
                    {blog.date}
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    color: '#fff',
                    marginBottom: '14px',
                    lineHeight: 1.45,
                    fontFamily: 'var(--fd)',
                    fontWeight: 700
                  }}>
                    {blog.title}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                    flexGrow: 1
                  }}>
                    {blog.description}
                  </p>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#c8921a',
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    borderTop: '1px solid rgba(200,146,26,0.15)',
                    paddingTop: '18px'
                  }}>
                    Read More <span style={{ fontSize: '16px' }}>→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
