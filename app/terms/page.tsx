import { GlassCard } from '@/components/glass-card';
import { Phone } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - Infointernet',
  description: 'Our terms of service and user agreement.',
};

export default function TermsPage() {
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
          <h1 className="text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
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
          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              By using Infointernet services, you agree to these terms and conditions. If you do not agree, please do not use our services.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Infointernet is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services. We provide informational support only.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <strong>Important:</strong> We do not provide internet or cable services directly. We do not sell internet, cable, or streaming subscriptions. We charge a separate service/assistance fee for our guidance services.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. No Affiliation or Authorization</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Infointernet is independent and not affiliated with, authorized by, or endorsed by any internet service provider, cable company, or telecommunications provider. We do not:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Represent any specific provider or brand</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Provide official customer support for any provider</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Have certification or authorization from any provider</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive">•</span>
                <span>Sell services on behalf of any provider</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations of Liability</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              While we strive to provide accurate information, we do not guarantee the accuracy, completeness, or timeliness of all information. We are not liable for any indirect, incidental, or consequential damages resulting from your use of our services or reliance on our recommendations.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User Responsibilities</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              You are responsible for providing accurate information during consultations. You agree to verify all terms and conditions with ISPs directly before signing any contracts or committing to switching services.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation Period</h2>
            <p className="text-foreground/70 leading-relaxed">
              Any claim against Infointernet must be brought within one year of the action or omission giving rise to the claim.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              We may update these terms at any time. Continued use of our services indicates your acceptance of changes.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              For questions about these terms, contact us:
            </p>
            <div className="space-y-3">
              <a 
                href="tel:8883702357"
                className="flex items-center gap-2 text-accent hover:text-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(888) 370-2357</span>
              </a>
              <p className="text-foreground/70">Email: support@infointernet.com</p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-lg font-semibold text-foreground mb-3">Independent Service Disclosure</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only. All trademarks belong to their respective owners.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
