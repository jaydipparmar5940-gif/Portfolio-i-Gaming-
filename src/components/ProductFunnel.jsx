import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Deep iGaming Player Journey Funnel Data ───────────────────────────────────
const funnelStages = [
  {
    id: 'acquisition',
    name: 'Acquisition',
    label: 'STAGE 01',
    color: '#00e4ff',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    tagline: 'Turn ad spend into high-LTV casino players',
    kpis: [
      { label: 'CPA Target',       val: '$8–15',    note: 'Per qualified FTD' },
      { label: 'CTR Benchmark',    val: '3.2%',     note: 'Meta casino creatives' },
      { label: 'Reg → FTD Conv',   val: '28–35%',   note: 'Post-optimisation' },
      { label: 'Traffic Quality',  val: '70%+',     note: 'Organic + influencer' },
    ],
    channels: [
      { name: 'Meta Ads',      detail: 'Lookalike audiences (1–3%), Advantage+ campaigns, geo-split A/B creatives per market (BD, ZA, CA)' },
      { name: 'Kick.com',      detail: 'Streamer CPA deals — referral code tracking, session analytics, deposit conversion per creator' },
      { name: 'Telegram SEO',  detail: 'Channel vaping strategy — organic viral reach, referral chain mechanics, localised content per geo' },
      { name: 'TikTok Clips',  detail: 'Big win short-form clips, bonus reveal hooks, geo-targeted brand push for Gen Z player segments' },
      { name: 'Affiliate Net', detail: 'CPA/RevShare hybrid models, FTL fraud filters, multi-tier sub-affiliate commission tracking' },
    ],
    aiLayer: 'ML lookalike modelling predicts high-LTV player profiles before spend. AI creative scoring ranks ad variants by predicted CTR and FTD probability. Automated budget reallocation shifts spend to best-performing geo/channel in real-time.',
    tools: ['Meta Ads Manager', 'GA4', 'GTM', 'Voluum', 'Kick Creator Dashboard', 'Postback Tracking'],
    benchmark: '+43% FTD volume after AI lookalike model implementation across 3 markets',
  },
  {
    id: 'activation',
    name: 'Activation (FTD)',
    label: 'STAGE 02',
    color: '#ffc700',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    tagline: 'Remove friction — convert registrations into real deposits fast',
    kpis: [
      { label: 'Time-to-FTD',     val: '<4 min',   note: 'Registration to deposit' },
      { label: 'FTD Rate',        val: '32–38%',   note: 'Reg → first deposit' },
      { label: 'Welcome Claim %', val: '68%+',     note: 'Bonus uptake post-FTD' },
      { label: 'Payment SR',      val: '94%+',     note: 'Successful first txn' },
    ],
    channels: [
      { name: 'UX Flow Audit',     detail: 'Heatmap + session recording analysis — identifying drop-off at KYC, payment, and game selection steps' },
      { name: 'Payment Gateway',   detail: 'M-Pesa, PromptPay, UPI, Crypto, Card — localised PSP routing per market to maximise success rate' },
      { name: 'Welcome Bonus',     detail: 'Multi-step welcome package — match bonus + free spins + cashback ladder, wagering-optimised for retention' },
      { name: 'Onboarding Push',   detail: 'Triggered SMS/push at T+0, T+2h, T+24h with game recommendation and bonus reminder sequences' },
      { name: 'KYC Optimisation',  detail: 'Progressive KYC flow — defer full verification to first withdrawal, reducing pre-FTD friction by 40%' },
    ],
    aiLayer: 'AI predicts which new registrants are most likely to FTD within 2 hours — enabling personalised nudge notifications with the right incentive amount at the optimal moment. Smart bonus assignment matches welcome offer type to player profile (casual vs. high-roller).',
    tools: ['Mixpanel', 'Hotjar', 'Braze CRM', 'Stripe / PSP Stack', 'Optimizely A/B', 'Twilio SMS'],
    benchmark: 'Registration-to-FTD rate improved from 22% → 36% after UX funnel redesign + progressive KYC',
  },
  {
    id: 'monetization',
    name: 'Monetization (GGR)',
    label: 'STAGE 03',
    color: '#ff2d7d',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    tagline: 'Maximise GGR margin while keeping players engaged',
    kpis: [
      { label: 'ARPU',          val: '$45–90',   note: 'Average revenue/player' },
      { label: 'GGR Margin',    val: '4.5–6%',   note: 'House edge after bonuses' },
      { label: 'Avg Session',   val: '38 min',   note: 'Per engagement window' },
      { label: 'Game Mix Ratio',val: '60/40',    note: 'Slots vs. Live Casino' },
    ],
    channels: [
      { name: 'Lobby Curation',  detail: 'AI-ranked game positioning — high-RTP games for new players, high-margin live tables for VIP segments' },
      { name: 'Live Casino Push', detail: 'Lightning Roulette, Crazy Time, Baccarat live streams — highest margin products promoted via lobby banners' },
      { name: 'Crash Games',     detail: 'Dynamic crash game events (Aviator, JetX) — timed tournaments driving session extension and ARPU lift' },
      { name: 'Bonus Strategy',  detail: 'Deposit match → cashback → reload sequence — engineered wagering requirements to maximise GGR extraction' },
      { name: 'RTP Management',  detail: 'Provider-level RTP requests, hit frequency analysis per game category, payout anomaly detection dashboards' },
    ],
    aiLayer: 'Real-time GGR monitoring flags payout anomalies within 60 seconds. AI lobby engine repositions games based on live margin performance. Dynamic bonus budgeting — ML models auto-adjust bonus exposure based on current GGR trajectory vs. target.',
    tools: ['Custom BI Dashboard', 'GA4 Funnel Analysis', 'PAM Back-Office', 'Aggregator CMS', 'Google Looker Studio'],
    benchmark: 'ARPU increased 31% through AI-driven lobby optimisation and live casino cross-sell campaigns',
  },
  {
    id: 'retention',
    name: 'Retention (LTV)',
    label: 'STAGE 04',
    color: '#00ff88',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
    ),
    tagline: 'Extend player lifetime value through lifecycle intelligence',
    kpis: [
      { label: 'Day-7 Retention',  val: '38%',      note: 'Return visit rate' },
      { label: 'Day-30 Retention', val: '22%',      note: 'Monthly retention' },
      { label: 'Churn Prediction', val: '85%+ acc', note: 'ML model accuracy' },
      { label: 'VIP Uplift',       val: '4.8×',     note: 'LTV vs. non-VIP' },
    ],
    channels: [
      { name: 'CRM Lifecycle',     detail: 'Segmented journey automation — Day-1, Day-7, Day-30 trigger sequences per player cohort and deposit tier' },
      { name: 'VIP Programme',     detail: 'Multi-tier VIP (Bronze → Platinum → Elite) — cashback %, reload limits, dedicated host, exclusive event invites' },
      { name: 'Churn Intervention',detail: 'ML churn model at Day-4 inactivity triggers personalised reactivation: free spins, cashback, VIP upgrade offer' },
      { name: 'Reload Bonuses',    detail: 'Personalised reload offer cadence — AI determines frequency, amount, and timing based on individual play patterns' },
      { name: 'Responsible Gaming',detail: 'Behavioural AI flags problem gambling signals — deposit spikes, session length anomalies — auto-routing to RG tools' },
    ],
    aiLayer: 'Gradient boosting churn model predicts 7-day and 30-day churn per player with 85%+ accuracy. AI determines optimal reactivation incentive per segment — avoiding blanket overspend. Automated VIP scoring triggers tier upgrades at the exact engagement peak.',
    tools: ['Braze / CleverTap', 'ML Churn Model (Python)', 'Segment CDP', 'Intercom', 'Custom VIP Dashboard'],
    benchmark: 'Day-30 retention improved from 14% → 22% after ML churn intervention and personalised reload sequences',
  },
  {
    id: 'reactivation',
    name: 'Re-activation',
    label: 'STAGE 05',
    color: '#9b59b6',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
      </svg>
    ),
    tagline: 'Win back dormant players with precision-targeted campaigns',
    kpis: [
      { label: 'Win-back Rate',    val: '12–18%',   note: 'Dormant → active' },
      { label: 'Reactivation CPA', val: '$4–8',     note: '70% cheaper than new' },
      { label: 'Win-back ARPU',    val: '$52 avg',  note: '20% above baseline' },
      { label: 'Campaign ROI',     val: '3.2×',     note: 'Spend to GGR ratio' },
    ],
    channels: [
      { name: 'AI Win-back Seq',   detail: 'Segmented dormant campaigns: Day-7, Day-14, Day-30, Day-60 reactivation sequences with personalised offer escalation' },
      { name: 'Lapsed Bonus',      detail: 'Personalised free spins + deposit match ladder — offer value increases with dormancy depth to maximise win-back ROI' },
      { name: 'SMS / WhatsApp',    detail: 'High-open rate direct channels for reactivation — personalised subject line using player name + favourite game category' },
      { name: 'Loss Aversion UX',  detail: '"Your unclaimed cashback expires in 24h" — urgency-driven messaging rooted in behavioural economics' },
      { name: 'Streamer Retarget', detail: 'Big win Kick.com clips retargeted to lapsed segment via Meta — social proof triggers reactivation curiosity' },
    ],
    aiLayer: 'AI classifies dormant players into 4 reactivation cohorts by LTV potential and churn reason. Each cohort receives a different reactivation path — high-value lapsed players get VIP host outreach; low-value get automated email sequences with minimum bonus cost.',
    tools: ['Meta Retargeting', 'CleverTap', 'Twilio WhatsApp', 'PostHog Analytics', 'ML Cohort Classifier'],
    benchmark: 'Win-back campaign ROI of 3.2× achieved using ML cohort segmentation vs. 1.4× with blanket campaigns',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const ProductFunnel = () => {
  const [activeStage, setActiveStage] = useState(funnelStages[0].id);
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = vw < 768;
  const isTablet = vw < 1024;
  const data = funnelStages.find(s => s.id === activeStage);

  return (
    <section id="funnel" className="section-padding" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{ position:'absolute', top:'30%', left:'50%', transform:'translate(-50%,-50%)', width:'700px', height:'500px', background:`radial-gradient(ellipse, ${data.color}08 0%, transparent 70%)`, pointerEvents:'none', transition:'background 0.4s ease' }} />

      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '3.5rem' }}>
          <span className="tag">Product Philosophy</span>
          <h2 className="title">iGaming Player <span className="gradient-text">Journey Funnel</span></h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>
            A full-funnel iGaming PM framework — from first ad impression to long-term player LTV — engineered with AI precision at every stage.
          </p>
        </div>

        {/* Stage selector — mobile: horizontal pills, desktop: funnel bars */}
        {isMobile ? (
          <div style={{ display:'flex', gap:'8px', overflowX:'auto', paddingBottom:'10px', paddingTop:'2px', scrollbarWidth:'none', msOverflowStyle:'none', WebkitOverflowScrolling:'touch', marginBottom:'1.5rem', scrollSnapType:'x mandatory' }}>
            {funnelStages.map(stage => {
              const isActive = activeStage === stage.id;
              return (
                <motion.button key={stage.id} onClick={() => setActiveStage(stage.id)} whileTap={{ scale:0.95 }}
                  style={{ flexShrink:0, scrollSnapAlign:'start', padding:'0.45rem 0.85rem', background: isActive ? stage.color : 'var(--glass-bg)', color: isActive ? '#000' : 'var(--text-primary)', border:`1.5px solid ${isActive ? stage.color : 'var(--glass-border)'}`, borderRadius:'30px', cursor:'pointer', fontWeight: isActive ? 700 : 500, fontSize:'0.75rem', whiteSpace:'nowrap', transition:'all 0.25s ease', fontFamily:'inherit' }}>
                  {stage.name}
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div style={{ display:'flex', gap:'10px', justifyContent:'center', marginBottom:'3rem', flexWrap:'wrap' }}>
            {funnelStages.map((stage, i) => {
              const isActive = activeStage === stage.id;
              const w = `${100 - i * 8}%`;
              return (
                <motion.button key={stage.id} onClick={() => setActiveStage(stage.id)} whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                  style={{ width: isTablet ? 'auto' : w, maxWidth: isTablet ? 'none' : '100%', padding: isTablet ? '0.7rem 1.2rem' : '1rem 1.5rem', background: isActive ? stage.color : 'var(--glass-bg)', color: isActive ? '#000' : 'var(--text-primary)', border:`1.5px solid ${isActive ? stage.color : 'var(--glass-border)'}`, borderRadius:'10px', cursor:'pointer', fontWeight: isActive ? 700 : 500, fontSize: isTablet ? '0.85rem' : '0.95rem', textAlign:'center', transition:'all 0.3s ease', display:'flex', alignItems:'center', justifyContent: isTablet ? 'center' : 'space-between', gap:'10px', fontFamily:'inherit' }}>
                  <span style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                    <span style={{ opacity: isActive ? 1 : 0.6, color: isActive ? '#000' : stage.color }}>{stage.icon}</span>
                    {stage.name}
                  </span>
                  {!isTablet && <span style={{ fontSize:'0.72rem', opacity:0.7, fontWeight:500 }}>{stage.label}</span>}
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div key={activeStage}
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.3 }}
            className="glass-card"
            style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderTop:`3px solid ${data.color}`, position:'relative' }}>

            {/* Stage header */}
            <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent:'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap:'1rem', marginBottom:'2rem' }}>
              <div>
                <div style={{ fontSize:'0.7rem', color:data.color, fontWeight:700, letterSpacing:'3px', marginBottom:'0.4rem' }}>{data.label} · PLAYER JOURNEY</div>
                <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight:800, color:data.color, marginBottom:'0.3rem' }}>{data.name}</h3>
                <p style={{ color:'var(--text-secondary)', fontSize: isMobile ? '0.9rem' : '1rem', fontStyle:'italic' }}>{data.tagline}</p>
              </div>
              {/* Real benchmark badge */}
              <div style={{ padding:'0.8rem 1.2rem', background:`${data.color}15`, border:`1px solid ${data.color}40`, borderRadius:'12px', flexShrink:0, maxWidth: isMobile ? '100%' : '320px' }}>
                <div style={{ fontSize:'0.65rem', color:data.color, fontWeight:700, letterSpacing:'2px', marginBottom:'4px' }}>📈 REAL RESULT</div>
                <div style={{ fontSize:'0.82rem', color:'var(--text-primary)', lineHeight:1.5 }}>{data.benchmark}</div>
              </div>
            </div>

            {/* KPIs row */}
            <div style={{ display:'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap:'1rem', marginBottom:'2rem' }}>
              {data.kpis.map((kpi, i) => (
                <div key={i} style={{ textAlign:'center', padding:'1rem', background:`${data.color}0a`, border:`1px solid ${data.color}25`, borderRadius:'12px' }}>
                  <div style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight:900, color:data.color }}>{kpi.val}</div>
                  <div style={{ fontSize:'0.75rem', fontWeight:700, color:'var(--text-primary)', marginTop:'4px' }}>{kpi.label}</div>
                  <div style={{ fontSize:'0.7rem', color:'var(--text-muted)', marginTop:'2px' }}>{kpi.note}</div>
                </div>
              ))}
            </div>

            {/* 2-col: channels + AI layer */}
            <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr', gap: isMobile ? '1.5rem' : '2.5rem' }}>

              {/* Tactics / Channels */}
              <div>
                <div style={{ fontSize:'0.7rem', color:'var(--text-secondary)', fontWeight:700, letterSpacing:'2px', marginBottom:'1rem', textTransform:'uppercase' }}>Channels & Tactics</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.8rem' }}>
                  {data.channels.map((ch, i) => (
                    <div key={i} style={{ display:'flex', gap:'12px', alignItems:'flex-start' }}>
                      <span style={{ flexShrink:0, marginTop:'4px', width:'6px', height:'6px', borderRadius:'50%', background:data.color, display:'inline-block' }} />
                      <div>
                        <span style={{ fontWeight:700, color:'var(--text-primary)', fontSize:'0.9rem' }}>{ch.name} — </span>
                        <span style={{ color:'var(--text-secondary)', fontSize:'0.88rem', lineHeight:1.6 }}>{ch.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Layer + Tools */}
              <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>
                <div style={{ padding:'1.2rem', background:'rgba(255,45,125,0.06)', border:'1px solid rgba(255,45,125,0.2)', borderRadius:'12px' }}>
                  <div style={{ fontSize:'0.7rem', color:'#ff2d7d', fontWeight:700, letterSpacing:'2px', marginBottom:'0.7rem' }}>🤖 AI INTELLIGENCE LAYER</div>
                  <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.7, margin:0 }}>{data.aiLayer}</p>
                </div>
                <div style={{ padding:'1.2rem', background:`${data.color}08`, border:`1px solid ${data.color}20`, borderRadius:'12px' }}>
                  <div style={{ fontSize:'0.7rem', color:data.color, fontWeight:700, letterSpacing:'2px', marginBottom:'0.7rem' }}>🛠 TOOLS & STACK</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                    {data.tools.map(t => (
                      <span key={t} style={{ padding:'3px 10px', borderRadius:'20px', fontSize:'0.75rem', border:`1px solid ${data.color}30`, background:`${data.color}10`, color:'var(--text-primary)', fontWeight:500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Funnel flow indicator */}
        {!isMobile && (
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'6px', marginTop:'2rem', flexWrap:'wrap' }}>
            {funnelStages.map((stage, i) => (
              <React.Fragment key={stage.id}>
                <button onClick={() => setActiveStage(stage.id)}
                  style={{ padding:'4px 12px', borderRadius:'20px', fontSize:'0.72rem', fontWeight: activeStage===stage.id ? 700 : 400, background: activeStage===stage.id ? stage.color : 'transparent', color: activeStage===stage.id ? '#000' : stage.color, border:`1px solid ${stage.color}60`, cursor:'pointer', transition:'all 0.2s', fontFamily:'inherit' }}>
                  {stage.label}
                </button>
                {i < funnelStages.length - 1 && <span style={{ color:'var(--glass-border)', fontSize:'0.8rem' }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFunnel;
