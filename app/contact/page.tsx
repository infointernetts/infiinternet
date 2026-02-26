import { GlassCard } from '@/components/glass-card';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Infointernet',
  description: 'Get in touch with our independent service assistance team.',
};

export default function ContactPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Get In Touch—</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">We're Here to Help</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Contact our independent service assistance team for guidance and support.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <GlassCard className="p-8 text-center" glow="blue">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-foreground/70 mb-4">
                Speak with our service advisors for independent guidance.
              </p>
              <a 
                href="tel:8883702357"
                className="text-3xl font-bold text-accent hover:text-accent/90 transition-colors block mb-2"
              >
                (888) 370-2357
              </a>
              <a 
                href="tel:8883702357"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-colors text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow="purple">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-foreground/70 mb-4">
                Send us a message and we'll respond within 24 hours.
              </p>
              <a 
                href="mailto:support@infointernet.com"
                className="text-lg font-semibold text-accent hover:text-accent/90 transition-colors block mb-2"
              >
                support@infointernet.com
              </a>
              <p className="text-sm text-foreground/60">
                We answer every message personally
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow="blue">
              <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Business Hours</h3>
              <p className="text-foreground/70 mb-4">
                Our service advisors are available to assist you.
              </p>
              <p className="text-sm text-foreground/60">
                Monday - Friday<br />
                9:00 AM - 8:00 PM EST
              </p>
            </GlassCard>
          </div>

          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8" glow="purple">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">How Our Service Works</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-accent font-bold">1</span>
                  <div>
                    <p className="font-semibold text-foreground">Call Our Service Advisors</p>
                    <p className="text-sm text-foreground/60">
                      Contact us at (888) 370-2357 for independent guidance
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">2</span>
                  <div>
                    <p className="font-semibold text-foreground">Discuss Your Concerns</p>
                    <p className="text-sm text-foreground/60">
                      Tell us about your internet, cable, or streaming service questions
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">3</span>
                  <div>
                    <p className="font-semibold text-foreground">Receive General Guidance</p>
                    <p className="text-sm text-foreground/60">
                      We provide informational support and general assistance
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold">4</span>
                  <div>
                    <p className="font-semibold text-foreground">Independent Support</p>
                    <p className="text-sm text-foreground/60">
                      Get assistance from a third-party provider with no affiliation
                    </p>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/10 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70">
            Contact our independent service assistance team today.
          </p>
          <a 
            href="tel:8883702357"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            <Phone className="w-5 h-5" />
            Call Now (888) 370-2357
          </a>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-card/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-sm font-semibold text-foreground mb-2">Important Disclaimer</h3>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. We provide general guidance and informational support only. Brand names, if mentioned, are used strictly for informational purposes. All trademarks belong to their respective owners.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
