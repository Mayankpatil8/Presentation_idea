import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { BLOGS } from './Blog';

const BLOG_CONTENT = {
  'cnc-machining-partner-guide': {
    content: (setPage) => (
      <>
        <p>In today's highly competitive industrial landscape, outsourcing manufacturing to a <a href="/" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ color: '#c8921a', fontWeight: 600 }}>precision components manufacturer</a> is often the most strategic move a company can make. However, finding the right partner goes beyond just comparing quote prices.</p>

        <h2>1. Assess Their Industry Experience and Track Record</h2>
        <p>When searching for a global manufacturing partner, experience matters. A supplier that has been in the industry for decades will have encountered and solved numerous complex machining challenges. You want a partner who has built parts for highly regulated sectors such as aerospace, oil & gas, or automotive.</p>
        <p>Experienced machinists are adept at predicting potential manufacturing flaws before they happen, effectively saving you from costly delays or material waste.</p>

        <h2>2. Evaluate Their Machining Capabilities and Technology</h2>
        <p>State-of-the-art machinery is a fundamental requirement. Does the supplier invest in advanced 5-axis CNC machines? This technology is vital for complex geometries and ensures tighter tolerances with fewer setups.</p>
        <p>Beyond the machines, inquire about their programming expertise and the raw materials they routinely handle, ranging from standard aluminum and steels to exotic high-temp alloys like Inconel or Titanium.</p>

        <h2>3. Demand Rigorous Quality Control and Inspection</h2>
        <p>Quality isn't just a buzzword; it's a measurable standard. Before signing any contract with a <span style={{ fontWeight: 600 }}>custom metal parts supplier</span>, ask about their quality management system (QMS). ISO certifications (such as ISO 9001) show that they adhere to international standards.</p>
        <p>Ensure they have dedicated inspection facilities utilizing Coordinate Measuring Machines (CMMs) and updated calibration logs to guarantee every dimensional tolerance is met precisely.</p>

        <h2>4. Communication and Delivery Reliability</h2>
        <p>Your <a href="/capabilities" onClick={(e) => { e.preventDefault(); setPage('capabilities'); }} style={{ color: '#c8921a', fontWeight: 600 }}>CNC machining services</a> provider should act as an extension of your own team. Communication barriers or lack of transparency regarding production timelines can severely cripple your supply chain.</p>
        <p>A reliable partner provides realistic lead times, updates you on production milestones, and has a proven track record of delivering shipments on schedule without compromising on quality.</p>

        <h2>The Risks of Choosing the Wrong Partner</h2>
        <p>Opting for the cheapest bidder can lead to catastrophic failures including high rejection rates, recurring dimensional inaccuracies, and massive supply chain disruptions. In industries like aerospace or medical, these failures are unacceptable.</p>
      </>
    )
  },

  'cnc-india-vs-europe': {
    content: (setPage) => (
      <>
        <p>As global supply chains evolve, engineering firms are increasingly re-evaluating their sourcing strategies for precision components. While European manufacturers have long been regarded as traditional hubs for precision engineering, <span style={{ fontWeight: 600 }}>CNC machining services in India</span> have drastically transformed, emerging as a globally competitive alternative.</p>

        <h2>Understanding the Cost Advantage</h2>
        <p>The primary driver for outsourcing to India is substantial cost reduction. Lower operational and labor costs, combined with favorable economic policies, result in a highly competitive manufacturing ecosystem. However, cost-efficiency does not mean cheap. Top-tier Indian manufacturers reinvest these savings into advanced imported machinery and highly skilled engineering talent.</p>

        <h2>Uncompromised Quality Standards</h2>
        <p>Decades ago, quality parity might have been a concern. Today, a premium <a href="/" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ color: '#c8921a', fontWeight: 600 }}>precision components manufacturer</a> in India strictly adheres to international ISO standards and rigorous six-sigma methodologies.</p>
        <p>With modern inspection tools like CMMs and optical comparators, parts manufactured in India undergo the exact same, if not stricter, quality checks as those produced in Germany or Switzerland. The resulting dimensional accuracy flawlessly matches European expectations.</p>

        <h2>Efficiency and Lead Time Comparisons</h2>
        <p>European suppliers typically offer localized speed benefits for European clients. However, advancements in global logistics have significantly closed this gap. A dedicated <span style={{ fontWeight: 600 }}>custom metal parts supplier</span> in India leverages streamlined production scheduling and robust export networks to ensure consistent, reliable lead times globally.</p>

        <h2>Why Global Companies Are Making the Switch</h2>
        <p>From aerospace defense contractors to industrial automation giants, the world's most demanding sectors are looking to India not just for cost savings, but for deep engineering expertise, scalable production volumes, and absolute precision.</p>
        <p>By blending Western technological expectations with Eastern operational efficiency, partnering with a proven Indian manufacturer provides unparalleled strategic value.</p>
      </>
    )
  },

  'what-is-5-axis-cnc-machining': {
    content: (setPage) => (
      <>
        <p>When it comes to advanced manufacturing, 5-axis CNC machining represents the pinnacle of precision engineering. For companies requiring complex, highly intricate components, understanding this technology is absolutely essential.</p>

        <h2>The Basics: What is 5-Axis Machining?</h2>
        <p>Traditional CNC milling operates on three linear axes (X, Y, and Z). A 5-axis machine adds two additional rotary axes (often A and B). This allows the cutting tool to approach the workpiece from virtually any direction.</p>
        <p>Instead of manually repositioning the part multiple times (which introduces human error and geometric deviations), a 5-axis machine can process complex 3D shapes in a single, continuous setup.</p>

        <h2>Why It Absolutely Matters for Complex Geometries</h2>
        <p>The primary benefit of 5-axis technology is unparalleled precision. By eliminating multiple setups, the structural relativity between different faces of a component remains mathematically perfect.</p>
        <p>Furthermore, it allows the use of shorter, more rigid cutting tools. This reduces tool vibration, creating exceptionally smooth surface finishes and enabling deeper, cleaner cuts in tough superalloys like Inconel or Titanium.</p>

        <h2>Industries That Rely on 5-Axis Precision</h2>
        <ul>
          <li><strong>Aerospace:</strong> Turbine blades, engine impellers, and structural brackets.</li>
          <li><strong>Automotive:</strong> High-performance engine blocks and custom pistons.</li>
          <li><strong>Energy:</strong> Complex fluid dynamics components used in oil, gas, and nuclear sectors.</li>
        </ul>

        <p>By partnering with a top-tier <a href="/" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ color: '#c8921a', fontWeight: 600 }}>precision components manufacturer</a>, you gain access to this transformative technology, ensuring your most complex designs are brought to reality without compromise. These advanced <a href="/capabilities" onClick={(e) => { e.preventDefault(); setPage('capabilities'); }} style={{ color: '#c8921a', fontWeight: 600 }}>CNC machining services</a> are what distinguish standard suppliers from true engineering partners.</p>
      </>
    )
  },

  'top-industries-precision-cnc': {
    content: (setPage) => (
      <>
        <p>Precision CNC machining is the invisible backbone of the modern industrialized world. From the planes we fly to the energy grids powering our cities, nearly every critical sector depends heavily on high-accuracy machined parts.</p>

        <h2>1. Aerospace and Defense</h2>
        <p>The aerospace industry demands absolute perfection. A single micro-fracture or dimensional deviation can result in catastrophic failure. As a result, aerospace companies rely on expert <a href="/capabilities" onClick={(e) => { e.preventDefault(); setPage('capabilities'); }} style={{ color: '#c8921a', fontWeight: 600 }}>CNC machining services</a> to mill incredibly tight-tolerance components from lightweight, high-stress materials like Titanium and Aerospace-grade Aluminum.</p>

        <h2>2. Automotive and Motorsports</h2>
        <p>In high-performance automotive and motorsport engineering, precision translates directly to horsepower and safety. Engine blocks, custom cylinder heads, suspension components, and transmission gears require sophisticated 5-axis machining to ensure they perform reliably under extreme thermal and mechanical stress.</p>

        <h2>3. Oil, Gas & Energy Systems</h2>
        <p>Components in the oil and gas sector must endure highly corrosive environments and extreme pressures deep underground or underwater. Piston valves, flow control components, and custom flanges must be manufactured from specialized alloys by a trusted <span style={{ fontWeight: 600 }}>custom metal parts supplier</span>.</p>

        <h2>4. Industrial Automation and Machinery</h2>
        <p>The creation of robotics and large-scale industrial machinery relies on the extreme accuracy of underlying components. Gears, robotic arms, and structural housings dictate the efficiency and lifespan of the manufacturing line itself.</p>

        <p>No matter the sector, aligning with a reliable <a href="/" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ color: '#c8921a', fontWeight: 600 }}>precision components manufacturer</a> ensures that your supply chain is fortified with parts that meet and exceed global engineering standards.</p>
      </>
    )
  },

  'common-challenges-precision-manufacturing': {
    content: (setPage) => (
      <>
        <p>Precision manufacturing is a highly complex orchestration of machinery, software, metallurgy, and human expertise. While the results can be spectacular, the path to creating perfect components is fraught with engineering challenges.</p>

        <h2>1. Maintaining Unwavering Accuracy and Tolerances</h2>
        <p>The most persistent challenge in CNC machining is maintaining micron-level accuracy across high volume production runs. Environmental factors like thermal expansion (temperature fluctuations in the factory) and tool wear can subtly alter dimensions.</p>
        <p><strong>Solution:</strong> A top-tier <a href="/" onClick={(e) => { e.preventDefault(); setPage('home'); }} style={{ color: '#c8921a', fontWeight: 600 }}>precision components manufacturer</a> heavily controls their factory environment, utilizes automated tool-wear compensation software, and employs continuous CMM inspection.</p>

        <h2>2. Material Instability and Machinability</h2>
        <p>Different materials react unpredictably during the cutting process. Hardened exotic alloys like Inconel rapidly dull cutting tools, while softer metals like aluminum can warp from the heat generated during rapid aggressive milling.</p>
        <p><strong>Solution:</strong> Deep metallurgical expertise is required. The proper application of high-pressure coolant, custom-coated carbide tooling, and optimized feed-rates are paramount.</p>

        <h2>3. Quality Control Bottlenecks</h2>
        <p>As production scales, inspecting every single part without slowing down the delivery timeline becomes difficult. If quality checks are rushed, defective parts escape to the client.</p>
        <p><strong>Solution:</strong> Investing in rapid automated optical comparators, robotic inspection arms, and rigid statistical process controls ensures quality scales seamlessly with volume.</p>

        <h2>4. Production Delays</h2>
        <p>Machine downtime, material shortages, or inefficient programming can severely delay lead times.</p>
        <p><strong>Solution:</strong> By partnering with a specialized <span style={{ fontWeight: 600 }}>custom metal parts supplier</span> that offers robust <a href="/capabilities" onClick={(e) => { e.preventDefault(); setPage('capabilities'); }} style={{ color: '#c8921a', fontWeight: 600 }}>CNC machining services</a>, you mitigate these risks. Professional suppliers implement rigorous preventative maintenance and lean manufacturing redundancies to ensure uninterrupted delivery schedules.</p>
      </>
    )
  }
};

export default function BlogPost({ slug, setPage }) {
  const blogMeta = BLOGS.find(b => b.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blogMeta) {
    return (
      <div className="page" style={{ background: 'var(--navy)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <h2>Blog Post Not Found</h2>
        <button onClick={() => setPage('blog')} className="btn-p" style={{ marginLeft: '20px' }}>Back to Insights</button>
      </div>
    );
  }

  const { title, image, date } = blogMeta;
  const content = BLOG_CONTENT[slug]?.content;

  return (
    <div className="page" style={{ background: 'var(--off)', minHeight: '100vh' }}>
      <SEO
        title={`${title} | CNC Machining Blog`}
        description={blogMeta.description}
        canonical={`/blog/${slug}`}
        ogImage={image}
      />

      {/* ── FULL IMAGE CINEMATIC HERO (no cropping) ── */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1);    }
          100% { transform: scale(1.07); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0);   opacity: 0.8; }
          50%       { transform: translateX(-50%) translateY(9px); opacity: 0.3; }
        }
        @keyframes bpFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bp-hero-blur-bg {
          position: absolute; inset: -8%;
          background-size: cover; background-position: center;
          filter: blur(28px) brightness(0.22) saturate(1.4);
          transform: scale(1.1);
        }
        .bp-hero-img {
          width: 100%; height: auto;
          max-height: 92vh;
          object-fit: contain;
          display: block;
          position: relative; z-index: 1;
          animation: kenBurns 14s ease-out forwards;
          transform-origin: center center;
        }
        .blog-content h2 {
          color: var(--navy); font-family: var(--fd);
          font-size: 26px; margin: 48px 0 18px; font-weight: 800;
          border-bottom: 2px solid rgba(200,146,26,0.25); padding-bottom: 10px;
        }
        .blog-content p  { margin-bottom: 22px; }
        .blog-content ul { margin-bottom: 22px; padding-left: 22px; }
        .blog-content li { margin-bottom: 10px; }
        .blog-content strong { color: #0d1526; }
        .bp-back-btn:hover { background: rgba(200,146,26,0.22) !important; border-color: #c8921a !important; }
        .bp-quote-btn:hover { transform: translateY(-3px) !important; box-shadow: 0 16px 38px rgba(200,146,26,0.48) !important; }
      `}</style>

      <div style={{ position: 'relative', width: '100%', background: '#020408', overflow: 'hidden' }}>

        {/* Blurred backdrop — fills letterbox bars with same image, no black bars */}
        <div
          className="bp-hero-blur-bg"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* The FULL image — objectFit:contain = zero cropping */}
        <img
          className="bp-hero-img"
          src={image}
          alt={title}
        />

        {/* Bottom gradient overlay for text readability */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '62%', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(2,4,8,0.97) 0%, rgba(2,4,8,0.55) 45%, transparent 100%)'
        }} />

        {/* Top gradient for nav area */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '22%', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(2,4,8,0.65) 0%, transparent 100%)'
        }} />

        {/* Golden left accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', zIndex: 3,
          background: 'linear-gradient(to bottom, transparent 5%, #c8921a 30%, #c8921a 72%, transparent 95%)',
          opacity: 0.75
        }} />

        {/* ← Back button */}
        <button
          className="bp-back-btn"
          onClick={() => setPage('blog')}
          style={{
            position: 'absolute', top: '26px', left: '5%', zIndex: 10,
            display: 'flex', alignItems: 'center', gap: '7px',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '9px 20px', borderRadius: '40px',
            cursor: 'pointer', transition: 'all 0.3s ease',
            animation: 'bpFadeUp 0.6s ease 0.1s both'
          }}
        >
          ← All Insights
        </button>

        {/* Hero text — pinned to bottom of image */}
        <div style={{
          position: 'absolute', bottom: '9%', left: '5%', right: '5%',
          maxWidth: '920px', zIndex: 3,
          animation: 'bpFadeUp 0.85s ease 0.3s both'
        }}>
          {/* Gold pill badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(200,146,26,0.15)',
            border: '1px solid rgba(200,146,26,0.45)',
            color: '#e0b84a', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            fontSize: '11px', padding: '5px 15px', borderRadius: '40px',
            marginBottom: '18px'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8921a', display: 'inline-block' }} />
            {date} · Insights
          </div>

          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(26px, 3.6vw, 54px)',
            fontFamily: 'var(--fd)',
            lineHeight: 1.16,
            fontWeight: 800,
            textShadow: '0 3px 20px rgba(0,0,0,0.6)',
            maxWidth: '860px',
            margin: 0
          }}>
            {title}
          </h1>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '22px',
          left: '50%', zIndex: 4,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
          animation: 'scrollBounce 2.2s ease-in-out infinite'
        }}>
          <span>Scroll</span>
          <span style={{ fontSize: '17px' }}>↓</span>
        </div>
      </div>

      {/* ── BLOG CONTENT BODY ── */}
      <div style={{ maxWidth: '870px', margin: '0 auto', padding: '0 5% 90px' }}>

        {/* Floating white editorial card overlapping the hero */}
        <div style={{
          background: '#fff',
          borderRadius: '22px',
          padding: 'clamp(30px, 5vw, 64px)',
          marginTop: '-56px',
          position: 'relative', zIndex: 5,
          boxShadow: '0 32px 90px rgba(0,0,0,0.2)',
          border: '1px solid rgba(200,146,26,0.08)'
        }}>
          <Reveal delay={0.15}>
            <div className="blog-content" style={{
              color: '#253448',
              fontSize: '17px',
              lineHeight: 1.88,
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              {content ? content(setPage) : <p>Content is currently being updated. Please check back later.</p>}
            </div>
          </Reveal>
        </div>

        {/* CTA Box */}
        <Reveal delay={0.25}>
          <div style={{
            marginTop: '48px',
            padding: '52px 44px',
            background: 'linear-gradient(135deg, #0c1422 0%, #192340 100%)',
            borderRadius: '18px',
            border: '1px solid rgba(200,146,26,0.28)',
            textAlign: 'center',
            boxShadow: '0 24px 70px rgba(0,0,0,0.28)',
            position: 'relative', overflow: 'hidden'
          }}>
            {/* Glow orb */}
            <div style={{
              position: 'absolute', top: '-70px', right: '-70px',
              width: '240px', height: '240px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,146,26,0.14) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{ position: 'absolute', bottom: '-50px', left: '-50px',
              width: '180px', height: '180px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,146,26,0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ fontSize: '11px', color: '#c8921a', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Ready to get started?
            </div>
            <h3 style={{ color: '#fff', fontSize: 'clamp(20px, 3vw, 27px)', fontFamily: 'var(--fd)', marginBottom: '14px', fontWeight: 800 }}>
              Need precision CNC machining services?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '15.5px', maxWidth: '480px', margin: '0 auto 30px', lineHeight: 1.7 }}>
              Contact our team or send your drawing for a quick quote. We support global industries with ISO-certified manufacturing.
            </p>
            <button
              className="bp-quote-btn"
              onClick={() => setPage('contact')}
              style={{
                background: 'linear-gradient(135deg, #c8921a, #e0a830)',
                color: '#0c1422', border: 'none',
                padding: '16px 44px', fontSize: '13px', fontWeight: 800,
                letterSpacing: '0.13em', textTransform: 'uppercase',
                borderRadius: '8px', cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(200,146,26,0.35)',
                transition: 'all 0.3s ease'
              }}
            >
              Request a Quote →
            </button>
          </div>
        </Reveal>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
