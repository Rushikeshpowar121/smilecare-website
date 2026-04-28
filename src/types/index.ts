export interface Treatment {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryColor: string;
  icon: string;
  description: string;
  duration: string;
  fullDescription: string;
  benefits: string[];
  procedure: { step: number; title: string; description: string }[];
  eligibility: string[];
  faqs: { question: string; answer: string }[];
  relatedTreatments: string[];
}

export interface GalleryCase {
  id: string;
  category: string;
  patientCode: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  treatment: string;
}
