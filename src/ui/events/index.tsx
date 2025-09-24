'use client';
import React, { ReactElement, useRef, useState } from 'react';
import { Input } from '../form';
import { Button } from '../buttons/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname, useRouter } from 'next/navigation';
import {
  CalendarIcon,
  ChevronDown,
  Clock,
  ListIcon,
  Search,
} from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CgList } from 'react-icons/cg';
import { AnimatePresence, motion } from 'motion/react';
import FullCalendar from '@fullcalendar/react';

type TabPropType = {
  label: string;
  value: string;
  icon?: ReactElement;
};
const tabs: TabPropType[] = [
  { label: 'List', value: 'list', icon: <ListIcon className="w-5 h-5" /> },
  {
    label: 'Month',
    value: 'month',
    icon: <CalendarIcon className="w-5 h-5" />,
  },
  { label: 'Day', value: 'day', icon: <Clock className="w-5 h-5" /> },
];
export default function EventsTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const calendarRef = useRef<FullCalendar | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [gridOpen, setGridOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  //Determine which tab should be active from the current URL
  const currentTab = pathname.split('/').pop() || 'list';

  const handleTabChange = (value: string) => {
    //update URL without reload
    router.push(`/events/${value}`);
  };
  const handleDateSelect = (date: Date) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.gotoDate(date);
    }
  };
  return (
    <section className="text-center">
      <header className="relative flex py-4 px-4 md:py-0  items-center justify-between flex-wrap border md:bg-white border-[#e4e4e4] rounded-0">
        <div className="hidden md:block">
          <Input
            icon="Search"
            size={8}
            color="red"
            type="text"
            placeholder="Search for events"
            className="border-0 w-[400px] p-[22px_20px_22px_32px] focus-visible:placeholder:text-[#28282e] font-nunito placeholder:text-[#858689]  focus:border-0 focus-visible:ring-0"
          />
        </div>
        <div className="hidden md:flex md:items-center">
          <Button className="bg-navyblue uppercase border-navyblue text-white">
            Find Events
          </Button>
          <Tabs value={currentTab} onValueChange={handleTabChange}>
            <TabsList className="text-[#28282e]">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative py-9 uppercase data-[state=active]:border-b-2  data-[state=active]:border-b-[#28282e] shadow-none! data-[state=active]:shadow-none! data-[state=active]:bg-transparent rounded-none text-[#28282e]! font-kumbhSans font-bold text-[13px] leading-6 tracking-[1.3px] transition-colors ease-in-out duration-300"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        {/* mobile left popover && calendar */}
        <div className="md:hidden">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <button aria-label="Pick date" className="">
                <ChevronDown className="w-4 h-4" />
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
        {/* mobile left popover && calendar */}
        {/* right actions mobile */}
        <div className="flex items-center  gap-3 md:hidden">
          {/* search toggle */}
          <button aria-label="search" onClick={() => setShowSearch((s) => !s)}>
            <Search className="w-5 h-5 text-[#28282e]" />
          </button>
          {/* grid popover for tabs */}
          <Popover open={gridOpen} onOpenChange={setGridOpen}>
            <PopoverTrigger asChild>
              <button aria-label="Views">
                <CgList className="w-8 h-8" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-main-bg shadow-lg max-w-[160px] mr-14 z-[4] p-2 border border-[#858689]">
              <div className="flex flex-col min-w-[100px]">
                {tabs.map((t) => (
                  <button
                    className="flex gap-3 py-2 px-3 hover:bg-white active:bg-white"
                    key={t.value}
                    onClick={() => {
                      setGridOpen(false);
                      handleTabChange(t.value);
                    }}
                  >
                    <span>{t.icon}</span>
                    <span className="uppercase text-[15px] leading-[21px] font-semibold font-kumbhSans text-[#28282e]">
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          {/* grid popover for tabs */}
        </div>
        {/* right actions mobile */}
      </header>

      {/* mobile search collapsible */}
      <div className="md:hidden">
        <AnimatePresence>
          {showSearch && (
            <motion.div
              className=""
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border border-[#e4e4e4] px-4 py-3">
                <Input
                  icon="Search"
                  size={8}
                  color="red"
                  type="text"
                  placeholder="Search for events"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 border-b rounded-none focus-within:ring-0 w-full p-[22px_20px_22px_32px] focus-visible:placeholder:text-[#28282e] font-nunito placeholder:text-[#858689] focus-visible:ring-0"
                />
                <Button
                  onClick={() => setShowSearch(false)}
                  className="bg-navyblue w-full uppercase border-navyblue text-white"
                >
                  Find Events
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* mobile search collapsible */}

      {/* content */}
      {/* This will be populated through dynamic routing */}
      {/* content */}
    </section>
  );
}
