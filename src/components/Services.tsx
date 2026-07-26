import React, { useState } from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { Service } from '../types';
import { ServiceModal } from './ServiceModal';
import { 
  Code, Sparkles, TrendingUp, Share2, Briefcase, PlayCircle, 
  Palette, Video, Cpu, Server, CheckCircle2, ArrowRight, MessageSquare 
} from 'lucide-react';

interface ServicesProps {
  onInquireService: (serviceTitle: string) => void;
}

const renderServiceIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-amber-400" };
  switch (iconName) {
    case 'Code': return <Code {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Share2': return <Share2 {...props} />;
    case 'Briefcase': return <Briefcase {...props} />;
    case 'PlayCircle': return <PlayCircle {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'Video': return <Video {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Server': return <Server {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onInquireService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Specialized Services</span>
          </div>
          
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            High-Impact Digital Solutions Crafted for Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Growth
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From Next-Gen Web Development and AI Integration to YouTube Growth and Graphic Branding — GHUFRAN KING DIGITAL brings end-to-end expertise.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY_SERVICES.map((service) => {
            const whatsappMsg = encodeURIComponent(
              `Hello GHUFRAN KING DIGITAL! I want to order the "${service.title}" service. Please send details.`
            );
            const whatsappUrl = `https://wa.me/923000000000?text=${whatsappMsg}`;

            return (
              <div
                key={service.id}
                className={`glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border ${
                  service.popular ? 'border-amber-500/40 bg-slate-900/80 shadow-lg shadow-amber-500/5' : 'border-white/10'
                }`}
              >
                {/* Popular / Badge Banner */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                    {renderServiceIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-amber-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-400 transition-colors flex items-center justify-center"
                    title={`Chat on WhatsApp regarding ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={onInquireService}
      />
    </section>
  );
};
