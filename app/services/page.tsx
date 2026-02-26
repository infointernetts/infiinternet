import { GlassCard } from '@/components/glass-card';
import { TrendingDown, Zap, BarChart3, Shield, Phone } from 'lucide-react';

export const metadata = {
  title: 'Services - Infointernet',
  description: 'Learn about our independent service assistance for internet and cable services.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: BarChart3,
      title: 'Service Understanding',
      description:
        'We help you understand your current internet and cable service options through independent guidance and informational support.',
      details: [
        'General service information',
        'Understanding plan options',
        'Guidance on service features',
        'Assistance with service questions',
      ],
    },
    {
      icon: TrendingDown,
      title: 'Informational Support',
      description:
        'Receive general guidance on navigating internet and cable service providers, including understanding billing and contracts.',
      details: [
        'General provider information',
        'Understanding service terms',
        'Guidance on provider processes',
        'Informational assistance',
      ],
    },
    {
      icon: Zap,
      title: 'Connectivity Guidance',
      description:
        'Get general guidance on common connectivity concerns and understanding internet speed requirements for your usage.',
      details: [
        'Understanding speed options',
        'General connectivity guidance',
        'Information on service types',
        'General technical guidance',
      ],
    },
    {
      icon: Shield,
      title: 'Independent Assistance',
      description:
        'Receive assistance from an independent third-party provider with no affiliation to any internet or cable service provider.',
      details: [
        'Unbiased guidance',
        'No provider affiliation',
        'Independent support',
        'General informational help',
      ],
    },
  ];

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
            <span className="text-foreground">Our Services—</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Independent Assistance</span>
          </h1>
          <p className="text-xl text-foreground/70">
            General guidance and informational support for internet, broadband, and cable services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlassCard
                  key={index}
                  className="p-8 flex flex-col space-y-6"
                  glow={index % 2 === 0 ? 'blue' : 'purple'}
                >
                  <Icon className="w-12 h-12 text-accent" />
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-3 border-t border-border/40 pt-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="p-12 text-center space-y-6 bg-gradient-to-r from-accent/10 to-primary/10 glow-blue">
            <h3 className="text-3xl font-bold text-foreground">
              All Services Are <span className="text-accent">100% Free</span>
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We don't charge for consultations, analysis, or guidance. We make money when you save money—and not before. Your satisfaction is our only priority.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 bg-card/10 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <p className="text-4xl font-bold text-accent">$58</p>
              <p className="text-foreground/70">Average Monthly Savings</p>
              <p className="text-sm text-foreground/50">From our customers</p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl font-bold text-primary">30min</p>
              <p className="text-foreground/70">Average Consultation</p>
              <p className="text-sm text-foreground/50">To get started</p>
            </div>
            <div className="space-y-3">
              <p className="text-4xl font-bold text-accent">4.9★</p>
              <p className="text-foreground/70">Customer Rating</p>
              <p className="text-sm text-foreground/50">Across all services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Why Customers Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8" glow="blue">
              <h3 className="font-semibold text-foreground text-lg mb-3">Completely Independent</h3>
              <p className="text-foreground/70">
                We have no financial ties to any ISP. No commissions, no affiliate bonuses. Our only incentive is to find you the best deal possible.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <h3 className="font-semibold text-foreground text-lg mb-3">Transparent Pricing</h3>
              <p className="text-foreground/70">
                We show you every cost—setup fees, equipment charges, promotional rates, and what you'll pay when promotions end. No surprises.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="blue">
              <h3 className="font-semibold text-foreground text-lg mb-3">Expert Knowledge</h3>
              <p className="text-foreground/70">
                Our team stays current on every provider's offerings, new technology, and pricing changes. You get insights that ISP sales reps won't share.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <h3 className="font-semibold text-foreground text-lg mb-3">Ongoing Support</h3>
              <p className="text-foreground/70">
                Switching is just the beginning. We're here to help with setup, troubleshooting, and making sure you're genuinely satisfied.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/10 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-foreground">How We </span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Assist You</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Listen",
                description: "We listen to your questions and concerns about internet, cable, or streaming services."
              },
              {
                step: "2", 
                title: "Provide Guidance",
                description: "We offer general guidance and informational support based on your specific situation."
              },
              {
                step: "3",
                title: "Explain Options",
                description: "We help you understand your options through independent, unbiased information."
              },
              {
                step: "4",
                title: "Support",
                description: "We provide ongoing informational assistance as you navigate your service decisions."
              }
            ].map((item, index) => (
              <GlassCard key={index} className="p-6 flex gap-6 items-start" glow={index % 2 === 0 ? 'blue' : 'purple'}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-bold text-accent">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-foreground/70 mt-2">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Need Independent Assistance?</h2>
          <p className="text-lg text-foreground/70">
            Contact our service advisors for general guidance and informational support.
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
      <section className="py-12 bg-card/10 border-t border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-sm font-semibold text-foreground mb-2">Independent Service Disclosure</h3>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. We provide general guidance and informational support only. We do not sell internet, cable, or streaming plans. All service fees are separate from provider charges.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
