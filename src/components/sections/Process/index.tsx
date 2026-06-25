import Image from 'next/image';

import { FadeUp } from '@/components/animations/FadeUp';
import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { processSteps } from '@/data/content';

export default function ProcessSection() {
  return (
    <CinematicSection>
      <Container>
        <div className="grid items-start gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="glass-panel p-8 md:p-10">
              <p className="label-caps mb-5 text-secondary">Bespoke Furniture & Interiors</p>
              <h2 className="display-section text-primary">
                Our <span className="italic text-secondary">Process</span>
              </h2>
              <p className="body-lg mt-6 max-w-sm text-on-surface-variant">
                A seamless journey from concept to creation, designed around your space.
              </p>
              </div>

              <FadeUp className="relative aspect-square overflow-hidden layered-shadow">
                <Image
                  src="/images/ourprocess.webp"
                  alt="Artisan crafting bespoke wooden furniture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1600ms] ease-luxury hover:scale-105"
                />
              </FadeUp>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-6">
            {processSteps.map((step, idx) => (
              <FadeUp key={step.id} className="glass-panel p-8 md:p-10">
                <p className="font-display text-4xl text-secondary/40">{String(idx + 1).padStart(2, '0')}</p>
                <h3 className="headline mt-2 text-primary">{step.title}</h3>
                <p className="body-md mt-3 text-on-surface-variant">{step.description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}

