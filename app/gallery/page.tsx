import { Metadata } from 'next';
import { GalleryGrid } from '@/components/GalleryGrid';
import { client } from '@/sanity/lib/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';
import { GalleryItem, SanityGalleryImage } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Travel Gallery - GV Travel',
  description: 'A glimpse into our family travels around the world.',
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
    <div className="bg-[var(--color-background)] py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-[0.3em] mb-4">
            Visual Expeditions
          </h2>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
            The Magic Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-main)] opacity-80 font-medium">
            A window into the unforgettable moments we&apos;ve captured across the seas and through the magic kingdoms.
          </p>
        </div>
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}
