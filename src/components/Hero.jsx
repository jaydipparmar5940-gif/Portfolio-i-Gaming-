import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile_transparent.png';

const Typewriter = ({ texts, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = delay;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typeSpeed = 500;
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(ticker);
  }, [currentText, isDeleting, loopNum, texts, delay]);

  return <span>{currentText}<span className="cursor-blink">|</span></span>;
};

const CountAnim = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - startValue) + startValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    });
  };

  const socials = [
    { 
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jaydip-parmar-85a9a0192/",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    { 
      label: "WhatsApp",
      href: "https://wa.me/919106956610",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    },
    { 
      label: "Email",
      href: "mailto:jaydipparmar5940@gmail.com",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    }
  ];

  return (
    <section
      id="home"
      className="hero-section"
      onMouseMove={handleMouseMove}
    >
      <div className="hero-bg">
        <div className="grid-overlay" />
        {/* Animated Particles background */}
        <div className="particles-layer">
          {/* Add a few random glowing dots */}
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-split-layout">

          {/* LEFT: PROFILE PICTURE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="hero-visual-left"
          >
            <div className="profile-ring-outer">

              {/* === PULSING GLOW RINGS (3 staggered) === */}
              <div className="pulse-ring pr-1" />
              <div className="pulse-ring pr-2" />
              <div className="pulse-ring pr-3" />

              {/* === SPINNING ARCS (cyan + pink) === */}
              <div className="spin-arc arc-cyan" />
              <div className="spin-arc arc-pink" />
              <div className="spin-arc arc-white" />

              {/* === ORBITING SPARKLE DOTS === */}
              <div className="orbit-wrap orb-wrap-1">
                <div className="orbit-dot od-cyan" />
              </div>
              <div className="orbit-wrap orb-wrap-2">
                <div className="orbit-dot od-pink" />
              </div>
              <div className="orbit-wrap orb-wrap-3">
                <div className="orbit-dot od-gold" />
              </div>

              {/* === SOLID GLOW CIRCLE (main backdrop) === */}
              <div className="profile-ring-inner"></div>

              {/* === PHOTO (sits on top at z-index 5) === */}
              <img
                src={profileImg}
                alt="Jaydip Parmar"
                className="profile-photo"
              />
            </div>
          </motion.div>

          {/* RIGHT: TEXT & TYPEWRITER */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-text-right"
          >
            <h3 className="greeting">Hello, It's Me</h3>
            <h1 className="name-title">Jaydip Parmar</h1>
            <h2 className="role-title">
              And I'm a <span className="gradient-text"><Typewriter texts={['iGaming Product Manager', 'Casino Platform Expert', 'B2B & B2C Growth Strategist', 'Bonus Engine Architect']} /></span>
            </h2>

            <p className="subtitle">
              Results-driven iGaming PM with 3.5+ years delivering B2B &amp; B2C casino platforms. Launched 20+ live brands across Bangladesh, South Africa, Canada, Turkey &amp; Nepal — driving GGR growth and player lifetime value at scale.
            </p>

            <div className="social-row">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-icon-box" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

          </motion.div>

        </div>
      </div>

      {/* STATS BAR (Fixed to bottom of Hero) */}
      <div className="hero-stats-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className="stat-box">
            <span className="stat-number gradient-text-gold"><CountAnim end={20} suffix="+" /></span>
            <span className="stat-label">Live Brands</span>
          </div>
          <div className="stat-box">
            <span className="stat-number gradient-text-gold"><CountAnim end={10} suffix="+" /></span>
            <span className="stat-label">Global Markets</span>
          </div>
          <div className="stat-box">
            <span className="stat-number gradient-text-gold"><CountAnim end={190} suffix="K+" /></span>
            <span className="stat-label">Total Players</span>
          </div>
          <div className="stat-box">
            <span className="stat-number gradient-text-gold"><CountAnim end={3} suffix=".5 Yrs" /></span>
            <span className="stat-label">Experience</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
