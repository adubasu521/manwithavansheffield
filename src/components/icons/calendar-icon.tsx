import React from 'react';
import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CalendarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      animate(
        ".cal-pins",
        { y: [0, -2, 0] },
        { duration: 0.4, ease: "easeInOut" },
      );
      await animate(
        ".cal-body",
        { scale: [1, 1.04, 1] },
        { duration: 0.35, ease: "easeOut" },
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(".cal-pins, .cal-body", { y: 0, scale: 1 }, { duration: 0.2 });
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
        style={{ overflow: "visible" }}
      >
        <motion.rect
          className="cal-body"
          style={{ transformOrigin: "center" }}
          x="3" y="4" width="18" height="18" rx="2" ry="2"
        />
        <motion.g className="cal-pins">
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
        </motion.g>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </motion.svg>
    );
  },
);

CalendarIcon.displayName = "CalendarIcon";
export default CalendarIcon;
