import { Metadata } from 'next';
import { GalleryGrid } from '@/components/GalleryGrid';
import { client } from '@/sanity/lib/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';
import { GalleryItem, SanityGalleryImage } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Travel Gallery - GV Travel',
  description: 'A glimpse into our family travels around the world.',
};

export const runtime = 'edge';
export const revalidate = 60;

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
    <div className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Travel Gallery
          </h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Snapshots from our adventures. We hope these inspire your next trip!
          </p>
        </div>
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}
