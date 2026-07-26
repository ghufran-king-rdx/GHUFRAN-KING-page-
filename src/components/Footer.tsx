import React from 'react';
import { Crown, Heart, Youtube, MessageSquare, Users, Send, Instagram, Facebook, Globe, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/agencyData';

const renderSocialIcon = (iconName: string) => {
  const props = { className: "w-4 h-4 text-slate-300 group-hover:text-amber-400 transition-colors" };
  switch (iconName) {
    case 'Youtube': return <Youtube {...props} />;
    case 'MessageSquare': return <MessageSquare {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Send': return <Send {...props} />;
    case 'Instagram': return <Instagram {...props} />;
    case 'Facebook': return <Facebook {...props} />;
    case 'Globe': return <Globe {...props} />;
    default: return <Globe {...props} />;
  }
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 relative overflow-hidden pt-16 pb-12">
      
      {/* Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (2 cols wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
                <Crown className="w-6 h-6 text-slate-950 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-xl tracking-tight text-white">
                  GHUFRAN KING
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-amber-400 uppercase -mt-1">
                  DIGITAL AGENCY
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Build your digital future with GHUFRAN KING DIGITAL. Premier agency offering Web Development, AI Website Creation, Digital Marketing, YouTube Growth, Graphic Design, and IT Infrastructure.
            </p>

            {/* Social Icons Row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 transition-colors group"
                  title={s.name}
                >
                  {renderSocialIcon(s.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <p className="font-syne font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Portal</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services Catalog</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Agency</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing Packages</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Help & FAQ</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Strategy</a></li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <p className="font-syne font-bold text-sm text-white uppercase tracking-wider">
              Popular Services
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">AI Website Creation</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Digital Marketing & SEO</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">YouTube Growth & SEO</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Graphic Design & Branding</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">AI Tools & Automation</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Domain & Cloud Hosting</a></li>
            </ul>
          </div>

          {/* Col 4: Official Portals */}
          <div className="space-y-3">
            <p className="font-syne font-bold text-sm text-white uppercase tracking-wider">
              Official Links
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://www.ghufrankingdigital.site/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Official Website</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@GHUFRAN_KING_DIGITAL" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  YouTube Channel
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029VbBwO480bIdr9QEH6k1a" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/GU9yjaVaHYrKVeW83ynB6Y" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a href="https://t.me/ghufran_king_digital" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Telegram Group
                </a>
              </li>
              <li>
                <a href="https://instagram.com/ghufran_king_digital" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Instagram Feed
                </a>
              </li>
              <li>
                <a href="https://facebook.com/ghufrankingdigital" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 GHUFRAN KING DIGITAL. All Rights Reserved.</p>
          
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed & Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>by GHUFRAN KING DIGITAL</span>
          </div>

          <button
            onClick={scrollToTop}
            className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
