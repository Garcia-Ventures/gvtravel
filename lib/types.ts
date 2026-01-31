export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishDate: string;
  tags: string[];
  imageUrl?: string;
  content?: string; // Markdown or HTML content
}

export interface GalleryItem {
  id: string;
  title: string;
  destination: string; // e.g., "Alaska", "Caribbean"
  imageUrl: string;
  tripDate?: string;
}

export interface TripInquiry {
  formName: string; // "trip-inquiry"
  name: string;
  email: string;
  phone?: string;
  contactMethod?: 'email' | 'phone' | 'text';
  travelers: {
    adults: number;
    children: number;
    childAges?: string;
  };
  dates?: string;
  departureCity?: string;
  budget?: string;
  tripType: 'cruise' | 'resort' | 'tour' | 'combo' | 'other';
  destinations?: string[];
  cruiseLines?: string[];
  cabinType?: 'inside' | 'oceanview' | 'balcony' | 'suite' | 'any';
  specialOccasion?: string;
  flexibledates?: boolean;
  notes?: string;
  consent: boolean;
}

import { PortableTextBlock } from 'sanity';

export interface SanityPost {
  slug: string;
  title: string;
  summary?: string;
  publishDate: string;
  tags?: string[];
  imageUrl?: string;
  body?: PortableTextBlock[];
}

export interface SanityGalleryImage {
  id: string;
  title?: string;
  destination?: string;
  imageUrl: string;
}

export interface SanityGallery {
  title: string;
  images: SanityGalleryImage[];
}
