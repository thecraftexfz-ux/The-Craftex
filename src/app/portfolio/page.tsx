import type { Metadata } from 'next';

import PortfolioSection from '@/components/sections/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected works from luxury residential and commercial spaces by The Craftex Studio.'
};

export default function PortfolioPage() {
  return <PortfolioSection />;
}

