"use client";

import { forwardRef, type ReactNode } from "react";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

/* =========================================================
   STAGGER VARIANTS
========================================================= */

const staggerContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   STAGGER
========================================================= */

interface StaggerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
}

export const Stagger = forwardRef<HTMLDivElement, StaggerProps>(
  function Stagger({ children, className = "", ...props }, ref) {
    return (
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

/* =========================================================
   STAGGER ITEM
========================================================= */

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  function StaggerItem({ children, className = "", ...props }, ref) {
    return (
      <motion.div
        ref={ref}
        variants={staggerItemVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
