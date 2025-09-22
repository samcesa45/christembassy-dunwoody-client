'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './emblacarouselarrowbuttons';
import Fade from 'embla-carousel-fade';
import Image, { StaticImageData } from 'next/image';
export type Slide = {
  image: StaticImageData;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
};
export type Props = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

export default function EmblaCarousel({ slides, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  // const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="embla">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex touch-pan-y touch-pinch-zoom ml-[calc(1rem) * -1]">
            {slides?.map((img, index) => (
              <div
                className="embla__slide transform-3d flex-[0_0_100%] min-w-0 "
                key={index}
              >
                <Image
                  src={img.image}
                  alt=""
                  width={658}
                  height={600}
                  className="select-none max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <h4 className="font-kumbhSans font-bold mb-3 text-[14px] leading-[18px] tracking-[1.8px] opacity-90 uppercase text-[#28282E]">
            Our Vision
          </h4>
          <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[47px] md:leading-[52px] ">
            We Live to Glorify God in All We Do
          </h3>
          <p className="text-[#858689] my-[1.5em]">
            To take the divine presence of God to the nations and peoples of the
            world; and to demonstrate the character of the Spirit.
          </p>
          <div className="embla__controls grid justify-between gap-5 mt-7 grid-cols-[auto_1fr]">
            <div className="embla__buttons grid items-center gap-2.5 grid-cols-2">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
