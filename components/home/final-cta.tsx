'use client';

import { GlassCard } from '@/components/glass-card';
import { Phone } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard
          className="p-12 md:p-16 text-center space-y-8 bg-gradient-to-br from-primary/15 to-accent/15 border-primary/30 glow-blue"
          glow="blue"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">Need Independent </span>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Service Assistance?</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Talk to a third-party service advisor now for general guidance and informational support.
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href="tel:8883702357"
              className="text-4xl font-bold text-accent hover:text-accent/90 transition-colors block"
            >
              (888) 370-2357
            </a>
            <a 
              href="tel:8883702357"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8 text-base sm:text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now for Assistance
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-foreground/60 pt-4 border-t border-border/30">
            <div className="flex gap-2 items-center justify-center">
              <span className="text-accent">✓</span>
              <span>Independent guidance</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="text-accent">✓</span>
              <span>No provider affiliation</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="text-accent">✓</span>
              <span>Informational support</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
