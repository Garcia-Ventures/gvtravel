import Image from 'next/image';
import { GalleryItem } from '@/lib/types';

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <div className="aspect-[4/5] w-full relative">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-zinc-200">
              {item.destination} &bull; {item.tripDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
