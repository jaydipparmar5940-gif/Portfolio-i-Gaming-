import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Brands from './components/Brands';
import Expertise from './components/Expertise';
import ProductFunnel from './components/ProductFunnel';
import CaseStudies from './components/CaseStudies';
import './App.css';

// ── Inline Contact Section ────────────────────────────────────────────────────
const Contact = () => (
  <section
    id="contact"
    className="section-padding"
    style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}
  >
    <div className="container text-center">
      <span className="tag">Get In Touch</span>
      <h2 className="title">
        Let's <span className="gradient-text">Work Together</span>
      </h2>
      <p className="subtitle" style={{ margin: '0 auto 3rem' }}>
        Product Manager with 4+ years in iGaming. Open to new opportunities, collaborations, and conversations.
      </p>

      <div style={{
        display: 'flex',
        gap: '1.2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '3rem',
      }}>
        {/* Email */}
        <a
          href="mailto:jaydipparmar5940@gmail.com"
          className="glass-card"
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '1rem 1.8rem', textDecoration: 'none',
            color: 'var(--text-primary)', borderRadius: '16px',
            transition: 'all 0.3s ease', minWidth: '220px', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>✉️</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>Email</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>jaydipparmar5940@gmail.com</div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919106956610"
          target="_blank"
          rel="noreferrer"
          className="glass-card"
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '1rem 1.8rem', textDecoration: 'none',
            color: 'var(--text-primary)', borderRadius: '16px',
            transition: 'all 0.3s ease', minWidth: '220px', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>WhatsApp</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#25D366' }}>+91 9106 956 610</div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jaydip-parmar-85a9a0192/"
          target="_blank"
          rel="noreferrer"
          className="glass-card"
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '1rem 1.8rem', textDecoration: 'none',
            color: 'var(--text-primary)', borderRadius: '16px',
            transition: 'all 0.3s ease', minWidth: '220px', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>💼</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>LinkedIn</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0A66C2' }}>Jaydip Parmar</div>
          </div>
        </a>
      </div>

      {/* Footer note */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Jaydip Parmar · iGaming Product Manager
      </p>
    </div>
  </section>
);

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
    </div>
  );
}

export default App;
