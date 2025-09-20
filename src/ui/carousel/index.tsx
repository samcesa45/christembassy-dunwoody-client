'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../buttons/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fadePlugin from 'embla-carousel-fade'
export interface Slide {
  image: StaticImageData;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true,containScroll: false },
   [fadePlugin()],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // helpers
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[calc(100vh-106px)]">
      {/* Carousel Viewport */}
      <div className="embla overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="embla__container absolute inset-0 w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-colors duration-500 ease-in-out ${
              idx === selectedIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blend-overlay bg-black/30 flex flex-col items-center justify-center p-6 md:p-12">
                <div className="max-w-3xl absolute top-[40%] flex flex-col items-center justify-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[96px] lg:leading-[92px] lg:text-nowrap font-kumbhSans font-extrabold text-white">
                    {slide.title}
                  </h1>
                  <p className="text-base font-bold font-nunito text-white">
                    {slide.subtitle}
                  </p>
                  {slide.buttonText && (
                    <Button className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 mt-2 font-poppins font-bold text-white rounded-[100px] border-none capitalize flex items-center justify-center py-1 px-6">
                      <Link href={slide.buttonLink || '#'} className="">
                        {slide.buttonText}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Navigation Controls (now siblings of the carousel) */}
      <button
        onClick={scrollPrev}
        className="cursor-pointer absolute inset-y-0 left-0 flex items-center justify-center w-12 text-white z-20"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      </button>
      <button
        onClick={scrollNext}
        className="cursor-pointer absolute inset-y-0 right-0 flex items-center justify-center w-12 text-white z-20"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      </button>

      <div className="cursor-pointer absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => {
          const active = selectedIndex === i;
          return (
          <button
            key={i}
            type='button'
            onPointerDown={() => setSelectedIndex(i)}
            onClick={() => scrollTo(i)}
            className="cursor-pointer w-3 h-3 rounded-full bg-white data-[active=true]:bg-navyblue"
            data-active={active}
            aria-pressed={active}
          />
        )})}
      </div>
    </div>
  );
}