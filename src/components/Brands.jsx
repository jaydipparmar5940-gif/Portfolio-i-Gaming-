import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe2, DollarSign, Users, Tag } from 'lucide-react';

// ─── Casino Brand Data ──────────────────────────────────────────────────────
const CASINOS = [
  // ── Bangladesh — Biglory (north), Dalal (south-east)
  { name: "Biglory Casino", domain: "biglory.com", logoDomain: "biglory.com", url: "https://biglory.com",
    country: "Bangladesh", currency: "BDT", market: "Bangladesh", type: "B2C White-label", players: "Regional",
    lat: 25.2, lng: 89.5, color: "#00e4ff" },
  { name: "Dalal Casino", domain: "dalal.live", logoDomain: "dalal.live",
    logoUrl: "https://dalal.live/assets/images/Pi7_Tool_Pi7_Tool_dalal%20logo%204%203.png",
    url: "https://dalal.live",
    country: "Bangladesh", currency: "BDT", market: "Bangladesh", type: "B2C White-label", players: "10K+",
    lat: 22.5, lng: 91.8, color: "#ff6b00" },

  // ── Aruba
  { name: "Jackpot Aruba", domain: "jackpotaruba.com", logoDomain: "jackpotaruba.com",
    logoUrl: "https://jackpotaruba.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjackpot_aruba_logo.a1a41858.png&w=384&q=75",
    url: "https://jackpotaruba.com",
    country: "Aruba", currency: "USD · ZAR · EUR", market: "Multi-market", type: "B2C Turnkey", players: "Global",
    lat: 12.5, lng: -70.0, color: "#ffc700" },

  // ── India
  { name: "1Jackbit", domain: "1jackbit.com", logoDomain: "1jackbit.com",
    logoUrl: "https://1jackbit.com/images/logos/jackbit.svg?v=2",
    url: "https://1jackbit.com",
    country: "India / Namibia", currency: "INR · NAD", market: "India & Namibia", type: "B2C White-label", players: "Regional",
    lat: 19.0, lng: 77.0, color: "#00ff88" },

  // ── Pakistan
  { name: "GameShack Casino", domain: "gameshackcasino.io", logoDomain: "staging.gameshack.io",
    logoUrl: "https://staging.gameshack.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.7cd00fca.png&w=640&q=75",
    url: "https://gameshackcasino.io",
    country: "Pakistan", currency: "PKR (Pakistani Rupee)", market: "Pakistan", type: "B2C White-label", players: "Regional",
    lat: 30.3, lng: 69.3, color: "#9b59b6" },

  // ── Turkey
  { name: "Fox Play Casino", domain: "fox-play.com", logoDomain: "fox-play.com",
    logoUrl: "https://fox-play.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFOX_LOGO.0f4518b3.png&w=384&q=75",
    url: "https://fox-play.com",
    country: "Turkey", currency: "TRY", market: "Turkey", type: "B2C White-label", players: "Regional",
    lat: 39.5, lng: 34.5, color: "#ff8c00" },

  // ── UK (Global)
  { name: "Zyroz", domain: "zyroz.io", logoDomain: "zyroz.io",
    logoUrl: "https://zyroz.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZyroz-nnew.d8cdfead.png&w=256&q=75",
    url: "https://zyroz.io",
    country: "Global", currency: "USD", market: "Global", type: "B2C Turnkey", players: "Global",
    lat: 54.0, lng: -2.5, color: "#aaff00" },

  // ── Mongolia
  { name: "Gamzino", domain: "gamzino.club", logoDomain: "gamzino.club",
    logoUrl: "https://gamzino.club/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=384&q=75",
    url: "https://gamzino.club",
    country: "Mongolia", currency: "MNT", market: "Mongolia", type: "B2C White-label", players: "Regional",
    lat: 47.5, lng: 106.0, color: "#ffc700" },

  // ── South Africa — Moola (west), Pesa (east)
  { name: "Moola Casino", domain: "moola.casino", logoDomain: "moola.casino",
    logoUrl: "https://moola.casino/_next/static/media/moola.b9b1a06c.svg",
    url: "https://moola.casino",
    country: "South Africa", currency: "ZAR", market: "South Africa", type: "B2C White-label", players: "Regional",
    lat: -29.5, lng: 20.5, color: "#00e4ff" },
  { name: "Pesa Casino", domain: "pesacasino.co.za", logoDomain: "pesacasino.co.za",
    logoUrl: "https://www.pesacasino.co.za/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d5d556eb.png&w=256&q=75",
    url: "https://pesacasino.co.za",
    country: "South Africa", currency: "ZAR", market: "South Africa", type: "B2C White-label", players: "10K+",
    lat: -32.0, lng: 26.5, color: "#ff2d7d" },

  // ── Denmark
  { name: "PlayNTake", domain: "playntake.com", logoDomain: "playntake.com",
    logoUrl: "https://playntake.com/assets/images/playntake-logo.png",
    url: "https://playntake.com",
    country: "Denmark", currency: "DKK", market: "Denmark", type: "B2C White-label", players: "Regional",
    lat: 56.0, lng: 10.0, color: "#00ff88" },

  // ── USA East (Flucky)
  { name: "Flucky", domain: "flucky.com", logoDomain: "flucky.com",
    logoUrl: "https://flucky.com/_next/image?url=%2Fassets%2Fimages%2Fflucky-logo2.png&w=384&q=75",
    url: "https://flucky.com",
    country: "Global", currency: "USD", market: "Global", type: "B2C Turnkey", players: "Global",
    lat: 38.5, lng: -77.0, color: "#ffc700" },

  // ── Nepal
  { name: "Makalubet", domain: "makalubet.com", logoDomain: "makalubet.com",
    logoUrl: "https://makalubet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmakalu_logo.67d08d87.png&w=384&q=75",
    url: "https://makalubet.com",
    country: "Nepal", currency: "NPR · USD", market: "Nepal & Global", type: "B2C White-label", players: "Regional",
    lat: 27.5, lng: 83.5, color: "#ff6b35" },

  // ── Germany (AstroBet Global)
  { name: "AstroBet Casino", domain: "astrobet.casino", logoDomain: "astrobet.casino",
    logoUrl: "https://astrobet.casino/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo01.84e21e45.png&w=256&q=75",
    url: "https://astrobet.casino",
    country: "Global", currency: "USD", market: "Global", type: "B2C Turnkey", players: "Global",
    lat: 50.5, lng: 9.5, color: "#00e4ff" },

  // ── Canada
  { name: "Play888 Casino", domain: "play888.ca", logoDomain: "play888.ca",
    logoUrl: "https://play888.ca/_next/static/media/play888-logo.a68f1973.svg",
    url: "https://play888.ca",
    country: "Canada", currency: "CAD", market: "Canada", type: "B2C White-label", players: "Regional",
    lat: 53.5, lng: -100.0, color: "#ff2d7d" },

  // ── Caribbean (TT Casino)
  { name: "TT Casino Bet", domain: "ttcasinobet.com", logoDomain: "ttcasinobet.com",
    logoUrl: "https://ttcasinobet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c7ce505b.png&w=256&q=75",
    url: "https://ttcasinobet.com",
    country: "Global", currency: "USD", market: "Global", type: "B2C Turnkey", players: "Global",
    lat: 10.7, lng: -61.2, color: "#00ff88" },

  // ── USA West (Luxwin)
  { name: "Luxwin", domain: "luxwin.us", logoDomain: "luxwin.us", url: "https://luxwin.us",
    country: "USA", currency: "USD", market: "USA", type: "B2C White-label", players: "Regional",
    lat: 37.5, lng: -112.0, color: "#ffc700" },

  // ── Singapore (BetVerse88)
  { name: "BetVerse88", domain: "betverse88.com", logoDomain: "betverse88.com", url: "https://betverse88.com",
    country: "Global", currency: "USD", market: "Global", type: "B2C Turnkey", players: "Global",
    lat: 1.3, lng: 103.8, color: "#ff6b35" },

  // ── UAE (Nexus Crypto)
  { name: "Nexus Casino", domain: "nexuscasino.io", logoDomain: "nexuscasino.io", url: "https://nexuscasino.io",
    country: "Global", currency: "Crypto · USD", market: "Global", type: "B2C Crypto Casino", players: "Global",
    lat: 24.5, lng: 54.5, color: "#00e4ff" },

  // ── Australia (TwoGood)
  { name: "TwoGood", domain: "twogood.live", logoDomain: "twogood.live", url: "https://twogood.live",
    country: "Global", currency: "USD", market: "Global", type: "B2C Turnkey", players: "Global",
    lat: -33.9, lng: 151.2, color: "#ff2d7d" },
];



// Build a logo HTML element — pill shape for full logos
function buildMarkerEl(casino, onClickFn) {
  const isMobile = window.innerWidth < 480;
  const isTablet = window.innerWidth < 768;
  const w = isMobile ? 70 : isTablet ? 88 : 110;
  const h = isMobile ? 34 : isTablet ? 42 : 52;
  const imgMax = isMobile ? 56 : isTablet ? 72 : 94;

  const wrapper = document.createElement('div');
  wrapper.title = casino.name;
  wrapper.style.cssText = `
    width: ${w}px;
    height: ${h}px;
    border-radius: 10px;
    background: rgba(8,18,34,0.94);
    border: 2px solid ${casino.color};
    box-shadow: 0 0 14px ${casino.color}70, 0 0 4px ${casino.color}40;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    pointer-events: auto;
    transition: transform 0.15s, box-shadow 0.15s;
    padding: 3px 6px;
  `;

  const img = document.createElement('img');
  img.style.cssText = `max-width: ${imgMax}px; max-height: ${h - 10}px; width: auto; height: auto; object-fit: contain;`;

  const primary   = casino.logoUrl || `https://logo.clearbit.com/${casino.logoDomain || casino.domain}`;
  const fallback1 = `https://www.google.com/s2/favicos?domain=${casino.logoDomain || casino.domain}&sz=64`;

  img.src = primary;
  img.onerror = () => {
    img.onerror = () => {
      img.style.display = 'none';
      const span = document.createElement('span');
      span.textContent = casino.name.charAt(0);
      span.style.cssText = `color:${casino.color};font-size:${isMobile ? '0.9rem' : '1.4rem'};font-weight:800;font-family:'Outfit',sans-serif;`;
      wrapper.appendChild(span);
    };
    img.src = `https://www.google.com/s2/favicons?domain=${casino.logoDomain || casino.domain}&sz=64`;
  };

  wrapper.appendChild(img);

  wrapper.addEventListener('mouseenter', () => {
    wrapper.style.transform = 'scale(1.18)';
    wrapper.style.boxShadow = `0 0 24px ${casino.color}, 0 0 8px ${casino.color}`;
    wrapper.style.zIndex = '999';
  });
  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'scale(1)';
    wrapper.style.boxShadow = `0 0 14px ${casino.color}70, 0 0 4px ${casino.color}40`;
  });
  wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
    onClickFn(casino);
  });

  return wrapper;
}

// ─── Casino Modal ───────────────────────────────────────────────────────────
const CasinoModal = ({ casino, onClose }) => {
  if (!casino) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 3000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem'
        }}
      >
        <motion.div
          key="modal-card"
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'linear-gradient(135deg, #0d1b2a 0%, #0a1628 100%)',
            border: `1.5px solid ${casino.color}50`,
            boxShadow: `0 0 60px ${casino.color}25, 0 25px 60px rgba(0,0,0,0.7)`,
            borderRadius: '24px',
            padding: '2.5rem',
            width: '100%',
            maxWidth: '480px',
            position: 'relative',
          }}
        >
          <button onClick={onClose} style={{
            position: 'absolute', top: '1.2rem', right: '1.2rem',
            background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff',
            width: '36px', height: '36px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer'
          }}><X size={18} /></button>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
            <div style={{
              width: '68px', height: '68px', borderRadius: '16px',
              background: `${casino.color}18`,
              border: `2px solid ${casino.color}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', flexShrink: 0,
              boxShadow: `0 0 20px ${casino.color}30`
            }}>
              <img
                src={`https://logo.clearbit.com/${casino.logoDomain || casino.domain}`}
                alt={casino.name}
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                onError={e => {
                  e.target.src = `https://www.google.com/s2/favicons?domain=${casino.logoDomain || casino.domain}&sz=128`;
                  e.target.onerror = () => { e.target.style.display = 'none'; };
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: casino.color, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                {casino.type}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                {casino.name}
              </h3>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>
                {casino.domain}
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.8rem' }}>
            {[
              { icon: <Globe2 size={14} />, label: 'Country', value: casino.country },
              { icon: <DollarSign size={14} />, label: 'Currency', value: casino.currency },
              { icon: <Users size={14} />, label: 'Player Base', value: casino.players },
              { icon: <Tag size={14} />, label: 'Market', value: casino.market },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px', padding: '0.9rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: casino.color, marginBottom: '5px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {item.icon} {item.label}
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Visit Button */}
          <a
            href={casino.url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              background: `linear-gradient(135deg, ${casino.color}25, ${casino.color}10)`,
              border: `1.5px solid ${casino.color}60`,
              color: casino.color, borderRadius: '12px',
              padding: '0.85rem 1.5rem',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem',
              boxShadow: `0 0 20px ${casino.color}15`,
            }}
          >
            <ExternalLink size={15} />
            Visit {casino.domain}
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Main Brands Component ──────────────────────────────────────────────────
const Brands = () => {
  const globeRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);

  const handleCasinoClick = useCallback((casino) => {
    setSelectedCasino(casino);
  }, []);

  useEffect(() => {
    let alive = true;

    const initGlobe = async () => {
      if (!globeRef.current) return;
      const { default: Globe } = await import('globe.gl');
      if (!alive || !globeRef.current) return;

      const w = globeRef.current.clientWidth;
      const h = globeRef.current.clientHeight;

      const globe = Globe()(globeRef.current)
        .width(w)
        .height(h)
        .backgroundColor('rgba(0,0,0,0)')
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .atmosphereColor('#00e4ff')
        .atmosphereAltitude(0.15)
        // ── HTML Logo Markers ── (large, clickable)
        .htmlElementsData(CASINOS)
        .htmlLat('lat')
        .htmlLng('lng')
        .htmlAltitude(0.015)
        .htmlElement(d => buildMarkerEl(d, handleCasinoClick))
        // ── Pulse rings behind each marker ──
        .ringsData(CASINOS)
        .ringLat('lat')
        .ringLng('lng')
        .ringColor(d => d.color)
        .ringMaxRadius(3)
        .ringPropagationSpeed(2.5)
        .ringRepeatPeriod(1400)
        .ringAltitude(0.005);

      // Controls
      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 220;
      controls.maxDistance = 550;

      // Pause auto-rotate while user drags
      const renderer = globe.renderer();
      if (renderer?.domElement) {
        renderer.domElement.addEventListener('pointerdown', () => { controls.autoRotate = false; });
        renderer.domElement.addEventListener('pointerup', () => {
          setTimeout(() => { if (alive) controls.autoRotate = true; }, 2000);
        });
      }

      globe.pointOfView({ lat: 20, lng: 60, altitude: 2.2 }, 0);
      globeInstanceRef.current = globe;
      if (alive) setIsGlobeReady(true);
    };

    initGlobe();

    return () => {
      alive = false;
    };
  }, [handleCasinoClick]);

  useEffect(() => {
    const handleResize = () => {
      if (globeInstanceRef.current && globeRef.current) {
        globeInstanceRef.current.width(globeRef.current.clientWidth).height(globeRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const marketStats = [
    { flag: 'bd', label: 'Bangladesh', count: 2, color: '#00e4ff',  lat: 23.7,  lng: 90.4  },
    { flag: 'za', label: 'South Africa',count: 2, color: '#ff2d7d', lat: -30.5, lng: 25.0  },
    { flag: 'pk', label: 'Pakistan',    count: 1, color: '#9b59b6', lat: 30.3,  lng: 69.3  },
    { flag: 'tr', label: 'Turkey',      count: 1, color: '#ff8c00', lat: 39.5,  lng: 34.5  },
    { flag: 'ca', label: 'Canada',      count: 1, color: '#ffc700', lat: 53.5,  lng: -100.0},
    { flag: 'dk', label: 'Denmark',     count: 1, color: '#00ff88', lat: 56.0,  lng: 10.0  },
    { flag: 'np', label: 'Nepal',       count: 1, color: '#ff6b35', lat: 27.5,  lng: 83.5  },
    { flag: 'mn', label: 'Mongolia',    count: 1, color: '#ffc700', lat: 47.5,  lng: 106.0 },
    { flag: 'in', label: 'India',       count: 1, color: '#00ff88', lat: 19.0,  lng: 77.0  },
    { flag: 'us', label: 'USA',         count: 2, color: '#ffc700', lat: 38.0,  lng: -97.0 },
    { flag: null, label: 'Global',      count: 7, color: '#00e4ff', lat: 20.0,  lng: 0.0   },
  ];

  const flyToMarket = (m) => {
    setSelectedMarket(m.label);
    if (globeInstanceRef.current) {
      // Stop auto-rotate briefly during fly
      const controls = globeInstanceRef.current.controls();
      controls.autoRotate = false;
      globeInstanceRef.current.pointOfView(
        { lat: m.lat, lng: m.lng, altitude: m.label === 'Global' ? 2.2 : 1.4 },
        1400
      );
      setTimeout(() => { controls.autoRotate = true; }, 4000);
    }
  };

  return (
    <section id="brands" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%', height: '70%',
        background: 'radial-gradient(circle, rgba(0,228,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="tag">Live Deployments</span>
          <h2 className="title">
            Casino Brands <span className="gradient-text">World Map</span>
          </h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>
            20+ live casino brands across 10+ global markets. <strong style={{ color: 'var(--accent-cyan)' }}>Click any logo</strong> to explore the brand &nbsp;·&nbsp; Drag to rotate &nbsp;·&nbsp; Scroll to zoom
          </p>
        </div>

        {/* Globe */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {!isGlobeReady && (
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              zIndex: 10, color: 'var(--accent-cyan)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'
            }}>
              <div style={{
                width: '50px', height: '50px',
                border: '3px solid var(--accent-cyan)',
                borderTopColor: 'transparent', borderRadius: '50%',
                animation: 'arc-spin 0.8s linear infinite'
              }} />
              <span style={{ fontWeight: 600 }}>Loading Globe...</span>
            </div>
          )}
          <div
            ref={globeRef}
            style={{
              width: '100%',
              height: 'clamp(340px, 60vw, 680px)',
              borderRadius: '20px',
              overflow: 'hidden',
              opacity: isGlobeReady ? 1 : 0,
              transition: 'opacity 1s ease',
              cursor: 'grab',
            }}
          />
        </div>

        {/* Market badges — click to fly globe to that country */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', justifyContent: 'center', marginTop: '2rem' }}>
          {marketStats.map(m => {
            const isActive = selectedMarket === m.label;
            return (
              <div
                key={m.label}
                onClick={() => flyToMarket(m)}
                title={`Fly to ${m.label}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: isActive ? `${m.color}22` : `${m.color}10`,
                  border: `${isActive ? '2px' : '1px'} solid ${isActive ? m.color : `${m.color}35`}`,
                  boxShadow: isActive ? `0 0 12px ${m.color}60, 0 0 4px ${m.color}30` : 'none',
                  borderRadius: '30px', padding: isActive ? '4px 13px' : '5px 14px',
                  fontSize: '0.82rem', color: m.color, fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  userSelect: 'none',
                }}
              >
                {m.flag
                  ? <img
                      src={`https://flagcdn.com/w20/${m.flag}.png`}
                      alt={m.label}
                      style={{ width: '20px', height: '14px', borderRadius: '2px', objectFit: 'cover', flexShrink: 0 }}
                    />
                  : <span style={{ fontSize: '1rem' }}>🌐</span>
                }
                {m.label} · {m.count}
                {isActive && (
                  <span style={{
                    marginLeft: '2px',
                    background: m.color,
                    color: '#000',
                    borderRadius: '50%',
                    width: '16px', height: '16px',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 900, flexShrink: 0
                  }}>✓</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCasino && (
        <CasinoModal casino={selectedCasino} onClose={() => setSelectedCasino(null)} />
      )}
    </section>
  );
};

export default Brands;
