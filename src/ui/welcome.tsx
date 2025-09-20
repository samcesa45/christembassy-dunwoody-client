'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function Welcome() {
  return (
    <div className="max-w-5xl mx-auto mt-5 pt-5 px-4">
      <motion.h1
        //   {...fadeInUp}
        //   viewport={{ root: scrollRef }}
        //   className="font-kumbhSans font-bold text-[2.5rem] mb-4  text-center  text-[#1E3A8A]"
        className="text-[#1E3A8A]  text-center mx-auto  font-kumbhSans font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-17.5"
      >
        {'Welcome to Christ Embassy Dunwoody'}{' '}
      </motion.h1>
      <h4 className="font-kumbhSans font-bold text-[1.5rem]  text-center">
        {'Service Times: Sundays at 8am, 9:30am, & 11am'}
      </h4>
      <h4 className="font-kumbhSans font-bold text-[1.5rem]  text-center">
        {'Location: 3010 NE 14th Street, Ocala, FL 34470'}
      </h4>
      <motion.p
        // {...fadeInUp}
        // viewport={{ root: scrollRef }}
        className=" mb-10 mt-4 sm:mb-17.5 font-inter max-w-[1047px] font-normal text-[1rem] leading-7 text-center"
      >
        {`At Christ Embassy Dunwoody, you’ll be welcomed into a friendly, casual environment by people who are excited to see you. Our Sunday services have great music, a message from one of our pastors, fun and safe kids programming, and much more! We’d love to meet you, so come as you are and find out more for yourself by joining us this Sunday at Central!`}
      </motion.p>
    </div>
  );
}
