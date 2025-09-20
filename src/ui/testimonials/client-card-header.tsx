'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import pathImg from '@/images/header-path.svg';
import { fadeInUp } from '../animation';
type Props = {
  title: string;
};

export default function ClientCardHeader({ title }: Props) {
  return (
    <motion.h2
      className="text-brand-black  mx-auto text-center font-kumbhSans text-[1.8rem] font-bold sm:text-[2.63rem] sm:leading-17.5"
      {...fadeInUp}
      viewport={{ once: true }}
    >
      <motion.span className="relative w-fit z-[1]">
        {title}
        <Image
          className="absolute bottom-1 left-0 -z-[1]"
          src={pathImg}
          width={392}
          height={13}
          loading="lazy"
          alt="Path Vector"
        />
      </motion.span>
    </motion.h2>
  );
}
