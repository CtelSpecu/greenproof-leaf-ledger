"use client";

import { Shield, Lock, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 gradient-hero opacity-90" />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 text-forest text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>Blockchain-Verified Environmental Impact</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Prove Impact Without <span className="text-forest">Exposure</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Record verified eco-data in encrypted form. Decrypt only when needed for audit verification. 
            Trust through transparency, security through encryption.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('record')}
              className="px-6 py-3 rounded-lg bg-forest hover:bg-forest-light text-primary-foreground transition-smooth shadow-eco font-medium"
            >
              Start Recording Data
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="px-6 py-3 rounded-lg border-2 border-forest/30 hover:border-forest hover:bg-forest/5 transition-smooth font-medium"
            >
              Learn More
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-forest" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-forest" />
              <span>Audit-Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-forest" />
              <span>Blockchain-Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
