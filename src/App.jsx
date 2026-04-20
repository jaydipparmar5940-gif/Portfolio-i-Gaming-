import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Brands from './components/Brands';
import Expertise from './components/Expertise';
import ProductFunnel from './components/ProductFunnel';
import CaseStudies from './components/CaseStudies';
import './App.css';

// ── Back To Top Button ────────────────────────────────────────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999,
        width: '48px', height: '48px', borderRadius: '50%',
        background: 'var(--accent-cyan)', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 24px rgba(0,228,255,0.5)',
        transition: 'all 0.3s ease', color: '#000',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,228,255,0.8)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,228,255,0.5)'; }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
};

// ── Contact Section ───────────────────────────────────────────────────────────
const Contact = () => {
  const [vw, setVw] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setVw(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  const isMobile = vw < 768;

  const contacts = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00e4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'jaydipparmar5940@gmail.com',
      href: 'mailto:jaydipparmar5940@gmail.com',
      color: '#00e4ff',
      sub: 'Best for detailed discussions',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: '+91 9106 956 610',
      href: 'https://wa.me/919106956610',
      color: '#25D366',
      sub: 'Quick reply · Usually in 1–2h',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Jaydip Parmar',
      href: 'https://www.linkedin.com/in/jaydip-parmar-85a9a0192/',
      color: '#0A66C2',
      sub: 'Connect & view full profile',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      ),
      label: 'Download CV',
      value: 'Jaydip_Parmar_PM.pdf',
      href: '/Jaydip_Parmar_PM.pdf',
      color: '#ffc700',
      sub: '2-page iGaming PM resume',
      download: 'Jaydip Parmar PM',
    },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'400px', background:'radial-gradient(ellipse, rgba(0,228,255,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div className="container text-center">
        <span className="tag">Get In Touch</span>
        <h2 className="title">Let's <span className="gradient-text">Work Together</span></h2>
        <p className="subtitle" style={{ margin: '0 auto 1rem' }}>
          Associate Product Manager · iGaming · AI Strategy · Open to new opportunities globally.
        </p>

        {/* Availability badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(0,255,136,0.1)', border:'1px solid rgba(0,255,136,0.3)', borderRadius:'30px', padding:'6px 18px', marginBottom:'3rem' }}>
          <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#00ff88', display:'inline-block', boxShadow:'0 0 8px #00ff88', animation:'pulse 2s infinite' }}/>
          <span style={{ color:'#00ff88', fontWeight:600, fontSize:'0.85rem' }}>Available for new roles &amp; collaborations</span>
        </div>

        {/* Contact Cards */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap:'1.2rem', maxWidth:'720px', margin:'0 auto 3rem' }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
               rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
               download={c.download}
               className="glass-card"
               style={{ display:'flex', alignItems:'center', gap:'14px', padding:'1.2rem 1.6rem', textDecoration:'none', color:'var(--text-primary)', borderRadius:'16px', transition:'all 0.3s ease', borderTop:`2px solid ${c.color}30`, textAlign:'left' }}
               onMouseEnter={e => { e.currentTarget.style.borderTopColor = c.color; e.currentTarget.style.transform = 'translateY(-3px)'; }}
               onMouseLeave={e => { e.currentTarget.style.borderTopColor = `${c.color}30`; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:`${c.color}15`, border:`1px solid ${c.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize:'0.72rem', color:'var(--text-muted)', fontWeight:600, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'2px' }}>{c.label}</div>
                <div style={{ fontWeight:700, fontSize:'0.92rem', color:c.color, marginBottom:'2px' }}>{c.value}</div>
                <div style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>{c.sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTop:'1px solid var(--glass-border)', paddingTop:'2rem' }}>
          <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', marginBottom:'0.5rem' }}>
            © {new Date().getFullYear()} Jaydip Parmar · iGaming Product Manager · Ahmedabad, India
          </p>
          <p style={{ color:'var(--text-muted)', fontSize:'0.75rem' }}>
            Built with React · Vite · Framer Motion · Deployed on Vercel
          </p>
        </div>
      </div>
    </section>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        {/* 1 */}<Hero />
        {/* 2 */}<AboutMe />
        {/* 3 */}<Brands />
        {/* 4 */}<Expertise />
        {/* 5 */}<ProductFunnel />
        {/* 6 */}<CaseStudies />
        {/* 7 */}<Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
