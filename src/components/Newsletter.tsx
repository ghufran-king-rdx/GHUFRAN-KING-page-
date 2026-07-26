import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-16 relative bg-slate-900/80 border-y border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GHUFRAN KING VIP INSIDER</span>
            </div>

            <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              Stay Ahead with AI & Digital Agency Insights
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Subscribe to our VIP newsletter for free AI website templates, YouTube growth strategies, marketing updates, and exclusive promo discounts.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center justify-center gap-2 text-xs font-bold animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Success! You're now subscribed to GHUFRAN KING DIGITAL VIP updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-4 py-3.5 rounded-xl glass-input text-xs text-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 transition-all shrink-0"
                >
                  <span>Subscribe VIP</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
