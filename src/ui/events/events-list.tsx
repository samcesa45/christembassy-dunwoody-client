'use client';
import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import prayerImg from '@/images/prayer-img.jpg';
import img2 from '@/images/item3.jpg';
import Image from 'next/image';
import { formatDateRange } from '@/lib/utils';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

const events = [
  {
    id: '1',
    title: 'National Gathering',
    start: '2025-09-25T10:30:00',
    end: '2025-09-25T17:00:00',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description:
      'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.',
    image: prayerImg,
    price: 'Free',
  },
  {
    id: '2',
    title: 'National Gathering',
    start: '2025-09-23T10:30:00',
    end: '2025-09-23T17:00:00',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description:
      'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.',
    image: img2,
    price: 'Free',
  },
];
export default function EventsListView() {
  const calendarRef = useRef<FullCalendar | null>(null);
  const handleDateSelect = (date: Date) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.gotoDate(date);
    }
  };

  return (
    <div className="relative">
      {/* Calenddar Body */}
      <FullCalendar
        ref={calendarRef}
        plugins={[listPlugin, interactionPlugin]}
        initialView="listDay"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        events={events}
        height="auto"
        eventDidMount={(info) => {
          const td = info.el.querySelector('.fc-list-event-time');
          if (td) {
            const startDate = new Date(info.event.start!);
            td.innerHTML = `
                <div>
               <span class="text-[#28282e] font-kumbhSans text-[13px] leading-4">${startDate.toLocaleDateString('en-US', { weekday: 'short' })}</span><br/>
                <span class="text-[#28282e] font-kumbhSans font-bold text-[1.4em] leading-[1.15em] lg:text-[26.452px] lg:leading-8">${startDate.getDate()}</span>
                </div>
                
                `;
          }
        }}
        eventContent={(arg) => {
          const event = events.find((e) => e.id === arg.event.id);
          if (!event) return null;
          return (
            <>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
                  <div>
                    {/* <time className="text-[#999CA7] font-nunito text-[14px] leading-[19px] font-normal before:inline-block before:content-['\\E9B7'] before:mr-[5px] before:font-fontello"> */}
                    <div className="lg:m-[0px_0px_11px]">
                      <time className="text-[#999CA7] font-nunito text-[14px] leading-[19px] font-normal">
                        <CalendarIcon className="w-4 h-4 inline-block mr-[5px]" />
                        <span>{formatDateRange(event.start, event.end)}</span>
                      </time>
                    </div>
                    <h3 className="text-[#28282E] font-bold font-kumbhSans text-[1.4em] leading-[1.15em] lg:text-[26.452px] lg:leading-[1.214em] m-[0px_0px_13px]">
                      {event.title}
                    </h3>
                    <p className="text-[#28282E] font-nunito text-[17px] leading-[21px] font-semibold mb-2.5 ">
                      {arg.timeText} <span>{event.location}</span>
                    </p>
                    <p className="text-[#858689] font-nunito text-[17px] leading-[27px] font-normal">
                      {event.description}
                    </p>
                    <div className="text-[20px] leading-[1.2em] tracking-[0px] font-bold mt-5">
                      {event.price}
                    </div>
                  </div>
                  {event.image && (
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={350}
                      height={350}
                      className="object-cover mb-3 sm:mb-0 w-auto h-auto"
                    />
                  )}
                </div>
              </div>
            </>
          );
        }}
      />
      {/* Calenddar Body */}
      {/* Inject Chevron + Popover into the toolbar */}
      <div className="fc-toolbar-chunk fc-center absolute -top-1 -right-2 sm:right-20 md:right-38 lg:right-100">
        <Popover>
          <PopoverTrigger asChild>
            <button className="ml-2 inline-flex  items-center text-gray-700 hover:text-black">
              <ChevronDown className="w-6 h-12" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="p-0 bg-main-bg border-none shadow-lg"
          >
            <Calendar
              mode="single"
              onSelect={(date) => {
                if (date) handleDateSelect(date);
              }}
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
