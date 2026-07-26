import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { SocialBar } from './components/SocialBar';
import { FloatingActions } from './components/FloatingActions';
import { AIChatWidget } from './components/AIChatWidget';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string | undefined>(undefined);

  const handleOpenContactWithPreset = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreset(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased overflow-x-hidden">
      {/* Navbar */}
      <Navbar onOpenContact={handleOpenContactWithPreset} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onGetStarted={() => handleOpenContactWithPreset()} />

        {/* Services Section */}
        <Services onInquireService={handleOpenContactWithPreset} />

        {/* About Section */}
        <About onGetStarted={() => handleOpenContactWithPreset()} />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Pricing Section */}
        <Pricing onSelectPlan={(planName) => handleOpenContactWithPreset(`Pricing Plan: ${planName}`)} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Newsletter VIP */}
        <Newsletter />

        {/* Social Network Ecosystem Bar */}
        <SocialBar />

        {/* Contact & Quote Form */}
        <Contact selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Floating Action Buttons & AI Chat Widget */}
      <AIChatWidget onOpenContactWithService={handleOpenContactWithPreset} />
      <FloatingActions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
