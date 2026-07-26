import React, { useState, useEffect } from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Sparkles, MapPin, Globe } from 'lucide-react';

interface ContactProps {
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedServicePreset || 'Website Development',
    budget: '$150 - $500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Website Development',
        budget: '$150 - $500',
        message: ''
      });
    }, 5000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello GHUFRAN KING DIGITAL!\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nPhone/WhatsApp: ${formData.phone || 'Not provided'}\nRequested Service: ${formData.service}\nBudget Range: ${formData.budget}\n\nProject Brief: ${formData.message || 'Looking to discuss project requirements.'}`
    );
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Let's Build Something{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Extraordinary Together
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Ready to take your business or personal brand to the next level? Reach out to GHUFRAN KING DIGITAL today for a free project consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Social Community links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-7 border border-white/10 space-y-6">
              <h3 className="font-syne font-bold text-xl text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                
                {/* Official Website */}
                <a
                  href="https://www.ghufrankingdigital.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-amber-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Official Website Portal</p>
                    <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">www.ghufrankingdigital.site</p>
                  </div>
                </a>

                {/* WhatsApp Channel */}
                <a
                  href="https://whatsapp.com/channel/0029VbBwO480bIdr9QEH6k1a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Official WhatsApp Channel</p>
                    <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">GHUFRAN KING DIGITAL Channel</p>
                  </div>
                </a>

                {/* WhatsApp Community */}
                <a
                  href="https://chat.whatsapp.com/GU9yjaVaHYrKVeW83ynB6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">WhatsApp Client Community</p>
                    <p className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">Join Client & Creators Group</p>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/ghufran_king_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-sky-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Telegram Official</p>
                    <p className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">@ghufran_king_digital</p>
                  </div>
                </a>

              </div>

              {/* Working Hours & Guarantee */}
              <div className="pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1">
                <p>⚡ <strong className="text-white">Response Time:</strong> Under 30 minutes on WhatsApp & Telegram</p>
                <p>🌐 <strong className="text-white">Availability:</strong> 24/7 Global Support</p>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10 relative">
              
              <h3 className="font-syne font-bold text-2xl text-white mb-6">
                Start Your Project Inquiry
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95 duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-syne font-bold text-xl text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you for reaching out to GHUFRAN KING DIGITAL. Our senior strategist will review your inquiry and contact you within 30 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Select Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white bg-slate-900 focus:bg-slate-900"
                      >
                        {AGENCY_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white bg-slate-900 focus:bg-slate-900"
                    >
                      <option value="$100 - $300">$100 - $300 (Starter)</option>
                      <option value="$300 - $700">$300 - $700 (Pro Growth)</option>
                      <option value="$700 - $1,500+">$700 - $1,500+ (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project goals, preferred features, timeline, or links..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer hover:from-amber-400 hover:to-yellow-300 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Web Form</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct to WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
