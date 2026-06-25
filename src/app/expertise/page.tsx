import type { Metadata } from 'next';

import ExpertiseSection from '@/components/sections/Expertise';
import ProcessSection from '@/components/sections/Process';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Bespoke furniture, traditional handicrafts, turnkey interiors, and spatial architecture.'
};

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseSection />
      <ProcessSection />
    </>
  );
}

