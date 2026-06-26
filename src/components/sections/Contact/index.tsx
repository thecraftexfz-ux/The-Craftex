'use client';

import Image from 'next/image';
import { type ChangeEvent, type FormEvent, useState } from 'react';

import { CinematicSection } from '@/components/cinematic/CinematicSection';
import { Container } from '@/components/layout/Container';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { LuxuryDivider } from '@/components/ui/LuxuryDivider';

const WEB3FORMS_ACCESS_KEY = '713bf321-ba00-4208-934c-2e0b615ff453';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: {
          Accept: 'application/json'
        }
      });
      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your inquiry at this time.');
      }

      setSuccessMessage(
        'Your inquiry has been received. Our consultants will respond within 24 hours.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      event.currentTarget.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your inquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CinematicSection className="pt-0">
      <section className="flex min-h-[calc(100vh-80px)] flex-col md:flex-row">
        <div className="layered-shadow relative h-[520px] w-full overflow-hidden md:h-auto md:w-[55%]">
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
              Our consultants are ready to help you curate your personal sanctuary. Expect a
              response within 24 hours.
            </p>

            {successMessage ? (
              <div
                role="status"
                className="body-md mb-8 border border-primary/30 bg-primary/5 px-5 py-4 text-primary"
              >
                {successMessage}
              </div>
            ) : null}

            {errorMessage ? (
              <div
                role="alert"
                className="body-md mb-8 border border-outline-variant/60 bg-on-surface/[0.03] px-5 py-4 text-on-surface-variant"
              >
                {errorMessage}
              </div>
            ) : null}

            <form
              action={WEB3FORMS_ENDPOINT}
              method="POST"
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Inquiry from The Craftex Website" />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
              />

              <div>
                <label htmlFor="name" className="label-caps mb-3 block text-on-surface-variant">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Johnathan Doe"
                  className="body-md w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="label-caps mb-3 block text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@studio.com"
                    className="body-md w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label-caps mb-3 block text-on-surface-variant">
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 000 000 0000"
                    className="body-md w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-caps mb-3 block text-on-surface-variant">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your space and vision..."
                  className="body-md w-full resize-none border-0 border-b border-outline-variant/50 bg-transparent px-0 py-3 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none"
                />
              </div>

              <LuxuryButton type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </LuxuryButton>
            </form>
          </Container>
        </div>
      </section>
    </CinematicSection>
  );
}
