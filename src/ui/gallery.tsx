import React from 'react';
import masonry1 from '@/images/masonry1.jpg';
import masonry2 from '@/images/masonry2.jpg';
import masonry3 from '@/images/masonry3.jpg';
import masonry4 from '@/images/masonry4.jpg';
import masonry5 from '@/images/masonry5.jpg';
import masonry6 from '@/images/masonry6.jpg';
import masonry7 from '@/images/masonry7.jpg';
import MasonryGallery from './masonry-gallery';

const items = [
  { src: masonry1, cols: 1 },
  { src: masonry2, cols: 2 },
  { src: masonry3, cols: 1 },
  { src: masonry4, cols: 1, rows: 5 },
  { src: masonry5, cols: 1,rows:2 },
  { src: masonry6, cols: 1 },
  { src: masonry7, cols: 2, rows:3 },
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
          <MasonryGallery
            items={items}
            defaultCols={4}
            gap={28}
            rowHeight={100}
          />
          {/* Masonry Grid */}
        </div>
      </div>
    </main>
  );
}
