'use client';

import { PhoneCta } from '@/components/phone-cta';
import { GlassCard } from '@/components/glass-card';
import Image from 'next/image';
import { Zap, Wifi, ShieldCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <div>
      {/* Modern Asymmetrical Bento Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-card/20 overflow-hidden pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid - Asymmetrical Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column - Large Text + CTA */}
            <div className="lg:col-span-1 flex flex-col justify-between lg:row-span-2">
              <div className="space-y-6 mb-8">
                <div className="space-y-3">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                    <span className="text-foreground">Expert Help for Your </span>
                    <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Internet & Cable</span>
                    <span className="text-foreground"> Services</span>
                  </h1>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
                  </p>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex gap-2 items-center">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Independent guidance only</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">No provider affiliation</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Informational support</span>
                  </div>
                </div>

                <div className="bg-card/50 border border-border/40 rounded-lg p-3">
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    <strong>Not an ISP.</strong> No brand affiliation. We provide assistance and guidance only.
                  </p>
                </div>
              </div>

              <PhoneCta size="lg" label="Call Now (888) 370-2357" subtitle="Talk to a Third-Party Service Advisor" />
            </div>

            {/* Right Column - Image Card Large */}
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/10 group-hover:from-accent/30 group-hover:to-secondary/20 transition-all duration-500 z-10" />
              <Image
                src="/images/router.jpg"
                alt="Modern WiFi Router"
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
            </div>
          </div>

          {/* Secondary Grid - Stats & Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <GlassCard className="p-6 flex flex-col items-center text-center glow-blue" glow="blue">
              <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent mb-2">Independent</p>
              <p className="text-foreground/70 text-sm">Third-party assistance provider</p>
            </GlassCard>

            {/* Stat Card 2 */}
            <GlassCard className="p-6 flex flex-col items-center text-center glow-purple" glow="purple">
              <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
                <Wifi className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-secondary mb-2">2024</p>
              <p className="text-foreground/70 text-sm">Startup launched this year</p>
            </GlassCard>

            {/* Stat Card 3 */}
            <GlassCard className="p-6 flex flex-col items-center text-center glow-blue" glow="blue">
              <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent mb-2">Support</p>
              <p className="text-foreground/70 text-sm">General guidance available</p>
            </GlassCard>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 bg-card/30 border-y border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              At Infointernet, we help users understand their internet and cable service options through independent guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle2, label: 'Understand Options', desc: 'Learn about internet and broadband services' },
              { icon: CheckCircle2, label: 'Guidance Support', desc: 'Get practical help on connectivity issues' },
              { icon: CheckCircle2, label: 'Navigate Processes', desc: 'Learn how to work with service providers' },
              { icon: CheckCircle2, label: 'General Information', desc: 'Receive informational support on cable TV' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <GlassCard key={i} className="p-4 flex flex-col gap-3" glow={i % 2 === 0 ? 'blue' : 'purple'}>
                  <Icon className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-foreground/60">{item.desc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/70">
              <strong>Our role is limited to independent guidance and assistance only.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What We Do NOT Do Section */}
      <section className="relative py-16 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Do NOT Do</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              To avoid confusion, please note the following important clarifications about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard className="p-6 border-destructive/20 bg-destructive/5" glow="none">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Not an ISP</h3>
                  <p className="text-sm text-foreground/70">We are not an Internet Service Provider (ISP) and do not provide internet services directly.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-destructive/20 bg-destructive/5" glow="none">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Not Official Support</h3>
                  <p className="text-sm text-foreground/70">We do not provide official customer support for any brand and are not authorized by any provider.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-destructive/20 bg-destructive/5" glow="none">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Affiliation</h3>
                  <p className="text-sm text-foreground/70">We are not affiliated, authorized, or endorsed by any telecom or cable company.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-destructive/20 bg-destructive/5" glow="none">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Not a Seller</h3>
                  <p className="text-sm text-foreground/70">We do not sell internet or cable subscriptions. We charge a separate service/assistance fee.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-destructive/20 bg-destructive/5" glow="none">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Guarantees</h3>
                  <p className="text-sm text-foreground/70">We do not provide guaranteed technical fixes or service quality guarantees.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-destructive/20 bg-destructive/5" glow="none">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Informational Only</h3>
                  <p className="text-sm text-foreground/70">All mentions of providers, if any, are strictly for informational purposes only.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 bg-card/30 border-y border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Infointernet</h2>
          <GlassCard className="p-8" glow="blue">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Infointernet is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              <strong>We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider.</strong> Our focus is transparency, clarity, and responsible service assistance.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
