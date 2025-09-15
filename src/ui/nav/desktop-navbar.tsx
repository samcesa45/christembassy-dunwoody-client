'use client';

import * as NavigationMenu from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden sm:block">
      <NavigationMenu.NavigationMenu>
        <NavigationMenu.NavigationMenuList>
          {navLinks.map((link) =>
            link.hasChildren ? (
              <NavigationMenu.NavigationMenuItem key={link.id}>
                <NavigationMenu.NavigationMenuTrigger>
                  {link.title}
                </NavigationMenu.NavigationMenuTrigger>
                <NavigationMenu.NavigationMenuContent>
                  <ul className="flex items-center justify-center gap-x-1">
                    {link.children?.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.url}
                          className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-black text-sm font-inter hover:text-brand-primary font-normal transition-colors focus:outline-hidden ${pathname === child.url ? 'text-[#1E3A8A]' : ''}`}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.NavigationMenuContent>
              </NavigationMenu.NavigationMenuItem>
            ) : (
              <NavigationMenu.NavigationMenuItem key={link.id}>
                <Link
                  href={link.url}
                  className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-black text-sm font-inter hover:text-brand-primary font-normal transition-colors focus:outline-hidden ${pathname === link.url ? 'text-[#1E3A8A]' : ''}`}
                >
                  {link.title}
                </Link>
              </NavigationMenu.NavigationMenuItem>
            ),
          )}
        </NavigationMenu.NavigationMenuList>
      </NavigationMenu.NavigationMenu>
    </div>
  );
}
