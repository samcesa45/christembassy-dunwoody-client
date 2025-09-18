import React from 'react';
import Breadcrumbs from './breadcrumbs';
type Props = {
  title: string;
  para: string;
};
export default function InneHero({ title, para }: Props) {
  return (
    <section className="bg-blend-overlay flex flex-col items-center justify-center max-h-[400px] bg-[#F0F4F7] h-screen w-full px-4">
      <div className="text-center">
        <h1 className="text-navyblue mb-4 font-kumbhSans font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-[100%] tracking-normal">
          {title}
        </h1>
        <p className="mb-7 text-black font-inter font-normal max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-3xl text-sm sm:text-[1rem] sm:leading-7 tracking-normal">
          {para}
        </p>
        <Breadcrumbs />
      </div>
    </section>
  );
}
