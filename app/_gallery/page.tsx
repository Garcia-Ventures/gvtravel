import { GalleryGrid } from '@/components/GalleryGrid';
import { GalleryItem, SanityGalleryImage } from '@/lib/types';
import { client } from '@/sanity/lib/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Gallery - GV Travel',
  description: 'Photo moments from family cruises, Caribbean trips, and Disney travel inspiration.',
};

export default async function GalleryPage() {
  const galleryData = await client.fetch(GALLERY_QUERY);

  const galleryItems: GalleryItem[] =
    galleryData?.images?.map((img: SanityGalleryImage, index: number) => ({
      id: img.id || `gallery-image-${index}`, // Fallback ID
      title: img.title || 'Untitled',
      destination: img.destination || '',
      imageUrl: img.imageUrl,
      tripDate: '',
    })) || [];

  return (
    <div className="bg-[var(--color-background)] py-24 transition-colors duration-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-sm font-bold tracking-[0.3em] text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
            Family Travel Moments
          </h2>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
            Trip Photo Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 font-medium text-[var(--color-text-main)] opacity-80">
            A look at the destinations, ships, and moments that inspire the trips we help families plan every day.
          </p>
        </div>
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}
