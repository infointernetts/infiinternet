import { GlassCard } from '@/components/glass-card';
import { AlertCircle, Phone } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer - Infointernet',
  description: 'Important disclaimer about our independent service assistance.',
};

export default function DisclaimerPage() {
  return (
    <main>
      {/* Compliance Disclosure Banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm text-foreground/80 text-center">
            <strong>Independent Service:</strong> Infointernet is an independent third-party service assistance startup, launched in 2024, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card/10 backdrop-blur-sm border-b border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Disclaimer</h1>
          <p className="text-lg text-foreground/70 mb-4">
            Last updated: February 2026
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="tel:8883702357"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call (888) 370-2357
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <GlassCard className="p-8 bg-destructive/5 border-destructive/20 glow-blue" glow="none">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Important Notice - Independent Third-Party Service</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We provide general guidance and informational support only. We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">We Are NOT an ISP</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Infointernet is not an Internet Service Provider (ISP). We do not:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Provide internet or cable services directly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Sell internet, cable, or streaming subscriptions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Provide official customer support for any brand</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Have authorization or certification from any provider</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Represent or partner with any telecom or cable company</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">No Guarantees Provided</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Infointernet makes no warranties, express or implied. We do not guarantee:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Specific savings amounts or percentages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Service quality from any provider</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Technical fixes or service improvements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Speed performance or reliability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Absence of service interruptions</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">Provider Terms and Conditions</h2>
            <p className="text-foreground/70 leading-relaxed">
              All internet service providers have their own terms, conditions, and policies. You are responsible for reading and understanding these directly before committing to any service. Early termination fees, contract terms, and service limitations are the responsibility of the provider and are outside Infointernet's control.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changing Provider Information</h2>
            <p className="text-foreground/70 leading-relaxed">
              Internet service providers frequently change their plans, pricing, and service offerings. While we strive to provide current information, pricing and plan availability can change at any time. We recommend verifying current offerings directly with providers.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Responsibility</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Verifying all information with providers directly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Understanding contract terms before signing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Reviewing all promotional terms and conditions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Checking what rates apply after promotional periods</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Fee Structure</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We charge a separate service/assistance fee for our guidance services. This fee is:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Separate from any provider charges</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Not a replacement for provider billing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>For our assistance and guidance services only</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              For questions about this disclaimer or our services:
            </p>
            <div className="space-y-3">
              <a 
                href="tel:8883702357"
                className="flex items-center gap-2 text-accent hover:text-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(888) 370-2357</span>
              </a>
            </div>
          </GlassCard>

          <GlassCard className="p-8 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-lg font-semibold text-foreground mb-3">Final Disclaimer</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only. All trademarks belong to their respective owners. By using our services, you acknowledge that you have read and understand this disclaimer.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
