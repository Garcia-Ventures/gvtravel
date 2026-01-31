import { BlogPost, GalleryItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'alaska-cruise-adventure',
    title: '7 Days in Alaska: A Family Adventure',
    summary: 'Our experience cruising the Inside Passage with kids, from whale watching to glacier spotting.',
    publishDate: '2023-08-15',
    tags: ['Alaska', 'Cruise', 'Family'],
    // Using a reliable Alaska/Glacier photo
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    slug: 'caribbean-royal-caribbean',
    title: 'Review: Icon of the Seas',
    summary: 'Is the world’s largest cruise ship worth the hype? Here is our honest review.',
    publishDate: '2024-02-10',
    tags: ['Caribbean', 'Cruise', 'Reviews'],
    // Reliable Caribbean/Beach photo
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    slug: 'disney-wish-review',
    title: 'Magic at Sea: Disney Wish Review',
    summary: 'Exploring the newest ship in the Disney fleet. Perfect for families?',
    publishDate: '2023-11-05',
    tags: ['Disney', 'Cruise', 'Family'],
    // Reliable Cruise Ship photo
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1000',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Glacier Bay',
    destination: 'Alaska',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600',
    tripDate: 'August 2023',
  },
  {
    id: '2',
    title: 'Hubbard Glacier',
    destination: 'Alaska',
    // Using a simple mountain/snow photo
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
    tripDate: 'August 2023',
  },
  {
    id: '3',
    title: 'Nassau Sunset',
    destination: 'Caribbean',
    // Sunset/Ocean photo
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=600',
    tripDate: 'January 2024',
  },
  {
    id: '4',
    title: 'Rome Colosseum',
    destination: 'Europe',
    // Reliable Colosseum photo
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600',
    tripDate: 'June 2022',
  },
];
