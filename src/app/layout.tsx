import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { GrainOverlay } from '@/components/cinematic/GrainOverlay';
import { VignetteOverlay } from '@/components/cinematic/VignetteOverlay';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PageTransition } from '@/components/layout/PageTransition';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { siteConfig } from '@/data/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'The Craftex',
    template: '%s | The Craftex Studio'
  },
  description: siteConfig.description,
  keywords: [
    'luxury interiors',
    'bespoke furniture',
    'cinematic web design',
    'craftsmanship studio',
    'editorial architecture'
  ],
  openGraph: {
    title: 'The Craftex Studio',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'The Craftex Studio',
    type: 'website',
    images: [{ url: siteConfig.ogImage }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Craftex Studio',
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          <GrainOverlay />
          <VignetteOverlay />
          <Navbar />
          <main className="pt-24">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
