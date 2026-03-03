'use client';

import { GalleryItem } from '@/lib/types';
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Separator,
  Skeleton,
  Text,
} from '@gv-tech/ui-web';
import Image from 'next/image';
import React from 'react';

function GalleryImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none bg-[var(--color-primary-teal)]/10" />}
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [api, setApi] = React.useState<CarouselApi>(); // Added api state

  React.useEffect(() => {
    if (selectedIndex === null || !api) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        api.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        api.scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, api]); // Dependencies for the effect

  return (
    <>
      <Separator className="my-12 bg-[var(--color-primary-teal)]/10" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={item.id || index}
            className="group relative overflow-hidden rounded-2xl border-none bg-[var(--color-primary-teal)]/5 shadow-lg transition-all duration-500 hover:shadow-2xl"
          >
            <AspectRatio ratio={3 / 2} className="w-full">
              <GalleryImage
                src={item.imageUrl}
                alt={item.title || 'Travel gallery image'}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() => setSelectedIndex(index)}
                className="absolute inset-0 hidden h-full w-full rounded-none bg-transparent p-0 hover:bg-transparent sm:flex"
              >
                <span className="sr-only">Open gallery image {item.title || index + 1}</span>
              </Button>
            </AspectRatio>
            {(item.title || item.destination || item.tripDate) && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-primary-teal)]/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="translate-y-2 text-left transition-transform duration-300 group-hover:translate-y-0">
                  {item.title && (
                    <Text as="p" variant="bodySmall" className="font-serif font-bold text-[var(--color-background)]">
                      {item.title}
                    </Text>
                  )}
                  {/* {(item.destination || item.tripDate) && (
                    <p className="text-xs text-[var(--color-background)]/80">
                      {item.destination}
                      {item.destination && item.tripDate && ' • '}
                      {item.tripDate}
                    </p>
                  )} */}
                </div>
              </div>
            )}

            <CardContent className="p-4 sm:hidden">
              <Button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="w-full rounded-full bg-[var(--color-accent-magic)] text-[var(--color-cta-text)] hover:bg-[var(--color-secondary-coral)]"
              >
                View Photo
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl overflow-hidden border-none bg-black/90 p-0 text-white">
          <DialogTitle className="sr-only">Image Gallery Carousel</DialogTitle>
          <DialogDescription className="sr-only">
            View full-screen images from the travel gallery in a carousel.
          </DialogDescription>
          {selectedIndex !== null && (
            <Carousel
              setApi={setApi} // Added setApi prop
              opts={{
                startIndex: selectedIndex,
                loop: true,
              }}
              className="h-full w-full"
            >
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={item.id || index} className="flex flex-col items-center justify-center p-4">
                    <div className="relative aspect-[3/2] max-h-[70vh] w-full">
                      <Image
                        src={item.imageUrl}
                        alt={item.title || 'Gallery image'}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="mt-8 px-6 text-center">
                      {item.title && (
                        <Text as="h3" variant="h4" className="font-serif font-bold text-[var(--color-accent-magic)]">
                          {item.title}
                        </Text>
                      )}
                      {/* {(item.destination || item.tripDate) && (
                        <p className="mt-2 text-sm text-white/80">
                          {item.destination}
                          {item.destination && item.tripDate && ' • '}
                          {item.tripDate}
                        </p>
                      )} */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="left-4 border-white/20 bg-white/10 text-white hover:bg-white/20" />
                <CarouselNext className="right-4 border-white/20 bg-white/10 text-white hover:bg-white/20" />
              </div>
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
