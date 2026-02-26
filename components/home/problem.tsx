'use client';

import { GlassCard } from '@/components/glass-card';
import { AlertCircle, TrendingUp, Clock, HelpCircle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: TrendingUp,
      title: 'Constant Price Hikes',
      description: 'Bills climb 5-10% yearly without service improvements.',
    },
    {
      icon: Clock,
      title: 'Locked In Contracts',
      description: 'Early termination fees trap you with outdated speeds.',
    },
    {
      icon: HelpCircle,
      title: 'Confusing Options',
      description: 'Too many plans with unclear specs and misleading ads.',
    },
    {
      icon: AlertCircle,
      title: 'Poor Support',
      description: 'Hours on hold for billing or technical questions.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">You're Paying Too Much—</span>
            <span className="bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent">Here's Why</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Millions overpay monthly. ISPs count on customers staying put. Time to take control.
          </p>
        </div>

        {/* Bento Grid - Asymmetrical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - First Problem */}
          <GlassCard
            className="p-8 lg:col-span-2 lg:row-span-2 flex flex-col justify-between glow-blue"
            glow="blue"
          >
            <div className="space-y-4">
              <div className="p-4 bg-destructive/10 rounded-lg w-fit">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Constant Price Hikes</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  The average bill increases 5-10% yearly without service improvements. Promotional rates expire, and you're left paying full price indefinitely.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-accent">Over 5 years: $600+ overpaid</p>
              </div>
            </div>
          </GlassCard>

          {/* Small Cards - Other Problems */}
          {problems.slice(1).map((problem, index) => {
            const Icon = problem.icon;
            return (
              <GlassCard
                key={index}
                className="p-6 flex flex-col justify-start glow-blue"
                glow={index % 2 === 0 ? 'blue' : 'purple'}
              >
                <div className="p-3 bg-destructive/10 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-foreground/70">{problem.description}</p>
              </GlassCard>
            );
          })}
        </div>

        {/* Large Stat Card */}
        <GlassCard className="p-8 bg-gradient-to-r from-destructive/10 to-transparent border-destructive/30 glow-blue">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0">
              <AlertCircle className="w-12 h-12 text-destructive" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-accent mb-2">$600+ per year</p>
              <p className="text-foreground/80 text-lg">
                The average American overpays yearly. We help you reclaim that money by finding better plans that actually match your needs.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
