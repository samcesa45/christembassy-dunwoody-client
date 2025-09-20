'use client';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '../animation';
import Image from 'next/image';
import starImg from '@/images/star.png';

export default function ClientSection() {
  const scrollRef = useRef(null);
  return (
    <section className="mt-10 sm:mt-35.5 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
      <motion.div viewport={{ root: scrollRef }} {...fadeInUp}>
        <motion.h2 className="text-brand-black mx-auto text-center font-kumbhSans text-[1.8rem] font-bold sm:text-[2.63rem] sm:leading-17.5">
          Meet Our Esteemed{' '}
          <motion.span className="relative w-fit">
            Clientele
            <Image
              className="object-contain absolute w-auto h-auto sm:size-[121px] -right-6 -top-2 sm:-top-8 sm:-right-14"
              src={starImg}
              width={121}
              height={121}
              loading="lazy"
              alt="Star Image"
            />
          </motion.span>
        </motion.h2>
        <motion.p className="font-inter max-w-[526px] mt-6 mx-auto font-normal text-[1rem] leading-7 text-center text-brand-tertiary">
          {`Our clients are more than just partners — they're collaborators in
          transformation. Together, we build tailored, scalable tech strategies
          that fuel sustainable growth and operational excellence.`}
        </motion.p>
      </motion.div>
    </section>
  );
}
