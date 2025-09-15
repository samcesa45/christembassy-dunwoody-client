import React from 'react';
import YnsLink from '../yns-link';
import Image from 'next/image';
import NavMenu from './nav-menu';
import logo from '@/images/logo.jpg';

export default function Nav() {
  return (
    <header className="z-50 py-6 sticky top-0 backdrop-blur-md  text-black bg-white nav-border-reveal">
      <div className="mx-auto flex max-w-7xl items-center justify-between  gap-x-2 px-4 flex-row sm:px-6 lg:px-8">
        <YnsLink href="/">
          <Image
            className="h-14 w-auto object-contain"
            src={logo}
            alt="dunwoodylogo"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </YnsLink>

        <div className="max-w-full flex items-center shrink w-auto overflow-auto max-sm:order-2">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
