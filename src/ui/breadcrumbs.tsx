'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="font-inter font-semibold text-sm sm:text-[1rem] sm:leading-6 tracking-normal">
      <ol className="flex items-center justify-center">
        <li>
          <Link
            href="/"
            className="group relative text-navyblue hover:text-navyblue/80  transition duration-300"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navyblue transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        {segments.map((segment, idx) => {
          const href = '/' + segments.slice(0, idx + 1).join('/');
          const label = decodeURIComponent(segment).replace(/-/g, ' ');
          const isLast = idx === segments.length - 1;
          return (
            <React.Fragment key={idx}>
              <span className="mx-2">
                <ChevronRight size={16} />
              </span>
              <li>
                {isLast ? (
                  <span className="capitalize ">{label}</span>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
