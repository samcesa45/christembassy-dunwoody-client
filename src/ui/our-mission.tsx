'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TABS } from '@/constants';

export default function OurMission() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeContent = TABS.find((tab) => tab.id === activeTab)!;

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left: Tabs */}
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-[#1E3A8A] font-bold sm:text-3xl dark:text-neutral-200 font-merriweather">
              Our Mission And Vision
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-start p-4 md:p-5 rounded-xl transition
                      ${
                        isActive
                          ? 'bg-white shadow-md '
                          : 'hover:bg-gray-200 dark:hover:bg-neutral-700'
                      }
                    `}
                  >
                    <span className="block text-lg font-semibold">
                      {tab.title}
                    </span>
                    <span className="block mt-1 text-gray-800 dark:text-neutral-200 text-sm">
                      {tab.description}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: Tab Content */}
          <div className="lg:col-span-6">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContent.id}
                  id={`panel-${activeContent.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeContent.id}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Image
                    width={606}
                    height={606}
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="shadow-xl shadow-gray-200 w-auto lg:h-[606px] object-cover rounded-xl dark:shadow-gray-900/20"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
        </div>
      </div>
    </section>
  );
}
