import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel, { Slide } from './embla-carousel';
import item1 from '@/images/item1.jpg';
import item2 from '@/images/item2.jpg';
import item3 from '@/images/item3.jpg';
import item4 from '@/images/item-4.jpg';

const OPTIONS: EmblaOptionsType = {};

const slides: Slide[] = [
  {
    image: item4,
    title: `Welcome to Church!`,
    subtitle: `Connect and Grow Together`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
  {
    image: item2,
    title: `Welcome to Church!`,
    subtitle: `Connect and Grow Together`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
  {
    image: item3,
    title: `Welcome to Church!`,
    subtitle: `We are excited to welcome you home as part of our church family!`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
  {
    image: item1,
    title: `Welcome to Church!`,
    subtitle: `We are excited to welcome you home as part of our church family!`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
];

export default function VisionCarousel() {
  return (
    <div className="bg-white">
      <div className=" max-w-7xl mx-auto py-24 px-8 lg:px-0">
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </div>
    </div>
  );
}
