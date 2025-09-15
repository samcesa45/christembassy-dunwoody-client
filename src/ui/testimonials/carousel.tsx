'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { carouselItems } from '@/constants';

export default function Carousels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [,setVisibleSlides] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateVisibleSlides = () => {
      const slidesInView = emblaApi
        .scrollSnapList()
        .map((_, index) => index)
        .filter((index) => emblaApi.slidesInView().includes(index));
      setVisibleSlides(slidesInView);
    };
    emblaApi.on('select', updateVisibleSlides);
    updateVisibleSlides();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden pt-8.5 sm:pt-17.5" ref={emblaRef}>
      <div className="embla__container flex gap-8">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className="embla__slide min-w-0 flex-[0_0_100%] md:flex-[0_0_33.3333%]"
          >
            <div
              className={` ${index ? 'shadow-lg bg-white' : ''} flex px-6 py-8 flex-col items-center justify-center gap-4}`}
            >
              <div className="">
                <Image
                  className="rounded-full size-[90px]"
                  alt=""
                  width={90}
                  height={90}
                  src={item.img}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="font-inter max-w-[304px] font-normal text-[1.13rem] leading-7 text-brand-secondary text-center mt-4 sm:mt-7.5 mb-8 sm:mb-[45px]">
                {item.description}
              </p>
              <h6 className="font-inter font-semibold text-[1rem] leading-7 text-brand-secondary">
                {item.clientName}
              </h6>
              <p className="font-inter font-normal text-[1rem] leading-7 text-[#52525B]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
