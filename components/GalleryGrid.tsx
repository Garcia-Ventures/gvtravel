'use client';

import { GalleryItem } from '@/lib/types';
import {
  AspectRatio,
  Card,
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
} from '@gv-tech/design-system';
import Image from 'next/image';
import React from 'react';

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [api, setApi] = React.useState<CarouselApi>(); // Added api state

  React.useEffect(() => {
    if (selectedIndex === null || !api) return;

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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={item.id || index}
            className="group relative overflow-hidden rounded-2xl border-none shadow-lg bg-[var(--color-primary-teal)]/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-default sm:cursor-pointer"
            onClick={() => {
              if (window.innerWidth >= 640) {
                setSelectedIndex(index);
              }
            }}
          >
            <AspectRatio ratio={3 / 2} className="w-full">
              <Image
                src={item.imageUrl}
                alt={item.title || 'Travel gallery image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </AspectRatio>
            {(item.title || item.destination || item.tripDate) && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-primary-teal)]/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0 text-left">
                  {item.title && (
                    <p className="text-sm font-serif font-bold text-[var(--color-background)]">{item.title}</p>
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
          </Card>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl bg-black/90 border-none p-0 text-white overflow-hidden">
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
              className="w-full h-full"
            >
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={item.id || index} className="flex flex-col items-center justify-center p-4">
                    <div className="relative aspect-[3/2] w-full max-h-[70vh]">
                      <Image
                        src={item.imageUrl}
                        alt={item.title || 'Gallery image'}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="mt-8 text-center px-6">
                      {item.title && (
                        <h3 className="text-xl font-serif font-bold text-[var(--color-accent-magic)]">{item.title}</h3>
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
                <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
              </div>
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
