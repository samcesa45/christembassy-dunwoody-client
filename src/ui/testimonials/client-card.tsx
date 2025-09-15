'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
type Props = {
  id: number;
  image: StaticImageData;
  text: string;
};
type ItemProps = {
  items: Props[];
};
export default function ClientCard({ items }: ItemProps) {
  return (
    <motion.div className="mx-auto lg:max-w-5xl">
      <motion.div className="flex flex-wrap items-center  gap-x-2.5 gap-y-[49px] mt-7.5">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <ClientCardItem image={item.image} text={item.text} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const ClientCardItem = ({
  image,
  text,
}: {
  image: StaticImageData;
  text: string;
}) => {
  return (
    <div className="group cursor-pointer w-[100px] sm:w-[134px] h-[118px] sm:h-[152px] flex flex-col items-center justify-center gap-5 rounded-[20px] bg-white shadow-[0px_4px_4px_0px_#00000040] transition-all duration-300 hover:shadow-lg hover:scale-[1.03]">
      <Image
        className=""
        src={image}
        width={42}
        height={36}
        loading="lazy"
        alt={`${text} logo`}
      />
      <h6 className="font-inter font-normal max-w-[98px] text-wrap text-center text-[12px] leading-3 text-black">
        {text}
      </h6>
    </div>
  );
};
