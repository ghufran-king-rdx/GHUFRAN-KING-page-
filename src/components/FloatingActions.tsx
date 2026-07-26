import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(
    "Hello GHUFRAN KING DIGITAL! I need assistance with a digital project."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center gap-2 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Chat with GHUFRAN KING DIGITAL on WhatsApp"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        
        <MessageSquare className="w-6 h-6 text-slate-950 fill-slate-950/20 relative z-10" />

        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs text-slate-950 pr-2 font-extrabold relative z-10">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full glass-panel border border-white/20 text-amber-400 hover:text-white hover:bg-amber-500/20 shadow-xl transition-all duration-300 animate-in fade-in cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
