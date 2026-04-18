import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Target, Zap, Users, ShieldCheck, Gamepad, Globe, TrendingUp } from 'lucide-react';

const expertiseData = [
  {
    icon: <BarChart3 size={32} />,
    title: "GGR & RTP Optimisation",
    desc: "Real-time GGR dashboards, RTP monitoring & alerts, anomaly detection, aggregator RTP requests, hit frequency analysis, and player margin optimisation across 20+ brands.",
    color: "var(--accent-cyan)"
  },
  {
    icon: <Gamepad size={32} />,
    title: "Game Aggregation & Lobby",
    desc: "Single API integration, provider onboarding, lobby management, game tagging, volatility/RTP metadata management, and cross-provider free spins configuration.",
    color: "var(--accent-pink)"
  },
  {
    icon: <Zap size={32} />,
    title: "Bonus Engine Architecture",
    desc: "Welcome packages, cross-provider free spins, cashback/reload bonuses, wagering requirement logic, promo calendars, and bonus abuse detection mechanisms.",
    color: "var(--accent-gold)"
  },
  {
    icon: <Target size={32} />,
    title: "Affiliate Engine",
    desc: "CPA / RevShare / Hybrid models, sub-affiliate tracking, commission builder, real-time analytics, and fraud detection for global affiliate partnerships.",
    color: "var(--accent-neon)"
  },
  {
    icon: <Users size={32} />,
    title: "PAM & Back Office",
    desc: "Player Account Management, KYC/AML workflows, CRM segmentation, CMS management, loyalty programs, and payment gateway integration.",
    color: "var(--accent-cyan)"
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Casino Marketing",
    desc: "Meta campaign capping, Telegram community vaping, Kick.com influencer campaigns, player acquisition funnels, and retention campaigns across geo-targeted markets.",
    color: "var(--accent-pink)"
  },
  {
    icon: <Globe size={32} />,
    title: "Platform Strategy",
    desc: "White-label & turnkey B2B/B2C products, product roadmap execution, sprint planning, A/B testing, GA4/GTM/SQL analytics for multi-market scalability.",
    color: "var(--accent-gold)"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Compliance & KYC/AML",
    desc: "Implementing robust KYC, AML, and responsible gaming frameworks. Managed back-office workflows aligned with regional regulatory environments across BD, ZA, CA, TR & more.",
    color: "var(--accent-neon)"
  }
];


const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="tag">Core Competencies</span>
          <h2 className="title">Expertise <span className="gradient-text">& Tech Stack</span></h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>Bridging the gap between engaging player experiences and aggressive business growth metrics.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {expertiseData.map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="glass-card" style={{ padding: '2.5rem' }}>
              <div 
                style={{ 
                  color: item.color, 
                  background: `${item.color}15`, 
                  width: '64px', height: '64px', 
                  borderRadius: '16px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: `1px solid ${item.color}30`
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 700 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
