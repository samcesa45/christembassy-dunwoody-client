import React from 'react';
import heroImg1 from '@/images/cross-image.jpg';
import heroImg7 from '@/images/nail.jpg';
import heroImg8 from '@/images/christ_embassy8.jpg';
import Carousel, { Slide } from './carousel';

const slides: Slide[] = [
  {
    image: heroImg8,
    title: `Welcome to Church!`,
    subtitle: `Connect and Grow Together`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
  {
    image: heroImg7,
    title: `Welcome to Church!`,
    subtitle: `Connect and Grow Together`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
  {
    image: heroImg1,
    title: `Welcome to Church!`,
    subtitle: `We are excited to welcome you home as part of our church family!`,
    buttonText: 'Become A Partner',
    buttonLink: '/donate/partner',
  },
];

export default function Hero() {
  return (
    <main className="pb-10">
      <Carousel slides={slides} />
    </main>
  );
}
