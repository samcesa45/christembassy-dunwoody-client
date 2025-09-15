'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../buttons/button';

export interface Slide {
  image: StaticImageData;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CarouselProps {
  slides: Slide[];
  options?: any;
  autoplayDelay?: number;
}

export default function Carousel({
  slides,
  options,
  autoplayDelay = 5000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden  h-[calc(100vh-106px)]" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, idx) => (
            <div className="flex-[0_0_100%] relative h-full" key={idx}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              <div className="absolute inset-0  bg-black/40  flex flex-col items-center justify-center p-6 md:p-12">
                {/* <div className="absolute inset-0 transform translate-x-1/2 -translate-y-1/2  flex flex-col justify-end p-6 md:p-12 text-white"> */}
                <div className="max-w-3xl absolute top-[40%] flex flex-col items-center justify-center">
                  <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl lg:text-nowrap font-merriweather font-extrabold text-white">
                    {slide.title}
                  </h1>
                  <p className="text-base font-bold text-white">
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
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="cursor-pointer absolute inset-y-0 left-0 text-5xl flex items-center justify-center w-12  text-white"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="cursor-pointer absolute inset-y-0 right-0 text-5xl flex items-center justify-center w-12 text-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="cursor-pointer absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="cursor-pointer w-3 h-3 rounded-full bg-white/50 data-[active=true]:bg-white"
            data-active={emblaApi?.selectedScrollSnap() === i}
          />
        ))}
      </div>
    </div>
  );
}
