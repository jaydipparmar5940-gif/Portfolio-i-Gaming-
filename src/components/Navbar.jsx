import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

// Ordered to match the actual page sections
const NAV_LINKS = [
  { label: 'Home',           href: '#home'        },
  { label: 'About',          href: '#about'       },
  { label: 'AI Strategy',    href: '#ai-igaming'  },
  { label: 'Brands',         href: '#brands'      },
  { label: 'Expertise',      href: '#expertise'   },
  { label: 'Product Funnel', href: '#funnel'       },
  { label: 'Case Studies',   href: '#casestudies' },
  { label: 'Contact',        href: '#contact'     },
];

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const [activeSection, setActive]      = useState('home');

  // Track scroll position → highlight active nav link
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find which section is currently in viewport
      const sectionIds = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sectionIds[i]);
          return;
        }
      }
      setActive('home');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenu(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Port<span className="gradient-text">folio</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    style={{
                      color: isActive ? 'var(--accent-cyan)' : undefined,
                      fontWeight: isActive ? 700 : undefined,
                    }}
                  >
                    {label}
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: '-4px', left: 0,
                        width: '100%', height: '2px',
                        background: 'var(--accent-cyan)',
                        borderRadius: '2px',
                        display: 'block',
                      }} />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <a
              href="/Jaydip_Parmar_PM.pdf"
              download="Jaydip Parmar PM"
              className="btn-primary btn-magenta"
              style={{ padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu glass-card"
          >
            <ul>
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      style={{
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                        fontWeight: isActive ? 700 : 500,
                        display: 'flex', alignItems: 'center', gap: '8px',
                      }}
                    >
                      {isActive && (
                        <span style={{ width: '6px', height: '6px', background: 'var(--accent-cyan)', borderRadius: '50%', flexShrink: 0 }} />
                      )}
                      {label}
                    </a>
                  </li>
                );
              })}
              {/* CV button in mobile menu too */}
              <li style={{ marginTop: '0.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <a
                  href="/Jaydip_Parmar_PM.pdf"
                  download="Jaydip Parmar PM"
                  style={{ color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
                  onClick={() => setMobileMenu(false)}
                >
                  <Download size={16} /> Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
