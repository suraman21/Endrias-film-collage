import {
  motion,
  AnimatePresence,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion';

/* ── Shared spring config for organic, cinema-like motion ─────────────────── */
import type { AnimationGeneratorType, Easing } from 'framer-motion';

export const spring = {
  type: 'spring' as AnimationGeneratorType,
  stiffness: 120,
  damping: 18,
  mass: 0.9,
};

export const gentleSpring = {
  type: 'spring' as AnimationGeneratorType,
  stiffness: 100,
  damping: 17,
  mass: 0.8,
};

export const quick = { duration: 0.25, ease: 'easeOut' as Easing };

/* ── Page-level transition variants ───────────────────────────────────────── */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

/* ── Section entrance variants ────────────────────────────────────────────── */
export const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: 0.1 },
  },
};

export const sectionFadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: 0.1 },
  },
};

export const sectionFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerList: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const staggerListFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

/* ── Item variants (children of stagger containers) ───────────────────────── */
export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...gentleSpring },
  },
};

export const itemScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...gentleSpring },
  },
};

/* ── Text reveal variants (character / word stagger) ──────────────────────── */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const textStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

/* ── Hover / micro-interaction variants ───────────────────────────────────── */
export const liftHover: Variants = {
  rest: { y: 0, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

export const scaleHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.2, ease: 'easeOut' } },
};

export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.15, ease: 'easeOut' } },
  tap: { scale: 0.97 },
};

export const iconHover: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 45, scale: 1.2, transition: { duration: 0.3 } },
};

export const glowHover: Variants = {
  rest: { boxShadow: '0 0 0 rgba(255,144,0,0)' },
  hover: {
    boxShadow: '0 0 24px rgba(255,144,0,0.35)',
    transition: { duration: 0.3 },
  },
};

export const pulseSlow: Variants = {
  rest: { opacity: 0.6, scale: 1 },
  animate: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

export const floatY: Variants = {
  rest: { y: 0 },
  animate: {
    y: [-6, -12, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/* ── Page Transition component for route changes ──────────────────────────── */
export const PageTransition = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className={`min-h-screen flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

/* ── Reusable entrance-motion wrapper components ──────────────────────────── */
export const FadeInUp = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={sectionFadeUp}
    {...props}
  />
);

export const FadeInDown = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={sectionFadeDown}
    {...props}
  />
);

export const FadeIn = (props: HTMLMotionProps<'div'> & { children: React.ReactNode }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={sectionFadeIn}
    {...props}
  />
);

export const StaggerList = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={staggerList}
    {...props}
  />
);

export const StaggerListFast = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={staggerListFast}
    {...props}
  />
);

export const ItemFadeUp = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={itemFadeUp}
    {...props}
  />
);

export const ItemScale = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={itemScale}
    {...props}
  />
);

export const LiftHover = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    variants={liftHover}
    whileHover='hover'
    {...props}
  />
);

export const ScaleHover = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    variants={scaleHover}
    whileHover='hover'
    {...props}
  />
);

export const ButtonHover = (
  props: HTMLMotionProps<'button'> & { children: React.ReactNode }
) => (
  <motion.button
    variants={buttonHover}
    whileHover='hover'
    whileTap='tap'
    {...props}
  />
);

export const LinkHover = (
  props: HTMLMotionProps<'a'> & { children: React.ReactNode }
) => (
  <motion.a
    variants={buttonHover}
    whileHover='hover'
    whileTap='tap'
    {...props}
  />
);

export const GlowHover = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    variants={glowHover}
    whileHover='hover'
    {...props}
  />
);

export const PulseSlow = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    variants={pulseSlow}
    initial='rest'
    animate='animate'
    {...props}
  />
);

export const FloatY = (
  props: HTMLMotionProps<'div'> & { children: React.ReactNode }
) => (
  <motion.div
    variants={floatY}
    initial='rest'
    animate='animate'
    {...props}
  />
);

export const TextReveal = (
  props: HTMLMotionProps<'span'> & { children: React.ReactNode }
) => (
  <motion.span
    initial='hidden'
    animate='visible'
    variants={textReveal}
    {...props}
  />
);

export const MotionImg = (
  props: HTMLMotionProps<'img'> & { children?: never }
) => <motion.img initial='hidden' animate='visible' variants={itemFadeUp} {...props} />;

export default {
  spring,
  gentleSpring,
  quick,
  pageVariants,
  pageTransitionVariants,
  sectionFadeUp,
  sectionFadeDown,
  sectionFadeIn,
  staggerList,
  staggerListFast,
  itemFadeUp,
  itemScale,
  textReveal,
  textStaggerContainer,
  liftHover,
  scaleHover,
  buttonHover,
  iconHover,
  glowHover,
  pulseSlow,
  floatY,
  PageTransition,
};
