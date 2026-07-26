import { Service, PortfolioItem, Testimonial, PricingPlan, FAQItem, SocialLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'YouTube Channel',
    url: 'https://youtube.com/@GHUFRAN_KING_DIGITAL',
    iconName: 'Youtube',
    color: 'from-red-500 to-rose-600',
    description: 'Tech tutorials, AI website guides & digital strategies'
  },
  {
    name: 'WhatsApp Channel',
    url: 'https://whatsapp.com/channel/0029VbBwO480bIdr9QEH6k1a',
    iconName: 'MessageSquare',
    color: 'from-emerald-500 to-green-600',
    description: 'Official announcements, daily tips & VIP updates'
  },
  {
    name: 'WhatsApp Community',
    url: 'https://chat.whatsapp.com/GU9yjaVaHYrKVeW83ynB6Y',
    iconName: 'Users',
    color: 'from-teal-500 to-emerald-600',
    description: 'Network with creators, business owners & clients'
  },
  {
    name: 'Telegram Channel',
    url: 'https://t.me/ghufran_king_digital',
    iconName: 'Send',
    color: 'from-sky-400 to-blue-600',
    description: 'Exclusive AI prompts, free resources & tools'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ghufran_king_digital',
    iconName: 'Instagram',
    color: 'from-purple-500 via-pink-500 to-amber-500',
    description: 'Daily graphic showcases, reels & design inspiration'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/ghufrankingdigital',
    iconName: 'Facebook',
    color: 'from-blue-600 to-indigo-700',
    description: 'Community events, agency updates & client stories'
  },
  {
    name: 'Official Website',
    url: 'https://www.ghufrankingdigital.site/',
    iconName: 'Globe',
    color: 'from-amber-400 to-yellow-600',
    description: 'Primary portal, portfolio & custom order booking'
  }
];

export const AGENCY_SERVICES: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDesc: 'Custom, high-speed, conversion-focused websites engineered with modern web technologies.',
    fullDesc: 'We construct lightning-fast, ultra-responsive modern websites optimized for maximum user engagement and search engine visibility. From slick single-page portfolios to enterprise web applications, we engineer robust digital experiences.',
    iconName: 'Code',
    badge: 'Popular',
    popular: true,
    features: [
      '100% Mobile Responsive Layouts',
      'Ultra-fast Loading Speed (<1.2s)',
      'SEO Structured Data & Meta Tagging',
      'Modern Animations & Smooth Scrolling',
      'Custom Content Management System Integration'
    ],
    deliverables: ['Production Ready Code', 'Free SSL & Domain Setup', '30 Days Post-Launch Support']
  },
  {
    id: 'ai-website-creation',
    title: 'AI Website Creation',
    shortDesc: 'Next-generation AI-powered web applications built with real-time smart capabilities.',
    fullDesc: 'Harness the power of AI to build interactive platforms with dynamic content generation, automated customer bots, intelligent search, and tailored user flows. Stand out with cutting-edge artificial intelligence integration.',
    iconName: 'Sparkles',
    badge: 'Trending',
    popular: true,
    features: [
      'AI Chatbots & Assistant Integration',
      'Dynamic AI Content Personalization',
      'Automated Lead Scoring Systems',
      'Next-Gen UI/UX with AI Workflows',
      'High-Performance Cloud Architecture'
    ],
    deliverables: ['Trained Custom AI Model / Prompt System', 'Full Source Code & Admin Panel', 'API Integration Documentation']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'Data-driven marketing campaigns designed to boost ROI and scale brand visibility.',
    fullDesc: 'Supercharge your client acquisition with laser-targeted PPC campaigns, Google Ads, technical SEO audits, and multi-channel marketing strategies designed for maximum conversion and explosive growth.',
    iconName: 'TrendingUp',
    badge: 'ROI Focused',
    features: [
      'Google Ads & Meta Advertising Strategy',
      'Advanced On-Page & Technical SEO Audits',
      'High-Converting Sales Funnels',
      'Comprehensive Analytics & Reporting',
      'Conversion Rate Optimization (CRO)'
    ],
    deliverables: ['Custom Ad Creatives & Copy', 'Weekly Analytical Dashboards', 'Competitor Insights Report']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'End-to-end social channel management, viral content strategy, and community building.',
    fullDesc: 'We turn casual scrollers into loyal brand advocates. From Instagram feed styling and daily post creation to Facebook ad scaling and community engagement on WhatsApp & Telegram.',
    iconName: 'Share2',
    features: [
      'Monthly Strategic Content Calendar',
      'Custom Brand Carousel Posts & Reels',
      'Active Community Management & Engagement',
      'Targeted Audience Growth Strategies',
      'Influencer Collaboration Outreach'
    ],
    deliverables: ['30 Branded Posts/Shorts per Month', 'Monthly Growth Reports', 'Hashtag & Keyword Vault']
  },
  {
    id: 'freelancing-support',
    title: 'Freelancing Support',
    shortDesc: '1-on-1 mentorship, profile optimization, and client acquisition for digital freelancers.',
    fullDesc: 'Unlock high-ticket freelancing success with our proven blueprints. We assist aspiring freelancers on Upwork, Fiverr, and LinkedIn with portfolio curation, proposal copywriting, and closing international clients.',
    iconName: 'Briefcase',
    features: [
      'Fiverr & Upwork Profile Audit & Ranking',
      'Winning Proposal & Cold Email Templates',
      'Portfolio Curation & Case Study Writing',
      'High-Ticket Client Negotiation Guidance',
      'Direct Project Referral Opportunities'
    ],
    deliverables: ['Optimized Profile Strategy', 'Cold Outreach Scripts', 'Personalized Mentorship Sessions']
  },
  {
    id: 'youtube-growth',
    title: 'YouTube Growth',
    shortDesc: 'Complete YouTube channel setup, SEO optimization, high-CTR thumbnails & monetization.',
    fullDesc: 'Elevate your YouTube presence with automated content workflows, high-click-through-rate thumbnails, video SEO, channel branding, and fast-track monetization strategies.',
    iconName: 'PlayCircle',
    badge: 'Hot Service',
    features: [
      'High CTR Custom Thumbnails',
      'Video Keyword & SEO Tags Strategy',
      'Channel Branding (Banner, Watermark, Intro)',
      'Script Outline & Content Strategy',
      'Monetization & Sponsor Growth Plan'
    ],
    deliverables: ['Channel Growth Roadmap', 'Custom Thumbnails Pack', 'SEO Keyword Optimization']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    shortDesc: 'Stunning visual identity, logo design, social banners, and high-impact branding.',
    fullDesc: 'Transform your brand visuals with custom graphics crafted by professional designers. We build memorable visual brand identities, logo suites, vector assets, promotional banners, and UI components.',
    iconName: 'Palette',
    features: [
      'Unique Vector Logo & Branding Suite',
      'Social Media Banners & Ad Banners',
      'Marketing Flyers & Business Cards',
      'Brand Style Guides & Typography Maps',
      'High-Resolution Print & Web Export Formats'
    ],
    deliverables: ['Editable Vector Files (AI, PSD, SVG)', 'Brand Style Guide PDF', 'PNG/JPG Export Packs']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    shortDesc: 'High-retention video editing for Shorts, Reels, YouTube videos, and ad campaigns.',
    fullDesc: 'Engage viewers from the first second with cinematic video editing, animated dynamic captions, smooth sound design, motion graphic overlays, and high-retention pacing built for viral reach.',
    iconName: 'Video',
    features: [
      'Viral Reels & Shorts Editing with Captions',
      'YouTube Long-Form Video Editing',
      'Sound Design, FX & SFX Enhancement',
      'Color Grading & Motion Graphics',
      'Fast Turnaround Delivery'
    ],
    deliverables: ['1080p / 4K MP4 Exports', 'Subtitled Vertical Formats', 'Short Teaser Clips']
  },
  {
    id: 'ai-tools-automation',
    title: 'AI Tools & Automation',
    shortDesc: 'Custom AI workflows, automated lead capturing, and process streamlining.',
    fullDesc: 'Automate repetitive tasks and reduce overhead by integrating smart AI workflows. We build custom WhatsApp bots, automated email pipelines, CRM synchronization, and automated content pipelines.',
    iconName: 'Cpu',
    features: [
      'Automated WhatsApp & Telegram Chatbots',
      'Email Marketing & Zapier Workflows',
      'Custom AI Agent Prompt Engineering',
      'Automated Lead Scraping & Storage',
      'CRM Integration (HubSpot, Sheets, Notion)'
    ],
    deliverables: ['Configured Bot Instances', 'Workflow Diagram & Documentation', 'Staff Training Video']
  },
  {
    id: 'domain-hosting',
    title: 'Domain & Hosting',
    shortDesc: 'High-speed cloud server provisioning, free SSL, domain connection & 99.9% uptime.',
    fullDesc: 'Ensure your business website stays lightning-fast and 100% secure with our premium cloud server infrastructure. Includes domain registration, SSL certificates, business email setup, and daily backups.',
    iconName: 'Server',
    features: [
      'Ultra-Fast NVMe Cloud Server Hosting',
      'Free SSL Certificate & Security Shield',
      'Custom Domain Registration & DNS Setup',
      'Professional Business Email Setup',
      'Daily Automated Database & File Backups'
    ],
    deliverables: ['Hosting Access Credentials', 'SSL Security Verification', 'Professional Email Inbox']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'NexGen AI SaaS Platform',
    category: 'web-ai',
    categoryLabel: 'AI Website',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'An AI-powered web platform with real-time content generation, user dashboard, and automated subscription billing.',
    client: 'NexGen Tech Ltd',
    result: '+340% User Registrations',
    tags: ['React', 'AI Integration', 'Tailwind CSS', 'Cloud Server'],
    demoUrl: 'https://www.ghufrankingdigital.site/'
  },
  {
    id: 'p2',
    title: 'Elite E-Commerce Growth Campaign',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-channel digital marketing campaign scaling an online fashion store with targeted Google Ads and Meta Retargeting.',
    client: 'Aura Fashion House',
    result: '4.8x ROAS Achieved',
    tags: ['Google Ads', 'Meta Ads', 'SEO Audit', 'Funnel Optimization'],
    demoUrl: 'https://www.ghufrankingdigital.site/'
  },
  {
    id: 'p3',
    title: 'TechVerse YouTube Channel Revamp',
    category: 'youtube-growth',
    categoryLabel: 'YouTube Growth',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    description: 'Complete channel brand overhaul including high-CTR thumbnail system, video SEO tags, and editing template.',
    client: 'TechVerse Official',
    result: '100K+ Subs in 90 Days',
    tags: ['YouTube SEO', 'Custom Thumbnails', 'Video Editing', 'Brand Design'],
    demoUrl: 'https://youtube.com/@GHUFRAN_KING_DIGITAL'
  },
  {
    id: 'p4',
    title: 'CyberGuard Corporate Branding Suite',
    category: 'design-video',
    categoryLabel: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive brand identity design featuring modern vector logo, style guide, pitch deck, and social media media kit.',
    client: 'CyberGuard Systems',
    result: 'Full Rebrand Success',
    tags: ['Logo Design', 'Vector Assets', 'Social Kit', 'Brand Guide'],
    demoUrl: 'https://instagram.com/ghufran_king_digital'
  },
  {
    id: 'p5',
    title: 'AutoLead WhatsApp Automation Bot',
    category: 'web-ai',
    categoryLabel: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    description: 'Automated 24/7 lead capture and qualification system connected directly to WhatsApp and CRM storage.',
    client: 'Prime Realty Group',
    result: '1,200+ Qualified Leads/Mo',
    tags: ['AI Workflows', 'WhatsApp Bot', 'CRM Sync', 'Automation'],
    demoUrl: 'https://whatsapp.com/channel/0029VbBwO480bIdr9QEH6k1a'
  },
  {
    id: 'p6',
    title: 'Viral Video Reels Series for Fitness Brand',
    category: 'design-video',
    categoryLabel: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    description: 'High-retention motion graphics short video edits with animated subtitles and custom sound design.',
    client: 'FitLife Global',
    result: '2.5M Total Views',
    tags: ['Video Editing', 'Reels', 'Motion Graphics', 'Sound FX'],
    demoUrl: 'https://instagram.com/ghufran_king_digital'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sharjeel Ahmed',
    role: 'Founder & CEO',
    company: 'Apex Digital Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'GHUFRAN KING DIGITAL built our AI website and optimized our SEO. Within 30 days, our inbound leads doubled! Highly professional, fast, and dedicated team.',
    serviceUsed: 'AI Website Creation & Marketing'
  },
  {
    id: 't2',
    name: 'Hamza Malik',
    role: 'Content Creator',
    company: 'Tech Insights Hub',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Their YouTube Growth and thumbnail design service completely revived my channel. Click-through rate jumped from 3.2% to 11.4%! Best digital agency for creators.',
    serviceUsed: 'YouTube Growth & Graphic Design'
  },
  {
    id: 't3',
    name: 'Fatima Noor',
    role: 'Marketing Director',
    company: 'Luxe Attire Studio',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The graphic designs and video reels edited by GHUFRAN KING DIGITAL are top-tier international quality. Our brand perception shot up instantly.',
    serviceUsed: 'Video Editing & Graphic Design'
  },
  {
    id: 't4',
    name: 'Usman Ali',
    role: 'Freelance Software Engineer',
    company: 'Independent Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The freelancing support and Upwork profile guidance provided by Ghufran King transformed my career. I landed my first $2,500 client within two weeks!',
    serviceUsed: 'Freelancing Support'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Business',
    tagline: 'Ideal for small businesses & startups embarking on their digital journey.',
    price: '$149',
    period: 'one-time',
    features: [
      'Custom Responsive Website (Up to 5 Pages)',
      'Basic On-Page SEO Setup',
      'Custom Logo & Banner Design',
      'WhatsApp Click-to-Chat Integration',
      'Free Domain & SSL Setup Assistance',
      '7 Days Dedicated Support'
    ],
    notIncluded: ['AI Chatbot Integration', 'Monthly Social Media Management'],
    ctaText: 'Get Started Now'
  },
  {
    id: 'pro',
    name: 'Professional Growth',
    tagline: 'Complete package for scaling companies wanting maximum ROI & automation.',
    price: '$399',
    period: 'one-time',
    popular: true,
    features: [
      'AI-Powered Web Platform / Custom App',
      'Full Digital Marketing & Ad Campaign Setup',
      'AI Lead Capture & Automation Workflow',
      'Complete Branding Suite & 10 Social Graphics',
      '4 High-Retention Edited Video Reels/Shorts',
      'YouTube Channel Optimization & SEO',
      '1 Year NVMe Cloud Hosting Included',
      '30 Days Priority VIP Support'
    ],
    ctaText: 'Claim Pro Package'
  },
  {
    id: 'enterprise',
    name: 'Enterprise VIP',
    tagline: 'Dedicated full-stack digital agency solution for large brands & influencers.',
    price: '$899',
    period: 'custom project',
    features: [
      'Custom Multi-tier AI Web Platform',
      'Complete Monthly Social Media Management',
      'Dedicated Marketing Manager & Ad Budget Scaling',
      'Unlimited Graphic Design Requests (Monthly)',
      '12 Edited High-CTR Videos / Shorts Monthly',
      'Custom WhatsApp & Telegram AI Automation',
      'VIP Dedicated 24/7 Priority Support Call Line',
      'Lifetime Free Cloud Hosting Maintenance'
    ],
    ctaText: 'Consult Enterprise VIP'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How quickly can you complete my website or AI project?',
    answer: 'Standard website projects are typically delivered within 3 to 7 business days. Complex AI web applications or custom platforms are delivered within 7 to 14 days with regular progress demos.',
    category: 'Turnaround'
  },
  {
    id: 'f2',
    question: 'Do you provide continuous maintenance and support after launch?',
    answer: 'Yes! Every project includes at least 30 days of free post-launch support. We also offer affordable monthly maintenance packages to ensure your site remains updated, secure, and fast.',
    category: 'Support'
  },
  {
    id: 'f3',
    question: 'How can I contact GHUFRAN KING DIGITAL directly?',
    answer: 'You can reach us directly via WhatsApp, Telegram, or Email. Click our floating WhatsApp button or join our official WhatsApp Channel and Telegram community for instant responses!',
    category: 'Contact'
  },
  {
    id: 'f4',
    question: 'What is AI Website Creation and how does it help my business?',
    answer: 'AI Website Creation integrates smart machine learning features into your site—such as automated 24/7 lead chatbots, personalized content generators, smart search, and automated customer follow-ups that turn traffic into sales automatically.',
    category: 'Services'
  },
  {
    id: 'f5',
    question: 'What payment methods do you accept?',
    answer: 'We accept international Bank Transfers, Payoneer, Wise, Crypto (USDT), and local instant transfer methods. Payment terms are transparent with zero hidden fees.',
    category: 'Payments'
  },
  {
    id: 'f6',
    question: 'Can you help me build a personal brand on YouTube and Social Media?',
    answer: 'Absolutely! Our YouTube Growth and Social Media Marketing packages handle everything from channel setup, thumbnail graphics, video editing, SEO tag research, and community engagement.',
    category: 'Growth'
  }
];
