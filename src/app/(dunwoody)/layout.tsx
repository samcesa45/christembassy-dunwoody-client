import Footer from '@/ui/footer';
import Nav from '@/ui/nav';
import React from 'react';

export default function DunwoodyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* NAV */}
      <Nav />
      {/* NAV */}
      <main>{children}</main>
      {/* FOOTER */}
      <div className="bg-white">
        <Footer />
      </div>
      {/* FOOTER */}
    </>
  );
}
