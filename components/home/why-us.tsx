'use client';

import { GlassCard } from '@/components/glass-card';
import Image from 'next/image';
import { Heart, Lightbulb, Users, Award, Star } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
    {
      icon: Heart,
      title: "We're Independent",
      description: "No commissions. No affiliate links. Just honest advice focused on what's best for you.",
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Our specialists stay current on industry changes, new providers, and better pricing.",
    },
    {
      icon: Users,
      title: "Real Testimonials",
      description: "Thousands of customers have already saved money through our recommendations.",
    },
    {
      icon: Award,
      title: "No Pressure Guarantee",
      description: "We explain your options. You make the choice. It's that simple.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Why Customers </span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Trust Us</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We put you first. Always. That's what makes us different from the ISPs.
          </p>
        </div>

        {/* Bento Grid - Mixed Content with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Card 1 - Large */}
          <div className="lg:col-span-2 lg:row-span-1 relative rounded-2xl overflow-hidden group h-80">
            <Image
              src="/images/experts-team.jpg"
              alt="Expert Team"
              width={800}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent flex items-end p-6 z-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Expert Knowledge</h3>
                <p className="text-foreground/70">Industry veterans with decades of experience</p>
              </div>
            </div>
          </div>

          {/* Text Card - Small */}
          <GlassCard className="p-6 flex flex-col justify-between glow-blue" glow="blue">
            <div className="space-y-3">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="font-bold text-foreground">100% Independent</h3>
              <p className="text-sm text-foreground/70">No commissions or affiliate bias. Pure honest advice for you.</p>
            </div>
          </GlassCard>

          {/* Image Card 2 - Medium */}
          <div className="md:col-span-1 lg:col-span-1 relative rounded-2xl overflow-hidden group h-64">
            <Image
              src="/images/customer-support.jpg"
              alt="Customer Support"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end p-4 z-10">
              <div>
                <h3 className="text-lg font-bold text-foreground">24/7 Support</h3>
                <p className="text-xs text-foreground/70">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Text Card */}
          <GlassCard className="p-6 flex flex-col justify-between glow-purple" glow="purple">
            <div className="space-y-3">
              <Lightbulb className="w-6 h-6 text-secondary" />
              <h3 className="font-bold text-foreground">Expert Insights</h3>
              <p className="text-sm text-foreground/70">Current on all industry changes and provider updates.</p>
            </div>
          </GlassCard>

          {/* Image Card 3 - Large */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group h-80">
            <Image
              src="/images/transparency.jpg"
              alt="Transparency"
              width={800}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent flex items-end p-6 z-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Complete Transparency</h3>
                <p className="text-foreground/70">See every cost, every detail, before you decide</p>
              </div>
            </div>
          </div>

          {/* Text Cards */}
          {[
            { icon: Users, title: 'Real Testimonials', desc: 'Thousands of satisfied customers' },
            { icon: Award, title: 'No Pressure', desc: 'You decide. No sales pressure.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={i}
                className="p-6 flex flex-col justify-between glow-blue"
                glow={i === 0 ? 'blue' : 'purple'}
              >
                <div className="space-y-3">
                  <Icon className="w-6 h-6 text-accent" />
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Stats Section - Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-8 flex flex-col items-center text-center glow-blue" glow="blue">
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <Star className="w-5 h-5 text-accent fill-accent" />
              <Star className="w-5 h-5 text-accent fill-accent" />
              <Star className="w-5 h-5 text-accent fill-accent" />
              <Star className="w-5 h-5 text-accent fill-accent" />
            </div>
            <p className="text-4xl font-bold text-accent mb-2">4.9/5</p>
            <p className="text-foreground/70 text-sm">Customer Satisfaction</p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col items-center text-center glow-purple" glow="purple">
            <p className="text-accent text-sm font-semibold mb-2">AVERAGE SAVINGS</p>
            <p className="text-5xl font-bold text-secondary mb-2">$58</p>
            <p className="text-foreground/70 text-sm">Per month for life</p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col items-center text-center glow-blue" glow="blue">
            <p className="text-accent text-sm font-semibold mb-2">CUSTOMERS HELPED</p>
            <p className="text-5xl font-bold text-accent mb-2">12K+</p>
            <p className="text-foreground/70 text-sm">Since 2020</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
