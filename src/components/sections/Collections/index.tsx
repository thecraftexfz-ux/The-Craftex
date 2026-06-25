import Image from 'next/image';

import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { FadeUp } from '@/components/animations/FadeUp';
import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { collections } from '@/data/collections';

export default function CollectionsSection() {
  return (
    <CinematicSection>
      <Container>
        <FadeUp className="mb-16">
          <div className="glass-panel p-8 text-center md:p-12">
            <p className="label-caps mb-4 text-secondary">Special Collections</p>
            <h2 className="display-section text-primary">Curated Cultural Narratives</h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((item) => (
            <article key={item.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden layered-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-110"
                />
              </div>
              <p className="label-caps mt-8 text-secondary/70">{item.volume}</p>
              <h3 className="headline mt-2 text-primary">{item.title}</h3>
              <p className="body-md mt-4 text-on-surface-variant">{item.description}</p>
            </article>
          ))}
        </StaggerContainer>
      </Container>
    </CinematicSection>
  );
}

