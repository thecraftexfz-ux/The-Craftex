import type { Metadata } from 'next';

import ProcessSection from '@/components/sections/Process';

export const metadata: Metadata = {
  title: 'Process',
  description: 'A refined journey from consultation to white-glove installation.'
};

export default function ProcessPage() {
  return <ProcessSection />;
}

