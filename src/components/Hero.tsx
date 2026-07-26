import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Award, MessageSquare } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(
    "Hello GHUFRAN KING DIGITAL! I'm interested in building my digital project. Please share your services and pricing."
  )}`;

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Animated Gradient Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-amber-500/10 animate-float">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Leading Digital Agency & AI Innovators</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white">
              Build Your Digital Future with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 underline decoration-amber-500/40 decoration-wavy underline-offset-8">
                GHUFRAN KING DIGITAL
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Transforming ambitious ideas into powerful digital experiences. We deliver cutting-edge Web Development, AI Website Creation, Digital Marketing, YouTube Growth, Graphic Design, Video Editing, and IT Infrastructure tailored for explosive growth.
            </p>

            {/* Trust Badges Bullet List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Responsive & Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AI-Powered Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 VIP Support</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-card border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/10 font-bold text-sm shadow-lg shadow-emerald-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-syne font-bold text-2xl text-white">500+</p>
                <p className="text-xs text-slate-400">Projects Delivered</p>
              </div>
              <div>
                <p className="font-syne font-bold text-2xl text-amber-400">99.8%</p>
                <p className="text-xs text-slate-400">Satisfaction Rate</p>
              </div>
              <div>
                <p className="font-syne font-bold text-2xl text-white">100%</p>
                <p className="text-xs text-slate-400">Verified Quality</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dashboard Mockup & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Showcase Panel */}
            <div className="relative w-full max-w-md lg:max-w-none glass-panel rounded-3xl p-6 border border-white/15 shadow-2xl shadow-amber-500/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  GHUFRAN_KING_DIGITAL_HUB v2.6
                </span>
              </div>

              {/* Showcase Body Visual */}
              <div className="mt-5 space-y-4">
                
                {/* Hero Tech Graphic Container */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center group">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                    alt="GHUFRAN KING DIGITAL Cyber Studio"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-300">AI Web Engine</p>
                      <p className="text-[11px] text-slate-300">Active Digital Acceleration</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE ONLINE
                    </span>
                  </div>
                </div>

                {/* Quick Feature Grid inside Mockup */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
                    <div className="flex items-center gap-2 text-amber-400 mb-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-xs font-bold text-white">Speed Optimization</span>
                    </div>
                    <p className="text-[11px] text-slate-400">99+ Google Lighthouse Score</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
                    <div className="flex items-center gap-2 text-amber-400 mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-bold text-white">AI Automation</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Custom Workflows & Bots</p>
                  </div>
                </div>

              </div>

              {/* Floating Badge Overlay 1 */}
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-2xl border border-amber-500/40 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Trusted Security</p>
                  <p className="text-[10px] text-slate-400">SSL & Cloud Hosting</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
