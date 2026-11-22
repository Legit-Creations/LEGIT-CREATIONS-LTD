"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import React from "react";

interface RevealContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  immediate?: boolean;
}

export function RevealContainer({
  children,
  className = "",
  staggerDelay = 0.055,
  immediate = false,
}: RevealContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: immediate
        ? undefined
        : {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren: shouldReduceMotion ? 0 : 0.06,
          },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={immediate || shouldReduceMotion ? false : "hidden"}
      animate={immediate ? undefined : "visible"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealLineProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  immediate?: boolean;
}

export function RevealLine({
  children,
  className = "",
  as: Component = "span",
  immediate = false,
}: RevealLineProps) {
  const shouldReduceMotion = useReducedMotion();

  const lineVariants: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.42,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  if (immediate) {
    return (
      <Component className={`block ${className}`}>
        {children}
      </Component>
    );
  }

  return (
    <Component className={`block overflow-hidden ${className}`}>
      <motion.span variants={lineVariants} className="block">
        {children}
      </motion.span>
    </Component>
  );
}


interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

export function RevealSection({
  children,
  className = "",
  delay = 0,
  amount = 0.16,
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.62,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
