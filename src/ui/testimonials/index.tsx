'use client';
import React, { useRef } from 'react';
import Carousel from './carousel';
import { motion } from 'motion/react';
type ClientProps = {
  title?: string;
};
export default function Testimonials({ title }: ClientProps) {
  const scrollRef = useRef(null);
  return (
    <section className="py-10 sm:py-35 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h2 className="text-[#1E3A8A]  text-center mx-auto  font-merriweather font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-17.5">
          Testimonials From Our Members
        </motion.h2>
        <motion.p className="font-inter max-w-[526px] mt-6 mx-auto font-normal text-[1rem] leading-7 text-center text-brand-tertiary">
          {title ??
            `Hear directly from our members and partners at Christ Embassy Dunwoody.`}
        </motion.p>
      </motion.div>
      <Carousel />
    </section>
  );
}
