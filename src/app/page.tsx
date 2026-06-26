import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import CollectionsSection from '@/components/sections/Collections';
import ContactSection from '@/components/sections/Contact';
import ExpertiseSection from '@/components/sections/Expertise';
import PhilosophySection from '@/components/sections/Philosophy';
import ProcessSection from '@/components/sections/Process';

const HeroSection = dynamic(() => import('@/components/sections/Hero'));
const PortfolioSection = dynamic(() => import('@/components/sections/Portfolio'));

export const metadata: Metadata = {
  title: {
    absolute: 'The Craftex'
  },
  description:
    'Award-winning cinematic luxury experience by The Craftex Studio. Bespoke interiors, editorial portfolio, and handcrafted design narratives.'
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <CollectionsSection />
      <ExpertiseSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}

