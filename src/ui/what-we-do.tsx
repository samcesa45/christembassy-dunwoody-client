import { ArrowRightCircle} from 'lucide-react';
import Link from 'next/link';
import React, { SVGProps } from 'react';
import { FaUsers } from "react-icons/fa";


export default function WhatWeDo() {
  return (
    <main className="bg-sky-blue">
      <div className=" max-w-7xl mx-auto text-center py-24 px-8 lg:px-0">
        <div className="mb-6 md:mb-8">
          <h4 className="font-kumbhSans fontx-bold mb-3 text-[14px] leading-[18px] tracking-[1.8px] opacity-90 uppercase text-[#28282E]">
            What we do
          </h4>
          <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[47px] md:leading-[52px] ">
            Keeping Our Church Running Smoothly
          </h3>
        </div>
        <div>
          {/* cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* card 1 */}
            <div className="group relative bg-white px-8 pb-8 flex flex-col items-center shadow-[0_3px_60px_rgba(0_0_0_.04)]">
              <div className="relative inline-block text-[4.4em] mb-4  md:mb-8 size-auto leading-[1em] mt-[0.8em] border-none rounded-none">
                <PrayingHands className="mx-auto text-navyblue group-hover:text-black transition-colors cursor-pointer" />
              </div>
              <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[1.556em] md:leading-[1.214em] ">
                Our Community
              </h3>
              <p className='font-nunito text-[16px] leading-[1.65em] text-[#858689]'>
                {`At Christ Embassy Dunwoody, we are more than a church—we are a family. Our community is a place of love, support, and growth where everyone is valued and encouraged to live out their faith with joy.`}
              </p>
              <Link
                href="/contact-us"
                className="flex items-center justify-center  overflow-hidden my-4"
              >
                <span className="font-semibold text-lg max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-xs group-hover:mr-3">
                  Read More
                </span>
                <ArrowRightCircle className="transition-transform duration-500 group-hover:translate-x-0 link_icon" />
              </Link>
            </div>
            {/* card1 end */}
            {/* card2 start */}
            <div className="group relative bg-white px-8 pb-8 flex flex-col items-center shadow-[0_3px_60px_rgba(0_0_0_.04)]">
              <div className="relative inline-block text-[4.4em] mb-4  md:mb-8 size-auto leading-[1em] mt-[0.8em] border-none rounded-none">
              <FaUsers  className="w-[100px] h-[80px] mx-auto text-navyblue group-hover:text-black transition-colors cursor-pointer" />
              </div>
              <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[1.556em] md:leading-[1.214em] ">
                Church Mission
              </h3>
              <p className='font-nunito text-[16px] leading-[1.65em] text-[#858689]'>
                {`Our mission is to bring the message of God's love to all, transforming lives through the Word and the power of the Holy Spirit. We are committed to raising passionate, purpose-driven believers who impact their world for Christ.`}
              </p>
              <Link
                href="/contact-us"
                className="flex items-center justify-center  overflow-hidden my-4"
              >
                <span className="font-semibold text-lg max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-xs group-hover:mr-3">
                  Read More
                </span>
                <ArrowRightCircle className="transition-transform duration-500 group-hover:translate-x-0 link_icon" />
              </Link>
            </div>
            {/* card2 end */}
            {/* card3 start */}
            <div className="group relative bg-white px-8 pb-8 flex flex-col items-center shadow-[0_3px_60px_rgba(0_0_0_.04)]">
              <div className="relative group-hover:text-navyblue mb-4  md:mb-8 inline-block text-[4.4em] size-auto leading-[1em] mt-[0.8em] border-none rounded-none">
                <OpenBook className="mx-auto text-navyblue group-hover:text-black transition-colors cursor-pointer" />
              </div>
              <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-[14px] leading-7 md:text-[1.556em] md:leading-[1.214em] ">
                Our Mentors
              </h3>
              <p className='font-nunito text-[16px] leading-[1.65em] text-[#858689]'>
                {`We are blessed with spiritual leaders who guide us with wisdom, prayer, and love. Their mentorship helps us grow in faith, character, and purpose as we fulfill God’s calling together.`}
              </p>
              <Link
                href="/contact-us"
                className="flex items-center justify-center  overflow-hidden my-4"
              >
                <span className="font-semibold text-lg max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-xs group-hover:mr-3">
                  Read More
                </span>
                <ArrowRightCircle className="transition-transform duration-500 group-hover:translate-x-0 link_icon" />
              </Link>
            </div>
            {/* card3 end */}
          </div>
          {/* cards */}
        </div>
      </div>
    </main>
  );
}

export const PrayingHands = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="SvgjsSvg1001"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      //   xmlns:svgjs="http://svgjs.com/svgjs"
      {...props}
    >
      <defs id="SvgjsDefs1002"></defs>
      <g id="SvgjsG1008">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="80"
          height="100"
        >
          <path
            d="M31.54572 7.52631a.99942.99942 0 00-1 1v3a1 1 0 002 0v-3A.99942.99942 0 0031.54572 7.52631zM25.54572 10.06244a.99989.99989 0 00-.36622 1.36621l1.5 2.59766a1.00016 1.00016 0 001.73243-1l-1.5-2.59766A.99971.99971 0 0025.54572 10.06244zM36.41193 14.02631l1.5-2.59766a1.00027 1.00027 0 00-1.73243-1l-1.5 2.59766A1.00028 1.00028 0 0036.41193 14.02631zM59.37036 26.93524a2.07947 2.07947 0 00-2.09112 1.747c-1.04017 6.745-3.13837 5.65631-3.22449 5.65149-1.53784-.0852-2.08051-1.12549-2.11389-4.22772V18.6427a2.00355 2.00355 0 10-4.00519-.10724v9.9112c-.31787-.08167-.65521-.14972-1.00128-.21393V13.63642a2.07752 2.07752 0 00-1.66614-2.08271 2.00411 2.00411 0 00-2.33911 1.97522V28.05109c-.33814.03052-.68134.05505-1.00128.10589V17.64142a2.00358 2.00358 0 10-4.00525-.10724V29.39112c-.36255.17-.69544.34307-1.00122.515V23.64942a2.00357 2.00357 0 10-4.00525-.10743V36.20844c-1.04163 4.96624 2.11108 9.97491 4.2279 11.86535a7.7978 7.7978 0 012.02625 4.32178 1.04786 1.04786 0 001.09582.89325 23.69837 23.69837 0 0112.87128 3.0484 1.054 1.054 0 001.54413-1.11682Q53.8396 50.59022 52.9978 45.96l.21491-.42981a21.12555 21.12555 0 008.24145-16.5235A2.07277 2.07277 0 0059.37036 26.93524zM43.54584 43.52637a8.9081 8.9081 0 016.99988-8.00006A18.85618 18.85618 0 0043.54584 43.52637zM31.08386 23.54193a2.00359 2.00359 0 10-4.00525.10755v6.25665c-.30578-.17194-.63867-.345-1.00122-.515v-11.857a2.00359 2.00359 0 10-4.00525.10736V28.157c-.31994-.05084-.66314-.07537-1.00128-.10589V13.52893a2.00411 2.00411 0 00-2.33911-1.97522 2.07752 2.07752 0 00-1.66614 2.08271V28.23273c-.34607.06421-.68341.13226-1.00128.21393V18.5354a2.00356 2.00356 0 10-4.00519.10736V30.106c-.03338 3.10223-.576 4.14252-2.11389 4.22772-.08612.00482-2.18432 1.09351-3.22449-5.65149a2.07947 2.07947 0 00-2.09112-1.747 2.07277 2.07277 0 00-2.0838 2.07141 21.1452 21.1452 0 008.221 16.51258c.02044.01092.23535.44073.23535.44073q-.84192 4.63019-1.68372 9.26044a1.054 1.054 0 001.54413 1.11682 23.69837 23.69837 0 0112.87128-3.0484 1.04786 1.04786 0 001.09582-.89325 7.79667 7.79667 0 012.02643-4.32172A14.22736 14.22736 0 0031.235 38.9693a12.49343 12.49343 0 00-.15113-2.76086zM13.45428 35.52631a8.9076 8.9076 0 016.99988 8.00006A18.85618 18.85618 0 0013.45428 35.52631z"
            stroke="currentColor"
            fill="none"
            className="svgShape color000000-0 selectable w-14 h-14 mx-auto text-navyblue group-hover:text-black transition-colors cursor-pointer"
          ></path>
        </svg>
      </g>
    </svg>
  );
};

export const OpenBook = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 96.44"
       width="80"
        height="100"
      {...props}
    >
      <title>open-book</title>
      <path
        stroke="currentColor"
        fill="none"
        d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z"
      />
    </svg>
  );
};
