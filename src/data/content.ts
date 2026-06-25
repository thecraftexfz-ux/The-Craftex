import type { ExpertiseItem, ProcessStep } from '@/types';

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'furniture',
    number: '01 / ARTISTRY',
    title: 'Bespoke Furniture Design',
    description: 'Signature pieces born from dialogue between client, space, and artisan.'
  },
  {
    id: 'heritage',
    number: '02 / HERITAGE',
    title: 'Traditional Handicrafts',
    description: 'Masterful execution of techniques carried across generations.'
  },
  {
    id: 'turnkey',
    number: '03 / EXECUTION',
    title: 'Turnkey Interior Projects',
    description: 'Comprehensive realization from architectural shell to final textile.'
  },
  {
    id: 'spatial',
    number: '04 / VISION',
    title: 'Spatial Architecture',
    description: 'Defining where light, volume, and material intersect in harmony.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'We understand your needs, space, and vision through in-depth dialogue.'
  },
  {
    id: 'concept-design',
    title: 'Concept & Design',
    description: 'Detailed concepts, sketches, and moodboards tailored to your lifestyle.'
  },
  {
    id: 'material-selection',
    title: 'Material Selection',
    description: 'Premium timber, metals, textiles, and finishes curated for permanence.'
  },
  {
    id: 'craft-production',
    title: 'Craft & Production',
    description: 'Skilled craft and precision production with rigorous quality control.'
  },
  {
    id: 'delivery-installation',
    title: 'Delivery & Installation',
    description: 'White-glove delivery and on-site installation with total care.'
  }
];

