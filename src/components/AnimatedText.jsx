import * as React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper for Tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const AnimatedText = React.forwardRef(
  (
    {
      text,
      className,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      ...props
    },
    ref
  ) => {
    const pathVariants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: underlineDuration,
          ease: "easeInOut",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative inline-block">
          <motion.span
            className={cn("block", textClassName)}
            whileHover={{ scale: 1.02 }}
          >
            {text}
          </motion.span>

          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 300 20"
            preserveAspectRatio="none"
            className={cn(
              "absolute -bottom-2 left-0 w-full",
              underlineClassName
            )}
          >
            <motion.path
              d={underlinePath}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                d: underlineHoverPath,
                transition: { duration: 0.8 },
              }}
            />
          </motion.svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
