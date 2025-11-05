"use client";

import { Database, Lock, Key, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Record Eco-Data",
    description: "Enter verified environmental metrics like CO₂ reduction, energy savings, or waste reduction directly into the platform.",
  },
  {
    icon: Lock,
    title: "Automatic Encryption",
    description: "Data is immediately encrypted using advanced cryptographic methods, ensuring confidentiality while maintaining verifiability.",
  },
  {
    icon: Key,
    title: "Blockchain Storage",
    description: "Encrypted data is stored on the blockchain with your wallet signature, creating an immutable and timestamped record.",
  },
  {
    icon: CheckCircle,
    title: "Audit Verification",
    description: "When needed, authorized auditors can decrypt and verify your environmental impact data using secure verification keys.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple four-step process to prove your environmental impact while maintaining data security
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="p-6 space-y-4 shadow-card hover:shadow-eco transition-smooth border border-border/50 bg-card rounded-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-smooth" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-forest/10 text-forest mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground relative">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed relative">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
