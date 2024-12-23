"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  animation?: "fade" | "slide" | "scale" | "rotate";
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (animation) {
      case "slide":
        const offset = 50;
        const slideDirection = {
          up: { y: offset },
          down: { y: -offset },
          left: { x: offset },
          right: { x: -offset },
        };
        return {
          hidden: { ...baseVariants.hidden, ...slideDirection[direction] },
          visible: { opacity: 1, x: 0, y: 0 },
        };
      case "scale":
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case "rotate":
        return {
          hidden: { ...baseVariants.hidden, rotate: -10 },
          visible: { opacity: 1, rotate: 0 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}