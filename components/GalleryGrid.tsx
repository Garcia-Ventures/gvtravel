import Image from 'next/image';
import { GalleryItem } from '@/lib/types';

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.id || index} // Use item.id if available, otherwise index
          className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[var(--color-primary-teal)]/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg border border-[var(--color-primary-teal)]/10"
        >
          <Image
            src={item.imageUrl}
            alt={item.title || 'Travel gallery image'}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          {(item.title || item.destination || item.tripDate) && (
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-primary-teal)]/60 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                {item.title && (
                  <p className="text-sm font-serif font-bold text-[var(--color-background)]">{item.title}</p>
                )}
                {(item.destination || item.tripDate) && (
                  <p className="text-xs text-[var(--color-background)]/80">
                    {item.destination}
                    {item.destination && item.tripDate && ' • '}
                    {item.tripDate}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
