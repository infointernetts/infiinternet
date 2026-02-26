import { GlassCard } from '@/components/glass-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone } from 'lucide-react';

export const metadata = {
  title: 'FAQ - Infointernet',
  description: 'Frequently asked questions about our independent service assistance for cable and internet services.',
};

export default function FaqPage() {
  const faqs = [
    {
      category: 'About Our Services',
      items: [
        {
          question: 'Are you an official cable or internet service provider?',
          answer:
            'No. We are an independent third-party assistance platform. We do not provide internet, cable, or streaming services directly. We offer guidance and informational support only.',
        },
        {
          question: 'Do you sell internet, cable, or streaming plans?',
          answer:
            'No. We provide guidance and assistance only. We do not sell internet, cable, or streaming subscriptions. We help users understand their options and navigate service-related concerns.',
        },
        {
          question: 'Are you affiliated with any service providers?',
          answer:
            'No. Infointernet is an independent third-party service assistance startup, launched in 2024, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.',
        },
        {
          question: 'Do you charge for your services?',
          answer:
            'Yes. Our service fees are separate from provider charges. We charge for the assistance and guidance we provide, which is independent of any provider billing.',
        },
      ],
    },
    {
      category: 'Service & Billing',
      items: [
        {
          question: 'Will I still be billed by my service provider?',
          answer:
            'Yes. Provider billing remains unchanged. Our service fees are separate and do not replace or include provider charges. You will continue to receive bills from your service provider directly.',
        },
        {
          question: 'Do you need my account passwords or sensitive information?',
          answer:
            'No. We never request provider passwords or sensitive account credentials. We provide general guidance only and do not need direct access to your provider accounts.',
        },
        {
          question: 'What type of assistance do you provide?',
          answer:
            'We offer general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services. This includes helping users understand service options, common connectivity concerns, and how to navigate provider processes.',
        },
      ],
    },
    {
      category: 'Providers & Coverage',
      items: [
        {
          question: 'Which providers do you support?',
          answer:
            'We may reference multiple providers for guidance purposes only. Any provider mentions are strictly for informational purposes and do not indicate affiliation, partnership, or endorsement.',
        },
        {
          question: 'Can you help me contact my service provider?',
          answer:
            'We can provide general guidance on how to contact service providers, but we are not official customer support for any brand. For official support, contact your provider directly.',
        },
      ],
    },
    {
      category: 'Refund Policy',
      items: [
        {
          question: 'Are your services refundable?',
          answer:
            'Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Please review our Refund Policy page for full eligibility details.',
        },
        {
          question: 'How do I request a refund?',
          answer:
            'To request a refund, please contact our support team at (888) 370-2357 or email support@infointernet.com. Refund eligibility depends on the service type and whether assistance has already been delivered.',
        },
      ],
    },
    {
      category: 'Technical & General',
      items: [
        {
          question: 'Can you guarantee my internet will be faster?',
          answer:
            'No. We do not provide guaranteed technical fixes or service quality guarantees. We offer guidance only. Actual service performance depends on your provider and location.',
        },
        {
          question: 'Do you provide official technical support?',
          answer:
            'No. We are not official technical support for any provider. We offer general informational assistance only. For official technical support, contact your service provider directly.',
        },
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
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Get answers to common questions about our independent service assistance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold text-accent">{category.category}</h2>
              <GlassCard className="p-8" glow={idx % 2 === 0 ? 'blue' : 'purple'}>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {category.items.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${idx}-${index}`} className="border-border/20">
                      <AccordionTrigger className="hover:text-accent transition-colors py-4 text-left">
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-card/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Still Have Questions?</span>
          </h2>
          
          <GlassCard className="p-8 text-center space-y-6" glow="blue">
            <h3 className="text-xl font-semibold text-foreground">Contact Our Service Advisors</h3>
            <div className="space-y-4">
              <a 
                href="tel:8883702357" 
                className="text-accent text-3xl font-bold hover:text-accent/90 transition-colors block"
              >
                (888) 370-2357
              </a>
              <a 
                href="tel:8883702357"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <p className="text-foreground/60 text-sm">
              Talk to a service advisor • Independent assistance
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-card/10 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6 bg-accent/5 border-accent/20" glow="none">
            <h3 className="text-sm font-semibold text-foreground mb-2">Disclaimer</h3>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only. All trademarks belong to their respective owners.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

  return (
    <main>
      <section className="py-20 bg-card/10 backdrop-blur-sm border-b border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Questions?—</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">We Have Answers</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Get answers to common questions about cable and internet plans.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold text-accent">{category.category}</h2>
              <GlassCard className="p-8" glow={idx % 2 === 0 ? 'blue' : 'purple'}>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {category.items.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${idx}-${index}`} className="border-border/20">
                      <AccordionTrigger className="hover:text-accent transition-colors py-4 text-left">
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Still Have Questions?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center space-y-4" glow="blue">
              <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
              <p className="text-accent text-2xl font-bold">(888) XXX-XXXX</p>
              <p className="text-foreground/70 text-sm">Mon-Fri, 8am-8pm EST</p>
            </GlassCard>

            <GlassCard className="p-8 text-center space-y-4" glow="purple">
              <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
              <p className="text-accent text-lg">hello@infointernet.com</p>
              <p className="text-foreground/70 text-sm">Response within 24 hours</p>
            </GlassCard>

            <GlassCard className="p-8 text-center space-y-4" glow="blue">
              <h3 className="text-xl font-semibold text-foreground">Live Chat</h3>
              <p className="text-foreground/70 text-sm">Available on our website</p>
              <p className="text-foreground/70 text-sm">10am-6pm EST, 7 days a week</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/10 backdrop-blur-sm border-t border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-foreground">How to Use This </span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Guide</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8" glow="blue">
              <h3 className="font-semibold text-foreground text-lg mb-4">Start Here</h3>
              <ol className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>Read through the categories above for quick answers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>Click questions to expand detailed answers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>Use the contact options if you need more help</span>
                </li>
              </ol>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <h3 className="font-semibold text-foreground text-lg mb-4">Next Steps</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  <span>Schedule a free consultation to discuss your specific situation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  <span>Learn more about our process on the How It Works page</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  <span>Explore our full service offerings and guarantees</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Save?</h2>
          <p className="text-lg text-foreground/70">
            Get your free consultation today. No obligations, no pressure. Just expert guidance on saving money.
          </p>
          <button className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
