'use client';

import { GlassCard } from '@/components/glass-card';
import { Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const faqs = [
    {
      question: "Are you an official cable or internet service provider?",
      answer:
        "No. We are an independent third-party assistance platform. We do not provide internet, cable, or streaming services directly.",
    },
    {
      question: "Do you sell internet, cable, or streaming plans?",
      answer:
        "No. We provide guidance and assistance only. We do not sell subscriptions or plans.",
    },
    {
      question: "Do you charge for your services?",
      answer:
        "Yes. Our service fees are separate from provider charges. We charge for the assistance and guidance we provide.",
    },
    {
      question: "Will I still be billed by my service provider?",
      answer:
        "Yes. Provider billing remains unchanged. Our service fees are separate and do not replace provider charges.",
    },
    {
      question: "Are your services refundable?",
      answer:
        "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Please review our Refund Policy page for full eligibility details.",
    },
    {
      question: "Which providers do you support?",
      answer:
        "We may reference multiple providers for guidance only. Any provider mentions are strictly for informational purposes and do not indicate affiliation.",
    },
  ];

  return (
    <section className="py-20 bg-card/10 backdrop-blur-sm border-y border-border/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Questions?—</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">We've Got Answers</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about our independent service assistance.
          </p>
        </div>

        <GlassCard className="p-8" glow="blue">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/20">
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

        <GlassCard className="p-8 text-center" glow="purple">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-foreground">Didn't find your answer?</p>
            <p className="text-foreground/60 mb-4">
              Our service advisors are ready to help.
            </p>
            <a 
              href="tel:8883702357"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now (888) 370-2357
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
