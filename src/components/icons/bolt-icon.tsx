import React from 'react';
import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      await animate(
        ".bolt",
        { scale: [1, 1.2, 0.9, 1.1, 1], opacity: [1, 0.7, 1, 0.8, 1] },
        { duration: 0.5, ease: "easeInOut" },
      );
    }, [animate]);

    const stop = useCallback(() => {
      animate(".bolt", { scale: 1, opacity: 1 }, { duration: 0.2 });
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
        <motion.polygon
          className="bolt"
          style={{ transformOrigin: "center" }}
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        />
      </motion.svg>
    );
  },
);

BoltIcon.displayName = "BoltIcon";
export default BoltIcon;
