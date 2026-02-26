import { GlassCard } from '@/components/glass-card';
import { HowItWorksSection } from '@/components/home/how-it-works';
import { Phone, Clock, Headphones } from 'lucide-react';

export const metadata = {
  title: 'How It Works - Infointernet',
  description: 'Learn how our cable and internet plan consultation process works. Simple, fast, and transparent.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <section className="py-20 bg-card/10 backdrop-blur-sm border-b border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Our Process—</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Transparent & Simple</span>
          </h1>
          <p className="text-xl text-foreground/70">
            We make it easy to switch to better plans and start saving.
          </p>
        </div>
      </section>

      <HowItWorksSection />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">What Happens Next</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-8" glow="blue">
              <div className="space-y-4">
                <Phone className="w-12 h-12 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Initial Assessment</h3>
                <p className="text-foreground/70">
                  We learn about your current setup, speeds, usage patterns, and budget. This takes 5-10 minutes.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <div className="space-y-4">
                <Clock className="w-12 h-12 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Research & Analysis</h3>
                <p className="text-foreground/70">
                  We compare options from all available providers in your area and calculate real long-term savings.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-8" glow="blue">
              <div className="space-y-4">
                <Headphones className="w-12 h-12 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Ongoing Support</h3>
                <p className="text-foreground/70">
                  Even after you switch, we're here to help with questions or if anything doesn't feel right.
                </p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-12 text-center space-y-6 bg-gradient-to-r from-accent/10 to-primary/10 glow-blue">
            <h3 className="text-2xl font-bold text-foreground">
              Average Time to Switch: <span className="text-accent">7-10 Business Days</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Your current service continues uninterrupted while we handle the transition. Most customers experience no downtime and start saving immediately with their first bill from the new provider.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Common Concerns—<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Answered</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8" glow="blue">
              <h3 className="font-semibold text-foreground text-lg mb-3">Will I lose service during switching?</h3>
              <p className="text-foreground/70">
                No. Your current service stays active throughout the transition. We coordinate the timing so there's zero downtime. You'll be connected the same day activation happens.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <h3 className="font-semibold text-foreground text-lg mb-3">What if I'm in a contract?</h3>
              <p className="text-foreground/70">
                Many providers have windows to switch without penalties. We analyze your contract and find the best path—whether that's waiting for a window or calculating buyout costs.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="blue">
              <h3 className="font-semibold text-foreground text-lg mb-3">Do you work with my provider?</h3>
              <p className="text-foreground/70">
                We have partnerships with major and regional providers in most areas. Even if your current provider isn't listed, we help compare to the best alternatives available.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <h3 className="font-semibold text-foreground text-lg mb-3">What if I change my mind?</h3>
              <p className="text-foreground/70">
                You have 30 days to change your mind. If you're not happy with your new service, we'll help you explore other options at no additional cost.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/10 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Start the Process?</h2>
          <p className="text-lg text-foreground/70">
            Schedule your free consultation. We'll walk through everything step-by-step.
          </p>
          <button className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
            Call Us Today
          </button>
        </div>
      </section>
    </main>
  );
}
