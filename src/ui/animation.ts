export const fadeInUp = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  transition: { delay: 0.3, duration: 0.8 },
};

export const marquee = {
  animate: { x: ['0%', '-50%'] },
  transition: { duration: 30, repeat: Infinity, ease: 'linear' },
};

export const floatUpDown = (offset = 15, duration = 4) => ({
  animate: {
    y: [0, -offset, 0],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, easeOut: 'easeOut' },
  },
};
