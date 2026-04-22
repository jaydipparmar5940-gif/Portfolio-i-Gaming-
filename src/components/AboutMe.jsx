import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail, Briefcase, CheckCircle2, Brain, Cpu, Zap, TrendingUp, Shield, Users, BarChart3, Bell } from 'lucide-react';
import aboutImg from '../assets/jaydip_about.jpg';

// ── CV download link (file placed in /public) ─────────────────────────────────
const CV_URL  = '/Jaydip_Parmar_PM.pdf';
const CV_NAME = 'Jaydip Parmar PM';


// ── AI in iGaming Data ────────────────────────────────────────────────────────
const aiUseCases = [
  {
    icon: <Brain size={28} />,
    color: '#00e4ff',
    title: 'AI Personalisation Engine',
    tag: 'LOBBY & UX',
    desc: 'Machine learning models analyse each player\'s session history, game preferences, and betting patterns to surface personalised game recommendations in real-time — increasing engagement by 35–60% vs. static lobbies.',
    impact: 'Lobby CTR +40%',
    applies: 'Brands: Dalal, Pesa, Biglory',
  },
  {
    icon: <Zap size={28} />,
    color: '#ffc700',
    title: 'Predictive Bonus Engine',
    tag: 'BONUS & PROMOTIONS',
    desc: 'AI models predict the optimal bonus type, timing, and value for each player segment — triggering welcome bonuses, cashback, or free spins at peak churn-risk windows. Eliminates one-size-fits-all promo waste.',
    impact: 'Bonus ROI +55%',
    applies: '20+ brands, multi-market',
  },
  {
    icon: <Bell size={28} />,
    color: '#ff2d7d',
    title: 'Smart Push Notifications',
    tag: 'MARKETING & CRM',
    desc: 'AI determines the exact send-time, channel (push/SMS/email), and message content for each player based on behavioural signals. Hyper-personalised notifications sent at the player\'s highest engagement window.',
    impact: 'Open Rate +70%',
    applies: 'All CRM Campaigns',
  },
  {
    icon: <TrendingUp size={28} />,
    color: '#00ff88',
    title: 'Churn Prediction & LTV',
    tag: 'RETENTION & LTV',
    desc: 'Gradient boosting models predict 7-day and 30-day churn probability per player, enabling proactive CRM journeys — VIP outreach, personalised reload offers, and reactivation push sequences before players go cold.',
    impact: 'Churn -28%',
    applies: 'LTV & Retention Teams',
  },
  {
    icon: <BarChart3 size={28} />,
    color: '#9b59b6',
    title: 'Dynamic GGR & RTP Optimisation',
    tag: 'REVENUE INTELLIGENCE',
    desc: 'AI continuously monitors GGR per game, provider, and player segment — flagging payout anomalies, recommending RTP adjustments, and auto-surfacing high-margin games in lobby prime positions.',
    impact: 'GGR Margin +25%',
    applies: 'AIS Technolabs Platforms',
  },
  {
    icon: <Shield size={28} />,
    color: '#ff6b35',
    title: 'AI Fraud & AML Detection',
    tag: 'COMPLIANCE & SECURITY',
    desc: 'Behavioural AI models detect bonus abuse patterns, multi-account fraud, and AML red flags in real-time — reducing manual compliance review load by 80% while improving detection accuracy vs. rule-based systems.',
    impact: 'Fraud Detection +80%',
    applies: 'KYC/AML Workflows',
  },
  {
    icon: <Cpu size={28} />,
    color: '#00e4ff',
    title: 'AI Content & SEO',
    tag: 'BLOG & WEB PORTAL',
    desc: 'Generative AI accelerates casino content production — localised blog posts, game review copy, email campaigns, and SEO-optimised landing pages at scale. Combined with AI-based keyword clustering for iGaming SEO dominance.',
    impact: 'Content Cost -70%',
    applies: 'Marketing & Portals',
  },
  {
    icon: <Users size={28} />,
    color: '#ffc700',
    title: 'AI Influencer ROI Analytics',
    tag: 'INFLUENCER MARKETING',
    desc: 'AI tools analyse Kick.com streamer performance — tracking referral codes, session heat maps, player deposit rates per streamer, and predictive ROI scoring to identify top-performing influencer partnerships before committing spend.',
    impact: 'Influencer ROI +45%',
    applies: 'Kick.com Campaigns',
  },
];

// ── Work History ──────────────────────────────────────────────────────────────
const workHistory = [
  {
    period: 'April 2025 – Present',
    title: 'Associate Product Manager — Casino',
    company: 'AIS Technolabs Pvt. Ltd.',
    sub: 'Casino Platforms · White-label & Turnkey · B2C · Ahmedabad, India',
    color: 'var(--accent-cyan)',
    aiTag: 'AI: Churn prediction, personalised bonus triggers, GA4 ML audiences',
    bullets: [
      'Owned product roadmap for <strong>19+ B2C iGaming casino platforms</strong> — GGR growth and multi-market scalability across BD, ZA, CA, TR, DK, NP, MN & Global.',
      'Led <strong>game aggregator integrations</strong> — provider onboarding, lobby curation, slots/live/crash/table games via single API.',
      'Engineered <strong>bonus engine workflows</strong> and affiliate program structures (CPA/RevShare/Hybrid) — achieving measurable ARPU uplift.',
      'Rolled out <strong>AI-assisted CRM campaigns</strong> using ML churn scoring and predictive bonus timing across 20+ brands.',
      'Executed <strong>Kick.com, Telegram vaping, and Meta casino marketing</strong> campaigns — tracked with GA4 + custom BI dashboards.',
      'Delivered <strong>4 client projects on schedule</strong> and launched 2 campaigns reaching 10,000+ players.',
    ],
  },
  {
    period: 'Dec 2023 – April 2025',
    title: 'IT Project Coordinator',
    company: 'SHAIP AI DATA (IND) Pvt. LLP.',
    sub: 'AI Data Platforms · Multilingual Speech · Biometric AI · Ahmedabad, India',
    color: 'var(--accent-gold)',
    aiTag: 'AI: Multilingual NLP, biometric fraud detection, data pipeline QA',
    bullets: [
      'Led <strong>Project Vaani</strong> — India\'s largest multilingual speech data initiative for enterprise AI training datasets.',
      'Delivered <strong>25,000+ video anti-spoofing dataset</strong> for enterprise biometric fraud detection AI models.',
      'Maintained <strong>95% stakeholder satisfaction</strong> through UX iteration, structured feedback loops, and Agile sprint delivery.',
      'Managed <strong>Jira-based Agile processes</strong> — sprint planning, UAT, backlog grooming, and cross-functional team coordination.',
    ],
  },
];

// ── Marketing Channels ────────────────────────────────────────────────────────
const marketingChannels = [
  {
    icon: <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Meta" style={{ width:'36px', height:'36px' }} />,
    title: 'Meta / Facebook', tag: 'PAID ADVERTISING', color: '#1877F2',
    desc: 'Casino meta campaigns with AI-powered lookalike audiences — geo-targeted player acquisition, ML-optimised bid strategies, and dynamic creative testing for first-deposit conversion.',
    ai: 'AI: Dynamic audience optimisation, predictive bidding',
  },
  {
    icon: <img src="https://cdn.simpleicons.org/telegram/26A5E4" alt="Telegram" style={{ width:'36px', height:'36px' }} />,
    title: 'Telegram', tag: 'COMMUNITY MARKETING', color: '#26A5E4',
    desc: 'Building active casino communities — bonus announcements, vaping campaigns, and AI-generated localised content across Bangladesh and global markets.',
    ai: 'AI: Auto-content generation, engagement timing',
  },
  {
    icon: <img src="https://cdn.simpleicons.org/tiktok/ffffff" alt="TikTok" style={{ width:'36px', height:'36px' }} />,
    title: 'TikTok', tag: 'SHORT-FORM CONTENT', color: '#ff0050',
    desc: 'Viral casino short-form content strategy using AI-scripted hooks — big win clips, bonus reveals, gaming highlights targeting Gen Z player segments.',
    ai: 'AI: Script generation, trend prediction',
  },
  {
    icon: <img src="https://cdn.simpleicons.org/kick/53fc18" alt="Kick" style={{ width:'36px', height:'36px' }} />,
    title: 'Kick.com', tag: 'INFLUENCER STREAMING', color: '#53fc18',
    desc: 'Casino influencer partnerships with AI-tracked referral analytics — CPA deals, session tracking, and ML-based ROI scoring per streamer.',
    ai: 'AI: Influencer ROI scoring, referral analytics',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="8"  r="4" fill="#ffc700"/>
        <circle cx="8"  cy="28" r="4" fill="#ffc700"/>
        <circle cx="28" cy="28" r="4" fill="#ffc700"/>
        <line x1="18" y1="12" x2="8"  y2="24" stroke="#ffc700" strokeWidth="2" strokeOpacity="0.7"/>
        <line x1="18" y1="12" x2="28" y2="24" stroke="#ffc700" strokeWidth="2" strokeOpacity="0.7"/>
        <line x1="8"  y1="28" x2="28" y2="28" stroke="#ffc700" strokeWidth="2" strokeOpacity="0.7"/>
      </svg>
    ),
    title: 'Affiliate Network', tag: 'PERFORMANCE MARKETING', color: '#ffc700',
    desc: 'End-to-end affiliate program — CPA/RevShare/Hybrid models, real-time commission dashboards, and AI-powered fraud detection for affiliate traffic.',
    ai: 'AI: Fraud detection, performance prediction',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* Person */}
        <circle cx="18" cy="11" r="5" fill="#ff2d7d"/>
        <path d="M8 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#ff2d7d" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Retention arrow */}
        <path d="M30 6 A10 10 0 1 1 20 2" stroke="#ff2d7d" strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.6"/>
        <polygon points="20,0 20,5 25,2.5" fill="#ff2d7d" fillOpacity="0.7"/>
      </svg>
    ),
    title: 'CRM & Retention', tag: 'PLAYER LIFECYCLE', color: '#ff2d7d',
    desc: 'AI-driven CRM segmentation — churn prediction models triggering personalised reload offers, VIP outreach, and push notifications at optimal engagement windows.',
    ai: 'AI: Churn prediction, send-time optimisation',
  },
];

// ── Skill Groups ──────────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: 'iGAMING', color: 'var(--accent-cyan)',
    skills: ['GGR Optimisation','RTP Management','Game Aggregation','Bonus Engine','Affiliate Mgmt','PAM/Back Office','KYC/AML','Player Retention','White-label B2C','Lobby Curation'],
  },
  {
    label: 'TECH & DEV', color: 'var(--accent-neon)',
    skills: ['MERN Stack','MongoDB','Express.js','React.js','Node.js','REST APIs','SQL','GA4 / GTM','BI Dashboards','Figma','Sketch'],
  },
  {
    label: 'AI & DATA', color: '#ff2d7d',
    skills: ['AI Prompt Engineering','ChatGPT / Claude','Midjourney','ML Churn Models','Predictive Bonusing','AI Personalisation','Behavioural Analytics','A/B Testing'],
  },
  {
    label: 'MARKETING', color: '#9b59b6',
    skills: ['Meta Campaigns','Telegram Vaping','Kick.com','TikTok','CRM Segmentation','SEO','Player Acquisition','Influencer ROI'],
  },
  {
    label: 'PRODUCT & AGILE', color: 'var(--accent-gold)',
    skills: ['Product Roadmap','Agile/Scrum','Sprint Planning','Jira','Trello','UAT','Stakeholder Mgmt','OKR Planning'],
  },
];

// ── useWindowWidth ────────────────────────────────────────────────────────────
const useVW = () => {
  const [vw, setVw] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setVw(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return vw;
};

// ─────────────────────────────────────────────────────────────────────────────
const AboutMe = () => {
  const vw = useVW();
  const isMobile = vw < 768;
  const isTablet = vw < 1024;

  return (
    <>
      {/* ══ 1. WHO I AM ════════════════════════════════════════════════════════ */}
      <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position:'absolute', top:'20%', right:'-10%', width:'500px', height:'500px', background:'radial-gradient(circle, rgba(0,228,255,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'10%', left:'-5%', width:'400px', height:'400px', background:'radial-gradient(circle, rgba(255,45,125,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container">
          <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '3.5rem' }}>
            <span className="tag">About Me</span>
            <h2 className="title">The Brain Behind <span className="gradient-text">the Brands</span></h2>
            <p className="subtitle" style={{ margin: '0 auto' }}>
              From product strategy to AI integration — building iGaming platforms that acquire, activate, and retain players at scale.
            </p>
          </div>

          <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2.5rem' : '4rem', alignItems:'center' }}>

            {/* Photo Column */}
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
              style={{ flex:'0 0 auto', display:'flex', justifyContent:'center' }}>
              <div style={{ position:'relative', width: isMobile ? '240px' : '300px', height: isMobile ? '340px' : '440px' }}>
                <div style={{ position:'absolute', inset:'-8px', borderRadius:'20px', background:'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))', opacity:0.3, filter:'blur(16px)' }} />
                <div style={{ position:'relative', width:'100%', height:'100%', borderRadius:'20px', overflow:'hidden', border:'2px solid rgba(0,228,255,0.3)', background:'linear-gradient(180deg, #c8d8e8, #e8eef5)' }}>
                  <img src={aboutImg} alt="Jaydip Parmar" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }} />
                </div>
                {/* Open to Work badge */}
                <div style={{ position:'absolute', bottom:'-14px', left:'50%', transform:'translateX(-50%)', background:'linear-gradient(90deg, #00ff88, #00e4ff)', color:'#000', padding:'6px 18px', borderRadius:'20px', fontWeight:700, fontSize:'0.75rem', whiteSpace:'nowrap', boxShadow:'0 0 20px rgba(0,255,136,0.4)' }}>
                  ✦ Open to Work
                </div>
              </div>
            </motion.div>

            {/* Bio Column */}
            <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}
              style={{ flex:1, textAlign: isMobile ? 'center' : 'left' }}>

              <h3 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight:800, marginBottom:'1.2rem' }}>
                Jaydip <span className="gradient-text">Parmar</span>
              </h3>

              <p style={{ color:'var(--text-secondary)', lineHeight:1.85, marginBottom:'1rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                I operate at the intersection of <strong style={{ color:'var(--text-primary)' }}>product strategy, technology, and data intelligence</strong> — managing 19+ live B2C casino platforms across 10+ global markets while integrating AI tooling to drive measurable GGR growth and player lifetime value.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.85, marginBottom:'1rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                My technical foundation in <strong style={{ color:'var(--accent-neon)' }}>MERN Stack (MongoDB, Express, React, Node)</strong> lets me collaborate deeply with engineering teams — reading APIs, reviewing schema designs, and shipping product decisions grounded in technical reality, not guesswork.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.85, marginBottom:'2rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                I actively apply <strong style={{ color:'#ff2d7d)' }}>AI across the iGaming product stack</strong> — from ML-driven churn prediction and predictive bonus engines to AI-generated marketing content and smart push notification timing — turning data signals into revenue at every player touchpoint.
              </p>

              {/* Info cards */}
              <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'0.8rem', marginBottom:'2rem' }}>
                {[
                  { icon:<Briefcase size={15}/>, label:'Role',       val:'Assoc. Product Manager'        },
                  { icon:<Mail size={15}/>,      label:'Email',      val:'jaydipparmar5940@gmail.com'    },
                  { icon:<Phone size={15}/>,     label:'Phone',      val:'+91 9106956610'                },
                  { icon:<MapPin size={15}/>,    label:'Location',   val:'Ahmedabad, India'              },
                  { icon:<Cpu size={15}/>,       label:'Stack',      val:'MERN + AI Tools', hl:'var(--accent-neon)' },
                  { icon:<CheckCircle2 size={15}/>, label:'Status',  val:'✦ Open to Work', hl:'var(--accent-neon)' },
                ].map(({ icon, label, val, hl }) => (
                  <div key={label} style={{ display:'flex', gap:'8px', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--accent-cyan)', marginTop:'2px', flexShrink:0 }}>{icon}</span>
                    <span style={{ fontSize:'0.85rem', color:'var(--text-secondary)' }}>
                      <strong style={{ color:'var(--text-primary)', fontWeight:600 }}>{label}:</strong>{' '}
                      <span style={{ color: hl || 'var(--text-secondary)', fontWeight: hl ? 700 : 400 }}>{val}</span>
                    </span>
                  </div>
                ))}
              </div>

              <a href={CV_URL} download={CV_NAME}
                style={{ display:'inline-flex', alignItems:'center', gap:'10px', background:'var(--accent-cyan)', color:'var(--bg-primary)', padding:'0.85rem 2rem', borderRadius:'10px', fontWeight:700, fontSize:'1rem', textDecoration:'none', boxShadow:'0 0 24px rgba(0,228,255,0.4)', transition:'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow='0 0 40px rgba(0,228,255,0.7)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow='0 0 24px rgba(0,228,255,0.4)'; e.currentTarget.style.transform='translateY(0)'; }}>
                <Download size={18} /> Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. AI IN IGAMING ═══════════════════════════════════════════════════ */}
      <section id="ai-igaming" className="section-padding" style={{ background:'var(--bg-secondary)', borderTop:'1px solid var(--glass-border)', position:'relative', overflow:'hidden' }}>
        {/* Background AI glow */}
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'600px', background:'radial-gradient(circle, rgba(255,45,125,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'10%', right:'5%', width:'300px', height:'300px', background:'radial-gradient(circle, rgba(0,228,255,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container">
          <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '3.5rem' }}>
            <span className="tag" style={{ background:'rgba(255,45,125,0.15)', color:'#ff2d7d', border:'1px solid rgba(255,45,125,0.3)' }}>AI Strategy</span>
            <h2 className="title">AI-Powered <span className="gradient-text">iGaming</span></h2>
            <p className="subtitle" style={{ margin:'0 auto' }}>
              Where machine intelligence meets player psychology — 8 high-impact AI applications I actively deploy across casino platforms to maximise GGR, retention, and player experience.
            </p>
          </div>

          {/* AI Impact Banner */}
          <div style={{ display:'flex', gap: isMobile ? '1rem' : '2rem', flexWrap:'wrap', justifyContent:'center', marginBottom: isMobile ? '2rem' : '3.5rem' }}>
            {[
              { val:'+55%', label:'Bonus ROI via AI Timing',      color:'#ffc700' },
              { val:'-28%', label:'Churn via ML Prediction',      color:'#00ff88' },
              { val:'+70%', label:'Push Open Rate',               color:'#00e4ff' },
              { val:'+40%', label:'Lobby CTR Personalisation',    color:'#ff2d7d' },
            ].map((m,i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                style={{ flex:'1 1 140px', minWidth:'130px', textAlign:'center', padding:'1.2rem', background:`${m.color}12`, border:`1px solid ${m.color}30`, borderRadius:'16px' }}>
                <div style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', fontWeight:900, color:m.color }}>{m.val}</div>
                <div style={{ fontSize:'0.78rem', color:'var(--text-secondary)', marginTop:'4px' }}>{m.label}</div>
              </motion.div>
            ))}
          </div>

          {/* AI Use-Case Cards */}
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap:'1.5rem' }}>
            {aiUseCases.map((ai, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                className="glass-card"
                style={{ padding: isMobile ? '1.4rem' : '1.8rem', borderTop:`3px solid ${ai.color}`, position:'relative', display:'flex', flexDirection:'column' }}>
                <div style={{ width:'50px', height:'50px', background:`${ai.color}18`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', color:ai.color, marginBottom:'1rem', border:`1px solid ${ai.color}30` }}>
                  {ai.icon}
                </div>
                <div style={{ fontSize:'0.68rem', color:ai.color, fontWeight:700, letterSpacing:'2px', marginBottom:'0.4rem' }}>{ai.tag}</div>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight:700, marginBottom:'0.8rem', lineHeight:1.3 }}>{ai.title}</h3>
                <p style={{ color:'var(--text-secondary)', lineHeight:1.7, fontSize:'0.85rem', flex:1 }}>{ai.desc}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:'4px', marginTop:'1.2rem', paddingTop:'1rem', borderTop:`1px solid ${ai.color}20` }}>
                  <span style={{ background:`${ai.color}22`, color:ai.color, padding:'4px 10px', borderRadius:'20px', fontSize:'0.72rem', fontWeight:700, display:'inline-block', width:'fit-content' }}>
                    📈 {ai.impact}
                  </span>
                  <span style={{ fontSize:'0.72rem', color:'var(--text-muted)', marginTop:'4px' }}>Applied: {ai.applies}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MERN + AI Tech note */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="glass-card" style={{ marginTop:'3rem', padding: isMobile ? '1.5rem' : '2.5rem', textAlign:'center', background:'rgba(0,228,255,0.04)', borderColor:'rgba(0,228,255,0.15)' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'1rem', flexWrap:'wrap' }}>
              <Cpu size={24} style={{ color:'var(--accent-neon)' }} />
              <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.4rem', margin:0, fontWeight:700 }}>
                Technical Edge: <span className="gradient-text">MERN Stack × AI Tooling</span>
              </h3>
            </div>
            <p style={{ color:'var(--text-secondary)', lineHeight:1.8, maxWidth:'700px', margin:'0 auto', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              My MERN stack background means I don't just <em>spec</em> features — I understand the full technical pipeline from MongoDB data schemas to React component architecture and Node API design. Combined with active AI tooling (ChatGPT, Claude, ML libraries), I bridge the gap between product strategy and engineering execution — shipping faster and smarter.
            </p>
            <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap', justifyContent:'center', marginTop:'1.5rem' }}>
              {['MongoDB','Express.js','React.js','Node.js','REST APIs','ChatGPT','Claude AI','Midjourney','Python ML Basics','Prompt Engineering'].map(t => (
                <span key={t} style={{ padding:'5px 14px', borderRadius:'20px', fontSize:'0.8rem', border:'1px solid rgba(0,255,136,0.3)', background:'rgba(0,255,136,0.08)', color:'var(--accent-neon)', fontWeight:500 }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 3. MULTI-CHANNEL MARKETING ═════════════════════════════════════════ */}
      <section className="section-padding" style={{ borderTop:'1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '3.5rem' }}>
            <span className="tag">Marketing & Growth</span>
            <h2 className="title">Multi-Channel Casino <span className="gradient-text">Marketing</span></h2>
            <p className="subtitle" style={{ margin:'0 auto' }}>Running AI-augmented player acquisition across paid social, community platforms, and influencer networks globally.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap:'1.5rem' }}>
            {marketingChannels.map((ch, i) => (
              <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                className="glass-card" style={{ padding: isMobile ? '1.4rem' : '2rem', borderTop:`3px solid ${ch.color}` }}>
                <div style={{ width:'50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'0.8rem' }}>
                  {ch.icon}
                </div>
                <div style={{ fontSize:'0.7rem', color:ch.color, fontWeight:700, letterSpacing:'2px', marginBottom:'0.4rem' }}>{ch.tag}</div>
                <h3 style={{ fontSize:'1.15rem', fontWeight:700, marginBottom:'0.8rem', color:ch.color }}>{ch.title}</h3>
                <p style={{ color:'var(--text-secondary)', lineHeight:1.7, fontSize:'0.9rem', marginBottom:'1rem' }}>{ch.desc}</p>
                <span style={{ background:`${ch.color}15`, color:ch.color, padding:'4px 10px', borderRadius:'20px', fontSize:'0.7rem', fontWeight:600 }}>
                  🤖 {ch.ai}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. FULL SKILL STACK ════════════════════════════════════════════════ */}
      <section className="section-padding" style={{ background:'var(--bg-secondary)', borderTop:'1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '3.5rem' }}>
            <span className="tag">Skills</span>
            <h2 className="title">Full <span className="gradient-text">Skill Stack</span></h2>
            <p className="subtitle" style={{ margin:'0 auto' }}>iGaming product expertise × MERN development × AI tooling — a rare full-stack PM skill set.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(5,1fr)', gap:'2rem' }}>
            {skillGroups.map((group, gi) => (
              <div key={gi}>
                <div style={{ fontSize:'0.7rem', color:group.color, fontWeight:700, letterSpacing:'2px', marginBottom:'1rem', borderBottom:`1px solid ${group.color}40`, paddingBottom:'0.5rem' }}>
                  {group.label}
                </div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                  {group.skills.map(s => (
                    <span key={s} style={{ padding:'5px 12px', borderRadius:'20px', fontSize:'0.8rem', border:`1px solid ${group.color}35`, background:`${group.color}0d`, color:'var(--text-primary)', fontWeight:500 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WORK HISTORY ════════════════════════════════════════════════════ */}
      <section className="section-padding" style={{ borderTop:'1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '3.5rem' }}>
            <span className="tag">Experience</span>
            <h2 className="title">Work <span className="gradient-text">History</span></h2>
          </div>
          <div style={{ position:'relative' }}>
            {!isMobile && (
              <div style={{ position:'absolute', left:'16px', top:'8px', bottom:'8px', width:'2px', background:'linear-gradient(to bottom, var(--accent-cyan), var(--accent-pink))', borderRadius:'2px' }} />
            )}
            <div style={{ display:'flex', flexDirection:'column', gap: isMobile ? '2rem' : '3rem', paddingLeft: isMobile ? 0 : '52px' }}>
              {workHistory.map((job, ji) => (
                <motion.div key={ji} initial={{ opacity:0, x: isMobile ? 0 : -20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:ji*0.15 }} style={{ position:'relative' }}>
                  {!isMobile && (
                    <div style={{ position:'absolute', left:'-44px', top:'4px', width:'20px', height:'20px', borderRadius:'50%', background:job.color, boxShadow:`0 0 12px ${job.color}90`, border:'3px solid var(--bg-primary)' }} />
                  )}
                  <div style={{ marginBottom:'0.5rem' }}>
                    <span style={{ fontSize:'0.75rem', color:job.color, fontWeight:700, letterSpacing:'1px', textTransform:'uppercase' }}>{job.period}</span>
                  </div>
                  <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight:800, marginBottom:'0.3rem' }}>{job.title}</h3>
                  <div style={{ color:job.color, fontWeight:600, marginBottom:'0.2rem', fontSize:'1rem' }}>{job.company}</div>
                  <div style={{ color:'var(--text-muted)', fontSize:'0.82rem', fontStyle:'italic', marginBottom:'0.7rem' }}>{job.sub}</div>
                  {/* AI Tag */}
                  <span style={{ display:'inline-block', background:'rgba(255,45,125,0.12)', color:'#ff2d7d', border:'1px solid rgba(255,45,125,0.25)', padding:'3px 10px', borderRadius:'20px', fontSize:'0.72rem', fontWeight:600, marginBottom:'1rem' }}>
                    🤖 {job.aiTag}
                  </span>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.6rem' }}>
                    {job.bullets.map((b, bi) => (
                      <li key={bi} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                        <span style={{ color:job.color, flexShrink:0, fontSize:'0.7rem', marginTop:'5px' }}>▸</span>
                        <span style={{ color:'var(--text-secondary)', lineHeight:1.75, fontSize: isMobile ? '0.88rem' : '0.95rem' }} dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
