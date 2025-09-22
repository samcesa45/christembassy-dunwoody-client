import Image from 'next/image';
import React from 'react';
import masonry1 from '@/images/masonry1.jpg';
import masonry2 from '@/images/masonry2.jpg';
import masonry3 from '@/images/masonry3.jpg';
import masonry4 from '@/images/masonry4.jpg';
import masonry5 from '@/images/masonry5.jpg';
import masonry6 from '@/images/masonry6.jpg';
import masonry7 from '@/images/masonry7.jpg';
const masonryImages = [
    masonry1,
    masonry2,
    masonry3,
    masonry4,
    masonry5,
    masonry6,
    masonry7,
  ];
export default function Gallery() {
  return (
    <main className="bg-white">
      <div className=" max-w-7xl mx-auto text-center py-24 px-8 lg:px-0">
        <div className="mb-6 md:mb-8">
          <h4 className="font-kumbhSans fontx-bold mb-3 text-[14px] leading-[18px] tracking-[1.8px] opacity-90 uppercase text-[#28282E]">
            PORTFOLIO
          </h4>
          <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[47px] md:leading-[52px] ">
            Our Gallery
          </h3>
        </div>
        <div>
          {/*Masonry Grid*/}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {masonryImages.map((img, i) => (
            <Image
              key={i}
              priority
              src={img}
              alt={`Gallery image ${i}`}
              width={500}
              className="w-full h-auto rounded-lg break-inside-avoid"
            />
          ))}
        </div>
          {/* Masonry Grid */}
        </div>
      </div>
    </main>
  );
}
