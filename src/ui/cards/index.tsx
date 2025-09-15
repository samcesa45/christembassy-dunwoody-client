import Link from 'next/link';
import React from 'react';
import img1 from '@/images/christ_embassy3.jpg';
import img2 from '@/images/christ_embassy2.jpeg';
import img3 from '@/images/christ_embassy4.jpg';
import img4 from '@/images/christ_embassy5.jpg';
import img5 from '@/images/christ_embassy7.jpg';
import img6 from '@/images/christ_embassy1.jpeg';
import Image from 'next/image';
type cardItems = {
  id: number;
  images: string;
  title: string;
  subtitle: string;
  content: string;
  links: {
    text: string;
    url: string;
  };
};
const items = [
  {
    id: 1,
    images: img1,
    title: 'Growing with ISM on PSCDL',
    subtitle: '',
    content:
      'Be rightly positioned for your Church and Ministry with the right training and resources',
    links: {
      text: 'Buy Products',
      url: '',
    },
  },
  {
    id: 2,
    images: img2,
    title: 'Growing with ISM on PSCDL',
    subtitle: '',
    content:
      'Be rightly positioned for your Church and Ministry with the right training and resources',
    links: {
      text: 'Buy Products',
      url: '',
    },
  },
  {
    id: 3,
    images: img3,
    title: 'Growing with ISM on PSCDL',
    subtitle: '',
    content:
      'Be rightly positioned for your Church and Ministry with the right training and resources',
    links: {
      text: 'Buy Products',
      url: '',
    },
  },
  {
    id: 4,
    images: img4,
    title: 'Growing with ISM on PSCDL',
    subtitle: '',
    content:
      'Be rightly positioned for your Church and Ministry with the right training and resources',
    links: {
      text: 'Buy Products',
      url: '',
    },
  },
  {
    id: 5,
    images: img5,
    title: 'Growing with ISM on PSCDL',
    subtitle: '',
    content:
      'Be rightly positioned for your Church and Ministry with the right training and resources',
    links: {
      text: 'Buy Products',
      url: '',
    },
  },
  {
    id: 6,
    images: img6,
    title: 'Growing with ISM on PSCDL',
    subtitle: '',
    content:
      'Be rightly positioned for your Church and Ministry with the right training and resources',
    links: {
      text: 'Buy Products',
      url: '',
    },
  },
];
export default function Cards() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Card --> */}
        <CardItem items={items as unknown as cardItems[]} />
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}

type ItemsProps = {
  items: cardItems[];
};
const CardItem = ({ items }: ItemsProps) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div className="h-auto flex flex-col justify-center items-center  rounded-t-xl">
            <Image
              className="h-auto w-full object-contain"
              src={item.images}
              alt="dunwoodylogo"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              {item.subtitle}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              {item.content}
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              {item.links.text}
            </Link>
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              {item.links.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
