import Image from 'next/image';

import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { LuxuryDivider } from '@/components/ui/LuxuryDivider';

export default function ContactSection() {
  return (
    <CinematicSection className="pt-0">
      <section className="flex min-h-[calc(100vh-80px)] flex-col md:flex-row">
        <div className="relative h-[520px] w-full overflow-hidden layered-shadow md:h-auto md:w-[55%]">
          <Image
            src="/images/contact.webp"
            alt="Luxury interior"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover transition-transform duration-[2000ms] ease-luxury hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-margin-desktop left-margin-desktop hidden max-w-md md:block">
            <p className="label-caps mb-3 text-white/75">ESTABLISHED IN DUBAI</p>
            <h2 className="display-section text-white">Crafting silence in a world of noise.</h2>
          </div>
        </div>

        <div className="flex w-full items-center bg-background px-margin-mobile py-section-gap md:w-[45%] md:px-margin-desktop">
          <Container className="max-w-2xl px-0">
            <LuxuryDivider />
            <h1 className="headline mb-4 mt-8 text-primary">Start your journey</h1>
            <p className="body-md mb-10 text-on-surface-variant">
              Our consultants are ready to help you curate your personal sanctuary. Expect a response
              within 24 hours.
            </p>

            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="label-caps mb-3 block text-on-surface-variant">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Johnathan Doe"
                  className="w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 body-md text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="label-caps mb-3 block text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@studio.com"
                    className="w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 body-md text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label-caps mb-3 block text-on-surface-variant">
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 000 000 0000"
                    className="w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 body-md text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-caps mb-3 block text-on-surface-variant">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your space and vision..."
                  className="w-full resize-none border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 body-md text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                />
              </div>

              <LuxuryButton className="w-full md:w-auto">Send Inquiry</LuxuryButton>
            </form>
          </Container>
        </div>
      </section>
    </CinematicSection>
  );
}
