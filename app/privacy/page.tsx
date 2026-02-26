import { GlassCard } from '@/components/glass-card';
import { Phone } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Infointernet',
  description: 'Our privacy policy and how we protect your data.',
};

export default function PrivacyPage() {
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
          <h1 className="text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We collect information you provide directly to us, such as your name, phone number, email address, current ISP, current plan details, and service address. This information is used solely to provide consultation services.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>To provide cable and internet guidance services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>To analyze your current plan and identify savings opportunities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>To follow up with consultation results and recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>To communicate about your switching process</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>To improve our services based on feedback</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
            <p className="text-foreground/70 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted and stored securely.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Sharing</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with internet service providers only when you authorize us to proceed with a switch, and only the information necessary to complete the transaction.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="blue">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us directly.
            </p>
          </GlassCard>

          <GlassCard className="p-8" glow="purple">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              If you have questions about this privacy policy, please contact us:
            </p>
            <div className="space-y-3">
              <a 
                href="tel:8883702357"
                className="flex items-center gap-2 text-accent hover:text-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(888) 370-2357</span>
              </a>
              <p className="text-foreground/70">Email: privacy@infointernet.com</p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-sm font-semibold text-foreground mb-2">Disclaimer</h3>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. We provide general guidance and informational support only.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
