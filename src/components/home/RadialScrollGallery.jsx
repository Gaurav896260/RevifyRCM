"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useMergeRefs(...refs) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) return null;
    return (node) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref != null) {
          ref.current = node;
        }
      });
    };
  }, [refs]);
}

function useResponsiveValue(baseValue, mobileValue) {
  const [value, setValue] = useState(baseValue);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setValue(window.innerWidth < 768 ? mobileValue : baseValue);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseValue, mobileValue]);
  return value;
}

export const RadialScrollGallery = forwardRef(
  (
    {
      children,
      scrollDuration = 2500,
      visiblePercentage = 45,
      baseRadius = 550,
      mobileRadius = 220,
      className = "",
      startTrigger = "center center",
      onItemSelect,
      direction = "ltr",
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const pinRef = useRef(null);
    const containerRef = useRef(null);
    const childRef = useRef(null);
    const mergedRef = useMergeRefs(ref, pinRef);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [childSize, setChildSize] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    const currentRadius = useResponsiveValue(baseRadius, mobileRadius);
    const circleDiameter = currentRadius * 2;

    const { visibleDecimal, hiddenDecimal } = useMemo(() => {
      const clamped = Math.max(10, Math.min(100, visiblePercentage));
      const v = clamped / 100;
      return { visibleDecimal: v, hiddenDecimal: 1 - v };
    }, [visiblePercentage]);

    const childrenNodes = React.Children.toArray(children(hoveredIndex));
    const childrenCount = childrenNodes.length;

    useEffect(() => {
      setIsMounted(true);
      if (!childRef.current) return;
      const observer = new ResizeObserver(() => {
        setChildSize({
          w: childRef.current.offsetWidth,
          h: childRef.current.offsetHeight,
        });
        ScrollTrigger.refresh();
      });
      observer.observe(childRef.current);
      return () => observer.disconnect();
    }, [childrenCount]);

    useGSAP(
      () => {
        if (!pinRef.current || !containerRef.current || childrenCount === 0)
          return;

        gsap.to(containerRef.current, {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            pin: true,
            start: startTrigger,
            end: `+=${scrollDuration}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      },
      {
        scope: pinRef,
        dependencies: [
          scrollDuration,
          currentRadius,
          startTrigger,
          childrenCount,
        ],
      }
    );

    const visibleAreaHeight = childSize
      ? circleDiameter * visibleDecimal + childSize.h + 100
      : 600;

    return (
      <div
        ref={mergedRef}
        className={`w-full relative overflow-hidden ${className}`}
        {...rest}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: `${visibleAreaHeight}px`,
            maskImage:
              "linear-gradient(to top, transparent 0%, black 30%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 30%, black 100%)",
          }}
        >
          <ul
            ref={containerRef}
            className={`absolute left-1/2 -translate-x-1/2 m-0 p-0 list-none transition-opacity duration-500 ${
              isMounted ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: circleDiameter,
              height: circleDiameter,
              bottom: -(circleDiameter * hiddenDecimal),
            }}
          >
            {childrenNodes.map((child, index) => {
              const angle = (index / childrenCount) * 2 * Math.PI;
              const x = currentRadius * Math.cos(angle);
              const y = currentRadius * Math.sin(angle);
              const rotationAngle = (angle * 180) / Math.PI;

              return (
                <li
                  key={index}
                  ref={index === 0 ? childRef : null}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${
                      rotationAngle + 90
                    }deg)`,
                  }}
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-110"
                        : hoveredIndex !== null
                        ? "blur-sm opacity-40"
                        : ""
                    }`}
                  >
                    {child}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

RadialScrollGallery.displayName = "RadialScrollGallery";
