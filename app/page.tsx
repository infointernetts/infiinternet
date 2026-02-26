import { HeroSection } from '@/components/home/hero';
import { ProblemSection } from '@/components/home/problem';
import { HowItWorksSection } from '@/components/home/how-it-works';
import { DosAndDontsSection } from '@/components/home/dos-donts';
import { WhyUsSection } from '@/components/home/why-us';
import { FaqSection } from '@/components/home/faq';
import { FinalCtaSection } from '@/components/home/final-cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <DosAndDontsSection />
      <WhyUsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
