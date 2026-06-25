import Image from 'next/image';

import { FadeUp } from '@/components/animations/FadeUp';
import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { LuxuryDivider } from '@/components/ui/LuxuryDivider';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function PhilosophySection() {
  return (
    <CinematicSection>
      <Container>
        <div className="grid items-center gap-gutter md:grid-cols-12">
          <div className="relative md:col-span-6 xl:col-span-5">
            <div className="editorial-image-frame relative aspect-[4/5] md:h-full md:min-h-[560px] md:aspect-auto">
              <Image
                src="/images/philosophy.jpeg"
                alt="Master craftsmanship"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="editorial-image object-cover"
              />
            </div>
          </div>

          <FadeUp className="relative md:col-span-6 md:ml-10 md:pt-12 xl:col-span-5">
            <div className="glass-panel p-8 md:p-14">
              <LuxuryDivider />
              <SectionHeading
                className="mt-8"
                eyebrow="Legacy"
                title="Crafting Spaces. Defining Moments."
                description="True luxury is felt in the weight of walnut and the whisper of grain. We bridge ancestral artistry with the modern gaze."
              />
            </div>
          </FadeUp>

        </div>
      </Container>
    </CinematicSection>
  );
}
