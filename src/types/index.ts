export type NavItem = {
  label: string;
  href: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export type CollectionItem = {
  id: string;
  volume: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

export type PortfolioItem = {
  id: string;
  category: 'Residential' | 'Commercial' | 'Custom';
  title: string;
  image: string;
  aspect: 'square' | '3/4' | '4/5';
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
  number: string;
};

