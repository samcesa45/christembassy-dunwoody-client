import React from 'react';
import heroImg1 from '@/images/christ_embassy1.jpeg';
import heroImg7 from '@/images/christ_embassy7.jpg';
import heroImg8 from '@/images/christ_embassy8.jpg';
import Carousel, { Slide } from './carousel';

const slides: Slide[] = [
  {
    image: heroImg8,
    title: `We Can't Wait To Meet You!`,
    subtitle: `We are excited to welcome you home as part of our church family!`,
    buttonText: 'Get Started',
    buttonLink: '#',
  },
  {
    image: heroImg7,
    title: `We Can't Wait To Meet You!`,
    subtitle: `We are excited to welcome you home as part of our church family!`,
    buttonText: 'Get Started',
    buttonLink: '#',
  },
  {
    image: heroImg1,
    title: `We Can't Wait To Meet You!`,
    subtitle: `We are excited to welcome you home as part of our church family!`,
    buttonText: 'Get Started',
    buttonLink: '#',
  },
];

export default function Hero() {
  return (
    <main className="pb-10">
      <Carousel slides={slides} autoplayDelay={5000} options={{ loop: true }} />
    </main>
  );
}
