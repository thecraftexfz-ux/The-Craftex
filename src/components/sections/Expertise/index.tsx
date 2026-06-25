import Image from 'next/image';

import { FadeUp } from '@/components/animations/FadeUp';
import { RevealMask } from '@/components/cinematic/RevealMask';
import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { expertiseItems } from '@/data/content';

export default function ExpertiseSection() {
  return (
    <CinematicSection>
      <Container>
        <div className="mb-16 grid items-end gap-gutter md:grid-cols-2">
          <FadeUp>
            <div className="glass-panel p-8 md:p-12">
              <h2 className="display-section text-primary">Unrivaled Expertise</h2>
              <p className="body-lg mt-8 max-w-xl text-on-surface-variant">
                From bespoke joinery to full-scale architectural interiors, we orchestrate the
                symphony of living.
              </p>
            </div>
          </FadeUp>
          <RevealMask className="relative aspect-[4/3] layered-shadow">
            <Image
              src="/images/2.jpeg"
              alt="Expertise interior"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          </RevealMask>
        </div>

        <div className="grid gap-x-20 gap-y-12 md:grid-cols-2">
          {expertiseItems.map((item) => (
            <FadeUp
              key={item.id}
              className="glass-panel p-8 transition-colors duration-700 md:p-10"
            >
              <p className="label-caps mb-4 text-secondary/60">{item.number}</p>
              <h3 className="headline mb-3 text-primary">{item.title}</h3>
              <p className="body-md text-on-surface-variant">{item.description}</p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </CinematicSection>
  );
}

