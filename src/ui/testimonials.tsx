'use client';
import React from 'react';
import { IoMdQuote } from 'react-icons/io';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { cardItems } from '@/constants';
export default function Testimonials() {
  return (
    <main className="bg-sky-blue">
      <div className=" max-w-7xl mx-auto  py-24 px-8 lg:px-0">
        <div className="mb-6 md:mb-8">
          <h4 className="font-kumbhSans fontx-bold mb-3 text-[14px] leading-[18px] tracking-[1.8px] opacity-90 uppercase text-[#28282E]">
            Testimonials
          </h4>
          <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[47px] md:leading-[52px] ">
            What People Say
          </h3>
        </div>
        <div>
          {/* cards */}
          <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* card 1 */}
            {cardItems.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
            {/* card1 end */}
          </div>
          {/* cards */}
        </div>
      </div>
    </main>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
  image: StaticImageData;
};

export function TestimonialCard({
  quote,
  name,
  location,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={false}
      whileHover={{ y: -10, transition: { duration: 0.4, ease: 'easeOut' } }}
      className="group relative bg-white px-8 pb-8 flex flex-col shadow-[0_3px_30px_0_rgba(0_0_0_.04)]"
    >
      <div className="relative inline-block text-[4.4em] mb-4  md:mb-8 size-auto leading-[1em] mt-[0.8em] border-none rounded-none">
        <IoMdQuote className="h-8 w-8 text-navyblue group-hover:text-black transition-all duraion-300 ease-out" />
      </div>
      <p className="font-nunito text-[17px] leading-[1.7em] text-[#28282e] transition-all duration-300 ease-out">
        {`${quote}`}
      </p>
      <div className="flex m-[26px_0_0]">
        <div className="mr-[14px]">
          <Image
            className="relative overflow-hidden rounded-full size-[78px] h-auto max-w-full"
            src={image}
            alt={name}
            width={120}
            height={120}
          />
        </div>
        <div>
          <h4 className="font-kumbhSans m-0 font-bold text-[17px] md:text-[19px] leading-[1.3em] tracking-[0px] capitalize text-[#28282E] transition-all duration-300 ease-out">
            {name}
          </h4>
          <div className="font-nunito mt-1 lg:mt-1.5 text-[15px] lg:text-[16px] leading-[1.3em] text-[#858689] opacity-80 transition-all duration-300 ease-out">
            {location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
