import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

/* ── Shared entrance variants ────────────────────────────────────────────── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 16, duration: 0.6 },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 16, duration: 0.6 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 16, duration: 0.6 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 16, duration: 0.6 },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* ── Reusable entrance-motion wrapper components ─────────────────────────── */

export const FadeInUp = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={fadeInUp}
    {...props}
  />
);

export const FadeIn = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div initial='hidden' animate='visible' variants={fadeIn} {...props} />
);

export const SlideInLeft = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={slideInLeft}
    {...props}
  />
);

export const SlideInRight = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={slideInRight}
    {...props}
  />
);

export const ScaleIn = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div initial='hidden' animate='visible' variants={scaleIn} {...props} />
);

export const StaggerContainer = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={staggerContainer}
    {...props}
  />
);

export const StaggerContainerSlow = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={staggerContainerSlow}
    {...props}
  />
);

export const MotionSection = (props: HTMLMotionProps<'section'> & { children: React.ReactNode }) => (
  <motion.section
    initial='hidden'
    animate='visible'
    variants={fadeInUp}
    {...props}
  />
);

export const PageWrapper = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    {...props}
  />
);
