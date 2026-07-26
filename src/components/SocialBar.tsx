import React from 'react';
import { SOCIAL_LINKS } from '../data/agencyData';
import { Youtube, MessageSquare, Users, Send, Instagram, Facebook, Globe, Sparkles, ExternalLink } from 'lucide-react';

const renderSocialIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-white" };
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

export const SocialBar: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Across Our Network</span>
          </div>

          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
            Join the GHUFRAN KING DIGITAL Ecosystem
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Follow our channels for daily tutorials, AI prompts, design updates, and instant client support.
          </p>
        </div>

        {/* 7 Social Media Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-2xl border border-white/10 hover:border-amber-500/40 flex items-center justify-between group transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {renderSocialIcon(social.iconName)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white group-hover:text-amber-300 transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-1">
                    {social.description}
                  </p>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
