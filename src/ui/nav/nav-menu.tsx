'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import NavMobileMenu from './nav-mobile-menu';
import { navLinks } from '@/constants';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
// import DesktopNav from './desktop-navbar';
import { ChevronDown } from 'lucide-react';

export default function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <>
      {/* Desktop Nav */}
      <div className="sm:block hidden">
        <ul className="flex items-center justify-center gap-x-1">
          {navLinks.map((link) =>
            link.hasChildren ? (
              <li key={link.id} className="relative z-[100]">
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                  <PopoverTrigger
                    asChild
                    onMouseEnter={() => setIsPopoverOpen(true)}
                    onMouseLeave={() => setIsPopoverOpen(false)}
                  >
                    <button
                      className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-black text-sm font-inter hover:text-brand-primary font-normal transition-colors focus:outline-none ${
                        pathname.startsWith(link.url) ? 'text-navyblue' : ''
                      }`}
                    >
                      {link.title}
                      <ChevronDown className="ml-1 size-4 transition-transform group-data-[state=open]:rotate-180" />
                    </button>
                  </PopoverTrigger>
                  <AnimatePresence>
                    <PopoverContent
                      onMouseEnter={() => setIsPopoverOpen(true)} // Keep open when hovering over content
                      onMouseLeave={() => setIsPopoverOpen(false)}
                      className="w-48 p-2 shadow-lg border-none bg-white"
                    >
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.children?.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.url}
                              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                pathname === child.url
                                  ? 'bg-white z-[2] text-black'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-navyblue'
                              }`}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </PopoverContent>
                  </AnimatePresence>
                </Popover>
              </li>
            ) : (
              <li key={link.id}>
                {/* <Link
                  href={link.url}
                  className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-black text-sm font-inter hover:text-navyblue font-normal transition-colors focus:outline-hidden ${pathname.startsWith(link.url) ? 'text-[#1E3A8A]' : ''}`}
                >
                  {link.title}
                </Link> */}
                <Link
                  href={link.url}
                  className={`group relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-black text-sm font-inter hover:text-navyblue font-normal transition-colors focus:outline-hidden ${pathname.startsWith(link.url) ? 'text-[#1E3A8A]' : ''}  transition duration-300"`}
                >
                  <span className="relative inline-block">
                    {/* text */}
                    <span className="relative z-10">{link.title}</span>

                    {/* underline */}
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-navyblue transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
      {/* <DesktopNav/> */}
      {/* Desktop Nav */}
      {/* hamburger */}
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Image
          aria-hidden
          src="/assets/svgs/hamburger.svg"
          alt="hamburger icon"
          width={16}
          height={13}
          className="object-contain mr-6 sm:hidden cursor-pointer"
        />
      </button>
      {/* hamburger */}
      <NavMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
