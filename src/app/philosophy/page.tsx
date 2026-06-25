import type { Metadata } from 'next';

import PhilosophySection from '@/components/sections/Philosophy';
import ProcessSection from '@/components/sections/Process';

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'The ethos of The Craftex Studio: intentional luxury, thoughtful craft, timeless aura.'
};

export default function PhilosophyPage() {
  return (
    <>
      <PhilosophySection />
      <ProcessSection />
    </>
  );
}

