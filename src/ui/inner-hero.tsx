import React from 'react';
import Breadcrumbs from './breadcrumbs';
type Props = {
  title: string;
  para: string;
};
export default function InneHero({ title, para }: Props) {
  return (
    <section className="bg-blend-overlay flex flex-col items-center justify-center max-h-[250px] md:max-h-[400px] bg-main-bg h-screen w-full px-4">
      <div className="text-center">
        <h1 className="text-navyblue mb-4 font-kumbhSans font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-[100%] md:text-[57px] md:leading-[61px] tracking-normal">
          {title}
        </h1>
        <p className="mb-7 text-black font-kumbhSans font-normal max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-3xl text-sm sm:text-[21px] sm:leading-7 tracking-normal">
          {para}
        </p>
        <Breadcrumbs />
      </div>
    </section>
  );
}
