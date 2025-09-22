import InneHero from '@/ui/inner-hero';
import VisionCarousel from '@/ui/vision-carousel';
import WhatWeDo from '@/ui/what-we-do';
import React from 'react';

export default function AboutPage() {
  return (
    // <main className="max-w-7xl px-4 py-10 min-h-screen">
    <main className="">
      <InneHero
        title="Who We Are"
        para="We believe in the deity of Christ. (John 1: 1-4; John 10:30; Hebrews 1:1-5)."
      />
      <VisionCarousel />
      <WhatWeDo />
    </main>
  );
}
