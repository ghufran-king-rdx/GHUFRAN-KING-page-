import React from 'react';
import { Service } from '../types';
import { X, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello GHUFRAN KING DIGITAL! I am interested in ordering your "${service.title}" service. Please share details, pricing, and turnaround time.`
  );
  const whatsappUrl = `https://wa.me/923000000000?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-card text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            {service.badge && (
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                {service.badge}
              </span>
            )}
            <h3 className="font-syne font-extrabold text-2xl text-white mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Full Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Features Checklist */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Key Features Included:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 p-2 rounded-xl bg-slate-900/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            What You Receive:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map((deliv, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs text-slate-300">
                ⚡ {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Order via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onInquire(service.title);
            }}
            className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 transition-all cursor-pointer"
          >
            <span>Fill Online Inquiry Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
