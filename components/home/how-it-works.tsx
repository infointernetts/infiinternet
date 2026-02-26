'use client';

import { GlassCard } from '@/components/glass-card';
import { Phone, FileText, CheckCircle2 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      step: "1",
      title: "Call Our Experts",
      description: "Speak with a cable and internet specialist. They'll ask about your current setup and what matters to you.",
      details: ["No pressure", "Free consultation", "10 minutes or less"],
    },
    {
      icon: FileText,
      step: "2",
      title: "Get Personalized Analysis",
      description: "We analyze your options and find plans that match your needs and budget—not what ISPs want to sell you.",
      details: ["Unbiased comparison", "Transparent pricing", "Real savings potential"],
    },
    {
      icon: CheckCircle2,
      step: "3",
      title: "Switch & Save",
      description: "We guide you through the switching process. No technical hassle, just better plans and lower bills.",
      details: ["Simple setup", "Expert support", "Start saving immediately"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">How It Works—</span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">3 Steps to Savings</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From consultation to switching, we guide you through every step.
          </p>
        </div>

        {/* Bento Layout - Asymmetrical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 - Large Card */}
          {steps.length > 0 && (() => {
            const Icon = steps[0].icon;
            return (
              <GlassCard
                key={0}
                className="p-8 lg:col-span-2 flex flex-col justify-between glow-blue"
                glow="blue"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-6xl font-bold text-accent/30">{steps[0].step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{steps[0].title}</h3>
                    <p className="text-foreground/80 text-lg mb-4">{steps[0].description}</p>
                    <ul className="space-y-2">
                      {steps[0].details.map((detail, i) => (
                        <li key={i} className="text-foreground/70 flex gap-2">
                          <span className="text-accent font-bold">✓</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            );
          })()}

          {/* Steps 2 & 3 - Smaller Cards */}
          {steps.slice(1).map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={index + 1}
                className="p-6 flex flex-col justify-between glow-blue"
                glow={index === 0 ? 'purple' : 'blue'}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-4xl font-bold text-secondary/30">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm mb-3">{item.description}</p>
                    <ul className="space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-xs text-foreground/60 flex gap-2">
                          <span className="text-secondary">→</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 text-center glow-blue">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">The Timeline</p>
          <p className="text-2xl font-bold text-foreground mb-2">
            Most customers complete this process in <span className="text-accent">under 30 minutes</span>
          </p>
          <p className="text-foreground/60">And start saving the very next month.</p>
        </GlassCard>
      </div>
    </section>
  );
}
