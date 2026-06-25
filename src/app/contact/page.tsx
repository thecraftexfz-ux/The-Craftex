import type { Metadata } from 'next';

import ContactSection from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start your bespoke interiors journey with The Craftex Studio.'
};

export default function ContactPage() {
  return <ContactSection />;
}

