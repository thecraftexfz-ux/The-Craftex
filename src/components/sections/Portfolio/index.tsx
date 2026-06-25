import Image from 'next/image';

import { FadeUp } from '@/components/animations/FadeUp';
import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { portfolio } from '@/data/portfolio';

const aspectMap = {
  square: 'aspect-square',
  '3/4': 'aspect-[3/4]',
  '4/5': 'aspect-[4/5]'
} as const;

export default function PortfolioSection() {
  return (
    <CinematicSection>
      <Container>
        <FadeUp className="mb-16">
          <div className="glass-panel p-8 text-center md:p-12">
            <p className="label-caps mb-4 text-outline">Editorial Archive</p>
            <h2 className="display-section text-primary">Selected Works</h2>
            <p className="body-lg mx-auto mt-6 max-w-2xl text-on-surface-variant italic">
              An intentional exhibition of space where ancestral craftsmanship meets contemporary
              editorial elegance.
            </p>
          </div>
        </FadeUp>

        <div className="masonry-grid">
          {portfolio.map((item) => (
            <article key={item.id} className="masonry-item group">
              <div className={`relative overflow-hidden layered-shadow ${aspectMap[item.aspect]}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1600ms] ease-luxury group-hover:scale-110"
                />
              </div>
              <p className="label-caps mt-8 text-outline">{item.category}</p>
              <h3 className="headline mt-2 text-primary">{item.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </CinematicSection>
  );
}

