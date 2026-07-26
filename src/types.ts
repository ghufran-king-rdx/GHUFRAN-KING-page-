export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  deliverables: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web-ai' | 'marketing' | 'design-video' | 'youtube-growth';
  categoryLabel: string;
  image: string;
  description: string;
  client: string;
  result: string;
  tags: string[];
  demoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  serviceUsed: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  color: string;
  description: string;
}
