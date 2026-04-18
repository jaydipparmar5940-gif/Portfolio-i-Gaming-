import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Activity, TrendingUp, Users, Globe, Brain, Zap, Shield, BarChart3 } from 'lucide-react';

// ── Industry Research Context (2024–2026 public iGaming data) ───────────────
// SA: R75B (~$4.3B) GGR | Online = 60% of GGR | D30 retention avg 15–25%
// Retaining player = 5–25× cheaper | Retention +5% → profit +95%
// Brazil 2025: GGR ~R$37B | Pix dominant | 12% GGR tax | R$30M licence fee
// LatAm: $6–7B market 2025 | Brazil 100M+ players | Crypto: 60M regional users
// 2026 Trends: AI priority = 8.41/10 | 56% operators rank AI top-3 priority
// Cybersecurity: phishing +180% since 2023 | Brand > bonus as LTV driver
// iGaming KPIs: NGR = GGR – bonuses – fees | ARPU = NGR / active players
// Sportsbook: in-play = 70%+ of handle | margin 5–8% pre-live, 3–5% live
// Crash games + Mines + Plinko — fast-game category dominates mobile sessions
// ─────────────────────────────────────────────────────────────────────────────

const cases = [
  {
    id: 1,
    title: 'Dalal Casino — Bangladesh B2C Platform Launch',
    tag: 'Brand Launch',
    tagColor: '#00e4ff',
    market: '🇧🇩 Bangladesh',
    summary: 'Launched dalal.live — a full-stack B2C casino platform for the Bangladesh market with BDT-native payments, localised lobby, Telegram community growth, and an affiliate engine targeting regional traffic sources.',
    industry: 'Operating in Bangladesh\'s grey-market environment where mobile banking (bKash/Nagad) is the primary payment rail and Telegram is the dominant player acquisition channel — reaching millions of active offshore participants in an unregulated landscape.',
    metrics: [
      { label: 'Market',           value: '🇧🇩 BD',    color: '#00e4ff', icon: <Globe size={18}/> },
      { label: 'Currency',         value: 'BDT',       color: '#ffc700', icon: <TrendingUp size={18}/> },
      { label: 'FTD Rate Achieved',value: '34%',       color: '#00ff88', icon: <Activity size={18}/> },
      { label: 'Telegram Reach',   value: '15K+',      color: '#ff2d7d', icon: <Users size={18}/> },
    ],
    challenge: {
      text: 'Bangladesh represents one of iGaming\'s most complex grey markets — gambling is prohibited under the Public Gambling Act but millions of players access offshore platforms via mobile banking agents. The challenge was to build a compliant-by-design platform with BDT currency support, navigate payment friction (no card processing), establish trust in a market dominated by word-of-mouth and Telegram communities, and configure an affiliate structure rewarding local traffic operators.',
      bullets: [
        'No card/bank transfer rails — 100% reliance on mobile money (bKash, Nagad, Rocket)',
        'Zero brand recognition in a market with 30+ established offshore competitors',
        'KYC workflow needed to balance regulatory risk with minimal deposit friction',
        'Affiliate fraud risk high — Telegram-based referral chains difficult to verify',
      ],
    },
    approach: {
      text: 'Built a mobile-first registration flow optimised for Bangladesh\'s highest-converting device segment (Android, <300ms first-byte load). Integrated bKash and Nagad as primary payment methods via local PSP, reducing payment failure rate to under 6%. Curated a lobby weighted 60% toward slots (local preference) with Aviator and JetX crash games as primary engagement hooks — aligning with industry data showing crash game\'s dominance for short mobile sessions.',
      bullets: [
        'Progressive KYC — full verification deferred to first withdrawal, reducing pre-FTD drop-off by ~38%',
        'Telegram community strategy: daily bonus announcements, big win clips, affiliate referral chain mechanics',
        'Welcome package: 100% match + 50 free spins + Aviator cashback — wagering engineered for 5.2% GGR margin',
        'Affiliate: CPA ৳800 per FTD + 15% RevShare hybrid — Telegram channel operator incentives',
        'AI-assisted CRM: Day-0, Day-2, Day-7 push sequences with personalised game recommendations',
      ],
    },
    outcome: {
      text: 'Dalal.live achieved a 34% registration-to-FTD conversion rate — exceeding the industry benchmark of 28–35% — driven by frictionless mobile payment integration and a progressive KYC design. The Telegram community scaled to 15,000+ members within the first quarter, establishing Dalal as a trusted brand in a word-of-mouth-driven market.',
      metrics: [
        { k: 'FTD Conversion', v: '34%', note: 'vs. 28–35% industry avg' },
        { k: 'Payment Success Rate', v: '94.2%', note: 'bKash/Nagad rails' },
        { k: 'Day-30 Retention', v: '21%', note: 'vs. 15% market avg' },
        { k: 'Telegram Community', v: '15K+', note: 'Q1 organic growth' },
      ],
      aiNote: 'ML churn model triggered personalised reactivation at Day-4 inactivity — improving 30-day retention from initial 14% to 21%.',
    },
    tools: ['White-label CMS', 'bKash/Nagad PSP', 'Telegram Bot', 'GA4', 'Custom Affiliate Dashboard', 'Jira Agile'],
  },
  {
    id: 2,
    title: 'Pesa Casino — South Africa Market Expansion',
    tag: 'Market Expansion',
    tagColor: '#ffc700',
    market: '🇿🇦 South Africa',
    summary: 'Delivered pesacasino.co.za targeting the ZAR market — South Africa\'s iGaming sector recorded R75B GGR in 2024, with online betting driving 60% of total revenue. Built ZAR-native payment rails, localised lobby, and CRM-driven retention campaigns to capture this high-value market.',
    industry: 'South Africa is Africa\'s largest and most mature iGaming market. With gambling turnover exceeding R1.5 trillion and online betting accounting for 60% of GGR (R75B in FY2024/25), SA represents the continent\'s premier digital gaming opportunity — driven by high smartphone penetration and a dominant sports-betting and live casino culture.',
    metrics: [
      { label: 'Market GGR (SA)',   value: '$4.3B',    color: '#ffc700', icon: <TrendingUp size={18}/> },
      { label: 'Retention Lift',    value: '+30%',     color: '#00ff88', icon: <Activity size={18}/> },
      { label: 'FTD Conv. Rate',    value: '31%',      color: '#00e4ff', icon: <Users size={18}/> },
      { label: 'Payment SR',        value: '96.1%',    color: '#ff2d7d', icon: <BarChart3 size={18}/> },
    ],
    challenge: {
      text: 'South Africa\'s iGaming players are sophisticated — they compare platforms on payment speed (slow withdrawals are the #1 churn driver), RTP transparency, and game variety. With Betway, Hollywood Bets, and 20+ offshore operators competing, Pesa Casino needed a differentiated positioning around payment speed, a localised live casino experience, and data-driven retention rather than bonus-bloat acquisition.',
      bullets: [
        'ZAR payment stack — EFT, Ozow, PayFast, crypto required for player segment coverage',
        '60% of SA iGaming traffic is mobile — mobile-first UX non-negotiable',
        'SA players skew heavily toward live casino and sports — slot-first lobbies underperform',
        'Withdrawal speed identified as #1 churn driver — target: <4 hour processing',
        'Day-30 retention industry average: 15–25% — needed best-in-class 30%+ target',
      ],
    },
    approach: {
      text: 'Repositioned the lobby with live casino as the hero product — Lightning Roulette, Crazy Time, and Baccarat variants at prime placement, aligned with SA player behaviour data showing game-show live titles driving +50% session duration vs. standard live tables. Configured ZAR withdrawal processing via Ozow instant EFT to achieve sub-4-hour withdrawal cycle. Built gamified loyalty programme with cashback milestones tied to live casino engagement.',
      bullets: [
        'Live casino first: Crazy Time, Lightning Roulette, Baccarat — highest-margin, highest-engagement category',
        'ZAR instant EFT via Ozow — withdrawal processing from 24H → under 4H, reducing payment-related churn',
        'VIP cashback ladder (3%→7%) tied specifically to live casino sessions — incentivising high-margin play',
        'CRM segmentation: 6 player cohorts — High Roller, Regular, Casual, At-Risk, Dormant, Lapsed',
        'AI churn model: Day-5 inactivity trigger → personalised reload offer matched to player\'s top game category',
      ],
    },
    outcome: {
      text: 'Pesa Casino achieved a 30% uplift in 30-day retention — reaching 29% vs. the SA market average of ~22% — by combining fast withdrawal processing, a live casino-first lobby, and CRM segmentation targeting the right player at the right moment. The AI-assisted reactivation sequences delivered 3.1× ROI vs. blanket bonus campaigns.',
      metrics: [
        { k: 'D30 Retention', v: '29%', note: 'vs. ~22% market avg (SA)' },
        { k: 'Withdrawal Speed', v: '<4H', note: 'from 24H baseline' },
        { k: 'Live Casino GGR Share', v: '43%', note: '↑ from 28% pre-optimisation' },
        { k: 'CRM Campaign ROI', v: '3.1×', note: 'vs. 1.2× blanket campaigns' },
      ],
      aiNote: 'AI cohort-based CRM delivered personalised reload offers to 6 distinct player segments — reducing bonus spend per reactivation by 34% while improving win-back rate from 10% to 17%.',
    },
    tools: ['Ozow / PayFast / EFT', 'Braze CRM', 'Looker Studio BI', 'GA4', 'ML Churn Segmentation', 'VIP Dashboard'],
  },
  {
    id: 3,
    title: '20+ Brand Portfolio — Multi-Market Casino Scale',
    tag: 'Portfolio Management',
    tagColor: '#00ff88',
    market: '🌍 10+ Global Markets',
    summary: 'Owned the full product roadmap for 20+ live B2C casino brands simultaneously — Biglory, Jackpot Aruba, Fox Play, Zyroz, Play888, Luxwin, and more — across Bangladesh, South Africa, Canada, Turkey, Nepal, Mongolia, Denmark & Global.',
    industry: 'Managing a multi-brand casino portfolio at scale requires a product operating model that balances standardised infrastructure with market-specific customisation — game mix, payment rails, currency, bonusing, compliance, and affiliate structure differ dramatically between BD, ZA, CA, TR, and DK.',
    metrics: [
      { label: 'Live Brands',     value: '20+',      color: '#00ff88', icon: <Activity size={18}/> },
      { label: 'Global Markets',  value: '10+',      color: '#00e4ff', icon: <Globe size={18}/> },
      { label: 'Total Players',   value: '190K+',    color: '#ffc700', icon: <Users size={18}/> },
      { label: 'On-time Delivery',value: '100%',     color: '#ff2d7d', icon: <Shield size={18}/> },
    ],
    challenge: {
      text: 'Simultaneously managing 20+ live casino platforms across 10+ markets — each with radically different regulatory environments, currency stacks, player behaviour patterns, preferred payment methods (M-Pesa ZA, bKash BD, Interac CA, Papara TR), and game preferences — while maintaining GGR growth, platform stability, and Agile sprint velocity across multiple concurrent launches.',
      bullets: [
        '20+ platforms × different currencies, PSPs, bonus engines, KYC rules — all running simultaneously',
        'Single engineering team — requires tight product prioritisation to avoid sprint overload',
        'Game aggregator integrations (Pragmatic, Evolution, Spribe) — provider SLA management at scale',
        'Affiliate fraud risk across multi-tier networks — 10+ geo-specific affiliate programmes',
        'Regulatory variance: CA requires responsible gaming tools, TR requires Turkish payment routing',
      ],
    },
    approach: {
      text: 'Built a scalable product framework using a white-label/turnkey model on AIS Technolabs infrastructure — standardising game aggregator API, back-office CMS, and bonus engine core — then applying market-specific configuration layers per brand. Introduced a 4-week sprint cadence with Jira tracking across 5 concurrent project tracks. Implemented a BI dashboard monitoring GGR, FTD rate, and Day-30 retention across all 20+ brands simultaneously.',
      bullets: [
        'Platform template: single-API game aggregation → custom lobby curation layer per brand/market',
        'Centralised bonus engine with brand-level configuration — reduce dev time per launch by ~60%',
        'Sprint prioritisation framework: Tier 1 (revenue-critical), Tier 2 (growth), Tier 3 (maintenance)',
        'Multi-market affiliate dashboard: real-time CPA tracking, fraud scoring, commission builder per brand',
        'Agile ceremonies: bi-weekly sprint reviews with stakeholders, UAT sign-off protocol per brand',
      ],
    },
    outcome: {
      text: 'Successfully launched and managed 20+ live brands including Biglory, Jackpot Aruba, Fox Play, Zyroz, Play888, and Luxwin across 10+ global markets — reaching 190,000+ players. Delivered 4 concurrent client projects on schedule and launched 2 large-scale marketing campaigns reaching 10,000+ players in a single push.',
      metrics: [
        { k: 'Brands Live', v: '20+', note: 'Concurrent portfolio Q1 2025' },
        { k: 'Markets Active', v: '10+', note: 'BD, ZA, CA, TR, NP, MN, DK, Global' },
        { k: 'Players Reached', v: '190K+', note: 'Aggregated across all brands' },
        { k: 'Sprint Delivery', v: '100%', note: 'On-time across 4 major projects' },
      ],
      aiNote: 'Portfolio-wide ML churn monitoring flagged at-risk cohorts across all 20+ brands simultaneously — enabling centralised CRM team to prioritise reactivation spend by predicted LTV per brand.',
    },
    tools: ['AIS Turnkey Platform', 'Jira', 'Pragmatic/Evolution/Spribe APIs', 'Custom BI Dashboard', 'Multi-brand CMS', 'GA4'],
  },
  {
    id: 4,
    title: 'GGR Growth via RTP & Live Casino Strategy',
    tag: 'GGR Optimisation',
    tagColor: '#ff2d7d',
    market: '📊 Cross-Brand Analytics',
    summary: 'Audited game performance across live platforms, identified low-margin slot concentration causing GGR plateau, and systematically reshuffled lobbies toward live casino and crash games while managing RTP configurations — achieving 40% GGR growth in two quarters.',
    industry: 'Industry data: Live casino titles with social/show mechanics (Crazy Time, Lightning Roulette) drive up to 50% higher session retention. Crash games dominate mobile-first markets with short "snackable" session patterns (session frequency ↑23% YoY in 2024). Operators monitoring actual vs. theoretical RTP deviations can reduce payout anomalies within 60 seconds using real-time BI.',
    metrics: [
      { label: 'GGR Growth',      value: '+40%',     color: '#ff2d7d', icon: <TrendingUp size={18}/> },
      { label: 'Churn Reduction', value: '-15%',     color: '#00ff88', icon: <Activity size={18}/> },
      { label: 'Live Casino Share',value: '+18pp',   color: '#00e4ff', icon: <BarChart3 size={18}/> },
      { label: 'RTP Margin Gain', value: '+1.4pp',   color: '#ffc700', icon: <Brain size={18}/> },
    ],
    challenge: {
      text: 'Multiple brands were experiencing plateaued GGR despite steady player acquisition — a classic traffic-to-revenue conversion problem. Root cause analysis revealed that 70%+ of player sessions were concentrated on low-margin, high-volatility slots configured at sub-optimal RTPs by providers, while high-margin live casino products were buried below the lobby fold. Simultaneously, bonus-to-GGR ratios were running 8–12% above target due to blanket welcome packages attracting bonus-seeking behaviour.',
      bullets: [
        'GGR plateau despite 15% MoM player growth — traffic not converting to revenue',
        '70%+ sessions on low-margin slots — live casino and crash games underrepresented',
        'RTP misconfiguration: providers defaulting to 96%+ on slot titles, eroding house margin',
        'Bonus-to-GGR ratio at 22% — industry benchmark target is 12–15%',
        'No real-time GGR monitoring — payout anomalies undetected for 24–72 hours',
      ],
    },
    approach: {
      text: 'Built a real-time GGR monitoring BI dashboard tracking revenue per game, provider, and player segment — enabling payout anomaly detection within 60 seconds. Coordinated RTP adjustment requests with aggregators to move key slot titles from 96.5% → 94.8% (saving ~1.7pp margin). Repositioned lobby architecture with live casino and Aviator/JetX crash games in prime placement. Introduced live casino cashback programmes to incentivise trial of higher-margin products.',
      bullets: [
        'BI dashboard: real-time GGR per game × provider × country — anomaly alerts within 60 seconds',
        'RTP negotiation: 12 slot titles adjusted 96.5% → 94.8% via aggregator API — +1.4pp house margin',
        'Lobby reshuffle: live casino + crash games above fold on mobile — 60%→78% scroll-above-fold position',
        'Live casino cashback: 5% weekly cashback exclusively on live tables — driving session depth',
        'Bonus audit: replaced blanket welcome packages with segmented offers — bonus/GGR ratio 22% → 14%',
      ],
    },
    outcome: {
      text: 'GGR increased 40% within two quarters driven by three compounding factors: RTP margin improvement, live casino product mix shift, and bonus cost optimisation. Player churn dropped 15% — aligned with industry research showing live casino social mechanics drive significantly higher retention vs. slot-only engagement. The real-time BI layer became the standard monitoring tool across the full 20+ brand portfolio.',
      metrics: [
        { k: 'GGR Growth', v: '+40%', note: '2-quarter period, key brands' },
        { k: 'Churn Reduction', v: '-15%', note: 'D30 retention improvement' },
        { k: 'Live Casino GGR Mix', v: '+18pp', note: '28% → 46% of total GGR' },
        { k: 'Bonus/GGR Ratio', v: '14%', note: 'Reduced from 22% baseline' },
      ],
      aiNote: 'AI-driven lobby engine auto-repositioned games based on live GGR margin per session — highest-margin products receiving prime lobby placement within 30-minute performance windows.',
    },
    tools: ['Custom BI Dashboard', 'Looker Studio', 'Aggregator RTP Config API', 'GA4 Funnel', 'PAM Back-Office', 'Braze CRM'],
  },
  {
    id: 5,
    title: 'AI-Driven CRM: Churn Prediction & LTV Maximisation',
    tag: 'AI & Retention',
    tagColor: '#9b59b6',
    market: '🤖 AI Product Strategy',
    summary: 'Designed and deployed an ML-powered player lifecycle management system across the casino portfolio — featuring churn prediction at Day-4 inactivity, personalised bonus engine, and smart push notification timing — reducing churn by 28% and lifting LTV 4.2×.',
    industry: 'Industry research confirms: retaining an existing player costs 5–25× less than acquiring a new one. Improving retention by just 5% can increase casino profits by up to 95%. ML-driven churn models active within hours of first login — not after 30-day dormancy — are the differentiator between average and best-in-class operators.',
    metrics: [
      { label: 'Churn Reduction',   value: '-28%',    color: '#9b59b6', icon: <Activity size={18}/> },
      { label: 'LTV Multiplier',    value: '4.2×',    color: '#ffc700', icon: <TrendingUp size={18}/> },
      { label: 'Push Open Rate',    value: '+70%',    color: '#00e4ff', icon: <Zap size={18}/> },
      { label: 'Win-back ROI',      value: '3.2×',    color: '#00ff88', icon: <Brain size={18}/> },
    ],
    challenge: {
      text: 'The portfolio\'s CRM strategy was reactive — reactivation campaigns triggered at Day-30 dormancy when players had already churned to competitors. Welcome bonus campaigns attracted bonus seekers rather than loyal players (Day-7 retention was 12% — far below the 38% best-in-class benchmark). Push notifications were untargeted, achieving a 12% open rate. Bonus budgets were allocated equally across all player segments, wasting spend on low-LTV players while under-investing in VIP-potential profiles.',
      bullets: [
        'Churn detection at Day-30 — too late to reactivate; competitors had already captured the player',
        'Day-7 retention at 12% — vs. 38% best-in-class (gamified, personalised platforms)',
        'Push notification open rate: 12% — industry achieves 25–40% with AI send-time optimisation',
        'Flat bonus allocation: $50 bonus to every segment — LTV prediction not used for sizing',
        'No VIP scoring — high-value players not identified or elevated until significant revenue already earned',
      ],
    },
    approach: {
      text: 'Designed a 4-cohort ML player lifecycle system: (1) New Player Nurture — AI-triggered personalised game recommendations within first session. (2) Early Churn Guard — ML model detects churn risk at Day-4 inactivity (not Day-30) and triggers personalised reload. (3) VIP Scoring — gradient boosting model predicts LTV at registration, elevating potential VIPs to dedicated retention journey from Day-1. (4) Reactivation Intelligence — dormant players segmented by LTV potential and churn cause for differentiated win-back paths.',
      bullets: [
        'Churn prediction model: gradient boosting on session behaviour, deposit frequency, game category — 85%+ accuracy',
        'Day-4 inactivity trigger (not Day-30) — reactivation offer personalised to player\'s top game category + preferred bonus type',
        'AI push send-time optimisation: each player\'s highest engagement window identified per historical behaviour — +70% open rate',
        'VIP scoring at registration: high-LTV profiles receive dedicated host outreach within 24 hours of first deposit',
        'Bonus budget allocation by predicted LTV: high-LTV players receive 3× bonus value vs. casual segment',
      ],
    },
    outcome: {
      text: 'The AI-driven lifecycle system reduced player churn by 28% and lifted average player LTV by 4.2× for the VIP segment. Push notification open rate improved from 12% to 31% through AI send-time personalisation. Win-back campaign ROI reached 3.2× vs. 1.4× with blanket campaigns — directly attributable to ML cohort segmentation matching the right offer to the right player at the right cost.',
      metrics: [
        { k: 'Churn Reduction', v: '-28%', note: 'ML Day-4 early intervention' },
        { k: 'VIP LTV Lift', v: '4.2×', note: 'vs. non-VIP segment baseline' },
        { k: 'Push Open Rate', v: '31%', note: 'from 12% baseline (+70%)' },
        { k: 'Win-back ROI', v: '3.2×', note: 'vs. 1.4× blanket campaigns' },
      ],
      aiNote: 'ML model accuracy: 85%+ churn prediction within 4 days of last session — enabling proactive CRM spend targeting players with highest reactivation probability × highest LTV potential.',
    },
    tools: ['ML Churn Model (Python/Gradient Boost)', 'Braze CRM', 'Segment CDP', 'PostHog', 'Custom BI Dashboard', 'Twilio Push'],
  },
  {
    id: 6,
    title: 'Brazil Market Entry — Navigating the World\'s Hottest Regulated Launch',
    tag: 'Regulatory Strategy',
    tagColor: '#00e4ff',
    market: '🇧🇷 Brazil',
    summary: 'Developed a regulatory-ready product strategy for the Brazilian iGaming market — which went live January 1, 2025, generating ~R$37B GGR in its first year. Covered Pix-first payment architecture, 12% GGR tax compliance, KYC/AML frameworks, and a responsible gambling feature set aligned with federal requirements.',
    industry: 'Brazil is the world\'s most significant new regulated iGaming market. In its first year (2025), it generated ~R$37B in reported GGR — backed by 200M+ population, 100M+ active participants, Pix instant payment infrastructure, and a passionate football-betting culture. The R$30M federal licence fee, 12% GGR tax (rising to 15% by 2028), and credit card prohibition shaped the entire product strategy.',
    metrics: [
      { label: 'Brazil GGR 2025',    value: 'R$37B',    color: '#00e4ff', icon: <Globe size={18}/> },
      { label: 'Active Players',     value: '100M+',    color: '#ffc700', icon: <Users size={18}/> },
      { label: 'GGR Tax Rate',       value: '12%',      color: '#ff2d7d', icon: <BarChart3 size={18}/> },
      { label: 'Pix Payment Share',  value: '90%+',     color: '#00ff88', icon: <Activity size={18}/> },
    ],
    challenge: {
      text: 'Brazil\'s regulated framework introduced January 2025 created a high-stakes product compliance environment: a R$30M non-refundable licence fee covering 5 years and up to 3 brands, mandatory Pix-only payment rails (credit cards strictly banned), 20% local capital ownership requirement, and real-time GGR reporting to the Secretariat of Prizes and Betting (SPA). Operators needed to rapidly adapt platforms originally built for grey-market dynamics into fully compliant regulated products — without sacrificing conversion or player experience.',
      bullets: [
        'R$30M licence fee — 5-year term, up to 3 brands, non-refundable: requires ROI-projected product plan',
        'Credit cards banned — 100% reliance on Pix instant EFT, debit, and authorised e-transfers',
        'KYC mandatory before first bet — eliminated pre-deposit frictionless model used in grey markets',
        'GGR tax 12% (2025) → 13% (2026) → 15% (2028): bonus-to-GGR ratio must tighten to protect NGR',
        'Responsible gambling tools mandatory: deposit limits, self-exclusion, session time alerts required',
      ],
    },
    approach: {
      text: 'Built a Brazil-specific product configuration layer on top of the existing white-label infrastructure — isolating Brazilian regulatory requirements without disrupting the core platform used for other markets. Prioritised Pix integration as the sole payment gateway, achieving >95% payment success rate. Redesigned the KYC flow for a CPF-first verification model (Brazilian tax ID), achieving mandatory pre-bet compliance while keeping time-to-first-bet under 3 minutes.',
      bullets: [
        'Pix-first payment stack: instant deposits and withdrawals — target <30 seconds settlement to reduce payment-led churn',
        'CPF-based KYC: streamlined tax ID verification flow — compliance achieved in <3 min median completion time',
        'GGR tax modelling: bonus structures redesigned — wagering requirements and offer caps set to maintain 18%+ NGR margin after 12% tax',
        'Responsible gaming dashboard: deposit limits, cooling-off periods, self-exclusion engine — compliant with SPA requirements',
        'Football-first lobby: live betting on Brasileirão, Copa do Brasil, and international fixtures — football drives 60%+ of sportsbook handle in Brazil',
      ],
    },
    outcome: {
      text: 'The Brazil-configured platform achieved full regulatory compliance ahead of the January 2025 go-live window. Pix payment integration delivered >95% success rates, eliminating the payment friction that plagued earlier grey-market operators. Time-to-first-bet held under 3 minutes despite mandatory KYC — balancing compliance with conversion. The tax-aware bonus strategy maintained a healthy NGR margin even at the 12% GGR tax rate.',
      metrics: [
        { k: 'Payment Success', v: '>95%', note: 'Pix instant settlement' },
        { k: 'Time-to-First-Bet', v: '<3 min', note: 'CPF KYC + Pix combined' },
        { k: 'NGR Margin', v: '18%+', note: 'After 12% GGR tax' },
        { k: 'RG Compliance', v: '100%', note: 'SPA framework met' },
      ],
      aiNote: 'AI-powered AML monitoring flagged suspicious transaction patterns in real-time — essential in Brazil\'s framework where operators are liable for AML breaches that originate on their platforms. Behavioural models reduced manual compliance review load by 75%.',
    },
    tools: ['Pix PSP Integration', 'CPF KYC Engine', 'SPA Reporting API', 'Responsible Gaming Module', 'BI Tax Dashboard', 'Jira Compliance Tracker'],
  },
  {
    id: 7,
    title: '2026 AI Brand Strategy — Moving Beyond Bonus-Led Acquisition',
    tag: '2026 Trends',
    tagColor: '#ff2d7d',
    market: '🌐 Industry Strategy',
    summary: 'Responded to the 2026 iGaming industry shift — where AI moved from experimentation to operational deployment (rated 8.41/10 priority by 350+ operators) and influencer-only acquisition dropped 10pp — by redesigning the product\'s brand ecosystem, cybersecurity posture, and AI-powered player intelligence layer.',
    industry: 'The 2026 iGaming Trends Report (surveying 350+ operators, analysing 120K+ media headlines) confirmed: AI adoption rated 8.41/10 strategic priority (up from 8.15), 56% of operators rank AI as top-3 priority. Simultaneously, inflencer-led tactics dropped 10pp since 2023 as operators pivot to long-term brand trust. Phishing incidents increased 180% since 2023 — cybersecurity is now a direct driver of player trust and LTV.',
    metrics: [
      { label: 'AI Priority Score',   value: '8.41/10',  color: '#ff2d7d', icon: <Brain size={18}/> },
      { label: 'Operators w/ AI Top3',value: '56%',      color: '#ffc700', icon: <TrendingUp size={18}/> },
      { label: 'Phishing Rise',       value: '+180%',    color: '#00e4ff', icon: <Shield size={18}/> },
      { label: 'Influencer Drop',     value: '-10pp',    color: '#00ff88', icon: <Activity size={18}/> },
    ],
    challenge: {
      text: 'Portfolio brands were still running 2023-era acquisition playbooks: heavy influencer spend, flat welcome bonuses, and no long-term brand identity. As the industry shifted toward brand-ecosystem building, responsible gambling as a strategic feature, and AI as the operational core — continuing the old approach would mean fighting for increasingly expensive, low-LTV traffic while competitors built moats through trust, personalisation, and platform intelligence.',
      bullets: [
        'Influencer-only acquisition: high CPA, declining ROI as market matures — no brand equity being built',
        'AI used only for marketing automation — no deployment across product, fraud, or retention layers',
        'Cybersecurity gap: phishing risk rising 180% YoY — player trust and data protection under threat',
        'Responsible gambling treated as compliance obligation — not leveraged as a trust and retention signal',
        'Bonus-to-GGR ratio unsustainable — aggressive welcome offers attracting bonus hunters, not loyal players',
      ],
    },
    approach: {
      text: 'Redesigned the brand strategy around three pillars aligned with 2026 industry direction: (1) AI-First Operations — deploying ML across churn, fraud, personalisation, and RTP monitoring simultaneously, not just in isolation. (2) Brand Trust Architecture — building responsible gambling features as a visible brand signal rather than buried compliance text. (3) Cybersecurity as a Product Feature — surface-level trust signals (SSL badges, withdrawal speed guarantees, provably fair certification) embedded into the UX.',
      bullets: [
        'AI across all layers: churn prediction, personalised lobby, smart push timing, fraud detection — unified intelligence stack',
        'Responsible gambling rebranded: deposit limit tools, reality check timers, and spending summaries promoted as player empowerment features',
        'Cybersecurity UX: provably fair game labels, withdrawal speed counter, 2FA enforcement — building visible trust signals',
        'Brand content shift: moved from pure promo content to education + entertainment — iGaming guides, strategy blogs, game explainers',
        'Micro-influencer pivot: from 10 large streamers to 40 niche community creators — lower CPA, higher audience trust and conversion',
      ],
    },
    outcome: {
      text: 'The AI-first brand strategy transition delivered measurable improvements across all key brand health and retention metrics. The shift from heavy bonus-led acquisition to brand ecosystem building reduced bonus/GGR ratio while simultaneously improving Day-30 retention — confirming the industry research insight that brand trust drives higher LTV than bonus volume.',
      metrics: [
        { k: 'Bonus/GGR Ratio', v: '-8pp', note: 'Reduced from 22% → 14%' },
        { k: 'D30 Retention', v: '+9pp', note: 'Trust-driven loyalty lift' },
        { k: 'Fraud Incidents', v: '-62%', note: 'AI AML + KYC layer' },
        { k: 'Brand Organic Traffic', v: '+34%', note: 'Content + SEO strategy' },
      ],
      aiNote: '56% of top operators now rank AI as a top-3 strategic priority — the portfolio\'s unified AI stack (churn + fraud + personalisation + push timing) placed it in the top-tier operator category by operational intelligence density.',
    },
    tools: ['Unified AI Stack (Python ML)', 'Content CMS', 'Responsible Gaming Engine', '2FA / Security Layer', 'SEO Analytics', 'Micro-Influencer Dashboard'],
  },
  {
    id: 8,
    title: 'Latin America Expansion — Crypto Rails, Football Betting & Mobile-First Markets',
    tag: 'Market Expansion',
    tagColor: '#ffc700',
    market: '🌎 Latin America',
    summary: 'Developed a Latin America go-to-market strategy targeting Brazil, Mexico, Colombia, and Peru — a combined $6–7B iGaming market in 2025 — using Pix/crypto payment rails, football-first sportsbook configuration, and mobile-first UX for a predominantly smartphone-native player base.',
    industry: 'Latin America\'s iGaming market reached $6–7B in 2025, driven by Brazil (100M+ players, regulated Jan 2025), Mexico (~80M users, $10B+ turnover), Colombia (9.5M unique online users, pioneer regulator), and Peru ($2.5B market). Nearly 60 million LatAm residents own cryptocurrency by early 2025 — stablecoins (USDT) are used as real payment infrastructure in high-inflation markets like Argentina.',
    metrics: [
      { label: 'LatAm Market 2025',  value: '$6–7B',    color: '#ffc700', icon: <Globe size={18}/> },
      { label: 'Crypto Users (LatAm)',value: '60M+',     color: '#00e4ff', icon: <Users size={18}/> },
      { label: 'Mobile Traffic',     value: '75%+',     color: '#00ff88', icon: <Activity size={18}/> },
      { label: 'Football Bet Share', value: '60%+',     color: '#ff2d7d', icon: <BarChart3 size={18}/> },
    ],
    challenge: {
      text: 'Latin America is not a single market — it is 6+ distinct regulatory environments, 4+ dominant currencies, 2 major languages, and radically different payment infrastructures. Mexico has $10B+ turnover but operates under a concession-based system with no clear online casino framework. Colombia has a regulated, mature, lower-margin environment. Brazil is newly regulated with strict Pix-only rules. Argentina faces hyperinflation driving crypto adoption. A single platform template would fail across all of them.',
      bullets: [
        'Payment fragmentation: Pix (BR), SPEI (MX), PSE (CO), PagoEfectivo (PE) — different instant transfer systems per country',
        'Crypto demand: Argentina and Venezuela players expecting USDT/stablecoin options due to local currency instability',
        'Football dominance: 60%+ of sportsbook handle is football — lobby and product must be football-first, not casino-first',
        'Mobile-only players: 75%+ of LatAm web traffic is mobile — desktop-first designs cause immediate drop-off',
        'Language nuance: Brazilian Portuguese vs. Latin Spanish — direct translation insufficient, localisation required',
      ],
    },
    approach: {
      text: 'Built a LatAm-specific product configuration matrix — one core platform, four market-specific layers. Each country received localised payment stack, localised sportsbook odds feed (football priority), localised content in BR-Portuguese or regional Spanish, and a crypto gateway for Argentina/Venezuela segments. The sportsbook was configured as the hero product (not casino) for the first time — live in-play betting on Brasileirão, Liga MX, and Copa Libertadores as primary engagement drivers.',
      bullets: [
        'Country-specific payment matrix: Pix (BR), SPEI (MX), PSE (CO), PagoEfectivo (PE), USDT gateway (AR/VE)',
        'Sportsbook-first lobby: football live betting above casino fold — Copa Libertadores, Brasileirão, Liga MX as hero markets',
        'In-play betting: 70%+ of handle targets live markets — prop bets, next goal scorer, match corners driving session depth',
        'Crypto rails for inflation-hedge markets: USDT deposits/withdrawals for Argentina — reducing currency risk for players',
        'Content localisation: Brazilian Portuguese site separate from Spanish — culturally relevant promotions, not translated copy',
      ],
    },
    outcome: {
      text: 'The LatAm multi-market expansion successfully activated 4 country-specific product configurations within a single platform architecture — achieving market-competitive FTD rates across Brazil, Mexico, Colombia, and Peru. The football-first sportsbook positioning drove significantly higher session frequency than casino-only brands in the same markets, aligned with regional player behaviour data showing 60%+ of LatAm handle concentrated on football.',
      metrics: [
        { k: 'Markets Activated', v: '4', note: 'BR, MX, CO, PE live' },
        { k: 'Sportsbook Handle', v: '60%+', note: 'Football as primary sport' },
        { k: 'Crypto Payment Share', v: '22%', note: 'AR/VE player segments' },
        { k: 'Mobile Session Rate', v: '78%', note: 'vs. 75% regional avg' },
      ],
      aiNote: 'AI odds pricing and margin management adapted dynamically per market — Brazilian players received tighter football margins for acquisition, while live casino products carried higher AI-optimised margins for GGR extraction from already-loyal players.',
    },
    tools: ['Multi-country PSP Stack', 'USDT Crypto Gateway', 'Football Odds Feed (Sportradar)', 'Localisation CMS', 'In-Play Betting Engine', 'GA4 Multi-market'],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const CaseStudies = () => {
  const [selected, setSelected] = useState(null);
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const h = () => setVw(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const isMobile = vw < 480;
  const isTablet = vw < 768;

  return (
    <section id="casestudies" className="section-padding" style={{ position: 'relative' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'80%', height:'60%', background:'radial-gradient(ellipse, rgba(255,45,125,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div className="container">
        <div className="text-center" style={{ marginBottom: isMobile ? '2rem' : '4rem' }}>
          <span className="tag">Portfolio</span>
          <h2 className="title">Deep Dive <span className="gradient-text">Case Studies</span></h2>
          <p className="subtitle" style={{ margin:'0 auto' }}>
            Real product strategies — grounded in industry benchmarks and measurable outcomes — from managing 20+ live iGaming platforms across global markets.
          </p>
        </div>

        {/* Card Grid */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))', gap: isMobile ? '1.2rem' : '2rem' }}>
          {cases.map((c) => (
            <motion.div key={c.id} layoutId={`card-${c.id}`} onClick={() => setSelected(c)}
              className="glass-card" whileHover={{ y:-6 }}
              style={{ cursor:'pointer', padding: isMobile ? '1.4rem' : '2.2rem', display:'flex', flexDirection:'column', borderTop:`2px solid ${c.tagColor}30` }}>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1rem', flexWrap:'wrap', gap:'6px' }}>
                <span style={{ background:`${c.tagColor}18`, color:c.tagColor, padding:'4px 12px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.5px' }}>{c.tag}</span>
                <span style={{ fontSize:'0.78rem', color:'var(--text-muted)' }}>{c.market}</span>
              </div>

              <h3 style={{ fontSize: isMobile ? '1.05rem' : '1.25rem', marginBottom:'0.75rem', lineHeight:1.3, fontWeight:700 }}>{c.title}</h3>
              <p style={{ color:'var(--text-secondary)', marginBottom:'1.5rem', flex:1, fontSize:'0.9rem', lineHeight:1.65 }}>{c.summary}</p>

              <div style={{ display:'flex', gap:'1rem', borderTop:'1px solid var(--glass-border)', paddingTop:'1.2rem', flexWrap:'wrap' }}>
                {c.metrics.slice(0,2).map((m, i) => (
                  <div key={i} style={{ flex:1, minWidth:'80px' }}>
                    <div style={{ color:m.color, fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight:900 }}>{m.value}</div>
                    <div style={{ fontSize:'0.72rem', color:'var(--text-muted)', marginTop:'2px' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop:'1rem', color:c.tagColor, display:'flex', alignItems:'center', gap:'6px', fontSize:'0.82rem', fontWeight:600 }}>
                Read Deep Dive <ArrowRight size={13}/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              onClick={() => setSelected(null)}
              style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.88)', backdropFilter:'blur(12px)', zIndex:2000 }} />

            <div style={{ position:'fixed', inset:0, display:'flex', alignItems: isMobile ? 'flex-end' : 'center', justifyContent:'center', zIndex:2001, pointerEvents:'none', padding: isMobile ? 0 : '1rem' }}>
              <motion.div layoutId={`card-${selected.id}`}
                style={{ background:'var(--bg-tertiary)', width:'100%', maxWidth: isMobile ? '100%' : isTablet ? '96%' : '960px', maxHeight: isMobile ? '94vh' : '92vh', borderRadius: isMobile ? '20px 20px 0 0' : '24px', border:'1px solid var(--glass-border)', overflowY:'auto', pointerEvents:'auto', boxShadow:'0 30px 60px rgba(0,0,0,0.7)' }}>

                <div style={{ padding: isMobile ? '1.4rem 1.2rem 3rem' : isTablet ? '2rem' : '3rem', position:'relative' }}>

                  {/* Close */}
                  <button onClick={() => setSelected(null)} style={{ position:'absolute', top:'1rem', right:'1rem', background:'rgba(255,255,255,0.1)', border:'none', color:'#fff', width:'38px', height:'38px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', zIndex:10 }}>
                    <X size={18}/>
                  </button>

                  {/* Header */}
                  <div style={{ marginBottom:'1.5rem', paddingRight:'3rem' }}>
                    <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'0.75rem' }}>
                      <span style={{ background:`${selected.tagColor}20`, color:selected.tagColor, padding:'4px 12px', borderRadius:'20px', fontSize:'0.75rem', fontWeight:700 }}>{selected.tag}</span>
                      <span style={{ background:'rgba(255,255,255,0.06)', color:'var(--text-muted)', padding:'4px 12px', borderRadius:'20px', fontSize:'0.75rem' }}>{selected.market}</span>
                    </div>
                    <h2 style={{ fontSize: isMobile ? '1.2rem' : isTablet ? '1.6rem' : '2.1rem', lineHeight:1.2, marginBottom:'0.75rem' }}>{selected.title}</h2>
                    <p style={{ color:'var(--text-secondary)', fontSize: isMobile ? '0.88rem' : '1rem', lineHeight:1.7, fontStyle:'italic', borderLeft:`3px solid ${selected.tagColor}`, paddingLeft:'1rem' }}>{selected.industry}</p>
                  </div>

                  {/* KPI Metrics Banner */}
                  <div style={{ display:'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap:'1rem', background:'var(--bg-secondary)', padding: isMobile ? '1rem' : '1.5rem', borderRadius:'16px', marginBottom:'2rem' }}>
                    {selected.metrics.map((m,i) => (
                      <div key={i} style={{ textAlign:'center' }}>
                        <div style={{ color:m.color, marginBottom:'4px', opacity:0.8 }}>{m.icon}</div>
                        <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight:900, color:m.color }}>{m.value}</div>
                        <div style={{ color:'var(--text-secondary)', fontSize:'0.75rem', marginTop:'2px' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div style={{ marginBottom:'2rem' }}>
                    <h4 style={{ color:'var(--accent-pink)', fontSize: isMobile ? '1rem' : '1.15rem', marginBottom:'0.75rem', display:'flex', alignItems:'center', gap:'8px' }}>
                      <span style={{ width:'8px', height:'8px', background:'var(--accent-pink)', borderRadius:'50%', display:'inline-block', flexShrink:0 }}/>
                      The Challenge
                    </h4>
                    <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize: isMobile ? '0.88rem' : '1rem', marginBottom:'1rem' }}>{selected.challenge.text}</p>
                    <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                      {selected.challenge.bullets.map((b,i) => (
                        <li key={i} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                          <span style={{ color:'var(--accent-pink)', flexShrink:0, marginTop:'5px', fontSize:'0.7rem' }}>▸</span>
                          <span style={{ color:'var(--text-secondary)', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight:1.65 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div style={{ marginBottom:'2rem' }}>
                    <h4 style={{ color:'var(--accent-cyan)', fontSize: isMobile ? '1rem' : '1.15rem', marginBottom:'0.75rem', display:'flex', alignItems:'center', gap:'8px' }}>
                      <span style={{ width:'8px', height:'8px', background:'var(--accent-cyan)', borderRadius:'50%', display:'inline-block', flexShrink:0 }}/>
                      The Approach
                    </h4>
                    <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize: isMobile ? '0.88rem' : '1rem', marginBottom:'1rem' }}>{selected.approach.text}</p>
                    <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                      {selected.approach.bullets.map((b,i) => (
                        <li key={i} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                          <span style={{ color:'var(--accent-cyan)', flexShrink:0, marginTop:'5px', fontSize:'0.7rem' }}>▸</span>
                          <span style={{ color:'var(--text-secondary)', fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight:1.65 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div style={{ marginBottom:'2rem' }}>
                    <h4 style={{ color:'var(--accent-neon)', fontSize: isMobile ? '1rem' : '1.15rem', marginBottom:'0.75rem', display:'flex', alignItems:'center', gap:'8px' }}>
                      <span style={{ width:'8px', height:'8px', background:'var(--accent-neon)', borderRadius:'50%', display:'inline-block', flexShrink:0 }}/>
                      The Outcome
                    </h4>
                    <p style={{ color:'var(--text-primary)', lineHeight:1.8, fontSize: isMobile ? '0.88rem' : '1rem', background:'rgba(0,255,136,0.05)', padding: isMobile ? '1rem' : '1.5rem', borderLeft:'4px solid var(--accent-neon)', borderRadius:'0 10px 10px 0', marginBottom:'1.2rem' }}>
                      {selected.outcome.text}
                    </p>
                    {/* Outcome KPIs */}
                    <div style={{ display:'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap:'0.8rem', marginBottom:'1rem' }}>
                      {selected.outcome.metrics.map((m,i) => (
                        <div key={i} style={{ padding:'0.8rem', background:`${selected.tagColor}0a`, border:`1px solid ${selected.tagColor}20`, borderRadius:'10px', textAlign:'center' }}>
                          <div style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight:900, color:selected.tagColor }}>{m.v}</div>
                          <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--text-primary)', margin:'3px 0' }}>{m.k}</div>
                          <div style={{ fontSize:'0.68rem', color:'var(--text-muted)' }}>{m.note}</div>
                        </div>
                      ))}
                    </div>
                    {/* AI Note */}
                    <div style={{ padding:'1rem 1.2rem', background:'rgba(255,45,125,0.07)', border:'1px solid rgba(255,45,125,0.2)', borderRadius:'10px' }}>
                      <span style={{ fontSize:'0.7rem', color:'#ff2d7d', fontWeight:700, letterSpacing:'2px' }}>🤖 AI LAYER — </span>
                      <span style={{ fontSize:'0.85rem', color:'var(--text-secondary)', lineHeight:1.65 }}>{selected.outcome.aiNote}</span>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <div style={{ fontSize:'0.7rem', color:'var(--text-muted)', fontWeight:700, letterSpacing:'2px', marginBottom:'0.75rem' }}>🛠 TOOLS & STACK</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                      {selected.tools.map(t => (
                        <span key={t} style={{ padding:'4px 12px', borderRadius:'20px', fontSize:'0.78rem', border:`1px solid ${selected.tagColor}30`, background:`${selected.tagColor}0a`, color:'var(--text-primary)', fontWeight:500 }}>{t}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
