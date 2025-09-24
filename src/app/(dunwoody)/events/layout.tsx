import EventsTabs from '@/ui/events';
import InneHero from '@/ui/inner-hero';
import React from 'react';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-main-bg">
      <div className="max-w-7xl mx-auto pb-24 px-8 xl:px-0">
        <InneHero title="Upcoming Events" para="" />
        {/* Tabs visible on all subpages */}
        <EventsTabs />
        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}
