import type { Metadata } from 'next';

import CollectionsSection from '@/components/sections/Collections';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Special collections curated across cultural narratives and handcrafted materials.'
};

export default function CollectionsPage() {
  return <CollectionsSection />;
}

