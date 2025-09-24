'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import prayerImg from '@/images/prayer-img.jpg';
const events = [
  {
    id: '1',
    title: 'National Gathering',
    start: '2025-09-25T10:30:00',
    end: '2025-09-25T17:00:00',
    location: 'Manhattan Club 350 5th Ave, New York',
    description:
      'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.',
    image: prayerImg,
    price: 'Free',
  },
];
export default function EventsMonthView() {
  return (
    <div>
      {/* Calenddar Body */}
      <FullCalendar
        plugins={[listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        events={events}
        height="auto"
      />
      {/* Calenddar Body */}
    </div>
  );
}
