import { GlassCard } from '@/components/glass-card';
import { CheckCircle, Phone } from 'lucide-react';

export const metadata = {
  title: 'Refund Policy - Infointernet',
  description: 'Our refund policy for service assistance fees.',
};

export default function RefundPage() {
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
          <h1 className="text-5xl font-bold text-foreground mb-6">Refund Policy</h1>
          <p className="text-lg text-foreground/70 mb-4">
            Our refund policy for service assistance fees
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
          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">7-15 Day Refund Window</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Please review the details below for full eligibility information.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <strong>Important:</strong> This refund policy applies only to our service/assistance fees. Provider charges are separate and subject to the provider's own refund policies.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Eligibility</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Eligibility for refunds depends on:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">The type of assistance service purchased</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">Whether assistance has already been delivered</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">The time elapsed since purchase</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">The specific terms agreed upon at purchase</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">What This Refund Policy Covers</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Our refund policy covers our service/assistance fees only:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Fees paid directly to Infointernet for assistance services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Service guidance and consultation fees</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Informational support service charges</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">What This Does NOT Cover</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              This refund policy does not cover:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Charges from service providers (ISPs, cable companies, etc.)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Provider installation or equipment fees</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Early termination fees from previous providers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Provider billing or service quality issues</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Any charges not paid directly to Infointernet</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              To request a refund, contact us within the eligible timeframe:
            </p>
            <div className="space-y-3">
              <a 
                href="tel:8883702357"
                className="flex items-center gap-2 text-accent hover:text-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(888) 370-2357</span>
              </a>
              <p className="text-foreground/70"><span className="font-semibold text-foreground">Email:</span> support@infointernet.com</p>
            </div>
            <p className="text-foreground/70 mt-4 text-sm">
              Please provide your order details and reason for the refund request. Refund processing may take 7-14 business days.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">Important Notes</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Refunds are issued to the original payment method</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Partial refunds may be issued if services were partially delivered</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Refund eligibility is determined on a case-by-case basis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>All refund requests must be submitted in writing or by phone</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-lg font-semibold text-foreground mb-3">Disclaimer</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. This refund policy applies only to fees paid to Infointernet for our assistance services. Provider charges are subject to the provider's own refund policies.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
