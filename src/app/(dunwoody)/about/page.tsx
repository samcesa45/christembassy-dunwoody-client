import Gallery from '@/ui/gallery';
import InneHero from '@/ui/inner-hero';
import Testimonials from '@/ui/testimonials';
import VisionCarousel from '@/ui/vision-carousel';
import WhatWeDo from '@/ui/what-we-do';
import React from 'react';

export default function AboutPage() {
  return (
    <main>
      <InneHero
        title="Who We Are"
        para="We believe in the deity of Christ. (John 1: 1-4; John 10:30; Hebrews 1:1-5)."
      />
      <VisionCarousel />
      <WhatWeDo />
      <Gallery />
      <Testimonials />
    </main>
  );
}
