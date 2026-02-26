'use client';

import { GlassCard } from '@/components/glass-card';
import { CheckCircle, XCircle } from 'lucide-react';

export function DosAndDontsSection() {
  const dos = [
    "Ask about introductory rates AND what you'll pay after",
    "Compare total costs over 12-24 months",
    "Check for hidden fees and equipment charges",
    "Ask about contract terms and early termination fees",
    "Read the fine print before committing",
  ];

  const donts = [
    "Sign up without comparing at least 3 options",
    "Chase the lowest introductory rate blindly",
    "Ignore bundle deals—they might not save you money",
    "Accept the ISP's explanation without question",
    "Stay loyal to a provider just out of habit",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Smart Shopping—</span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Do's & Don'ts</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Follow this guide before switching to avoid common mistakes.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Do's - Large Card */}
          <GlassCard className="p-8 lg:col-span-2 flex flex-col justify-between glow-blue" glow="blue">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">✓ Do This</h3>
              </div>

              <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                {dos.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Don'ts - Small Cards */}
          {donts.slice(0, 3).map((item, index) => (
            <GlassCard key={index} className="p-6 flex flex-col justify-between glow-blue" glow={index % 2 === 0 ? 'purple' : 'blue'}>
              <div className="space-y-3">
                <XCircle className="w-6 h-6 text-destructive" />
                <div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{item}</p>
                </div>
              </div>
            </GlassCard>
          ))}

          {/* Remaining Don'ts */}
          {donts.slice(3).map((item, index) => (
            <GlassCard key={index + 3} className="p-6 flex flex-col justify-between glow-blue" glow={index % 2 === 0 ? 'blue' : 'purple'}>
              <div className="space-y-3">
                <XCircle className="w-6 h-6 text-destructive" />
                <div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{item}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Pro Tip Card */}
        <GlassCard className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 glow-blue">
          <div className="flex gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <p className="font-bold text-foreground mb-2">Pro Tip</p>
              <p className="text-foreground/80">
                When comparing plans, always ask the ISP for their lowest promotional rate AND what you'll pay after the promo ends. Calculate your true annual cost.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
