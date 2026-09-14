"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GSAP ScrollTrigger Utility
 *
 * Provides hooks and helpers for scroll-based animations.
 */

/**
 * Hook to create scroll-triggered animations on an element
 */
export function useScrollAnimation(
  animation: (element: HTMLElement, trigger: ScrollTrigger) => void,
  deps: unknown[] = []
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => animation(element, trigger),
      once: true,
    });

    return () => {
      trigger.kill();
    };
  // The caller owns the dependency list because this utility accepts arbitrary animation inputs.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/**
 * Create a radial reveal animation
 * Animates from circle(0%) to circle(100%)
 */
export function createRadialReveal(
  element: HTMLElement,
  options?: {
    duration?: number;
    delay?: number;
    start?: string;
    end?: string;
  }
) {
  const { duration = 1.2, delay = 0, start = "top 80%", end = "top 20%" } = options || {};

  gsap.fromTo(
    element,
    {
      clipPath: "circle(0% at 50% 50%)",
    },
    {
      clipPath: "circle(100% at 50% 50%)",
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Create a parallax scroll effect on an element
 */
export function createParallax(
  element: HTMLElement,
  options?: {
    speed?: number;
    start?: string;
    end?: string;
  }
) {
  const { speed = 0.3, start = "top bottom", end = "bottom top" } = options || {};

  gsap.to(element, {
    y: () => speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true,
    },
  });
}

/**
 * Create a fade-in-up animation triggered by scroll
 */
export function createFadeInUp(
  element: HTMLElement,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
  }
) {
  const { y = 60, duration = 1, delay = 0, start = "top 85%" } = options || {};

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Create a stagger animation for child elements
 */
export function createStaggerAnimation(
  parent: HTMLElement,
  childSelector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }
) {
  const { y = 40, duration = 0.8, stagger = 0.1, start = "top 85%" } = options || {};
  const children = parent.querySelectorAll(childSelector);

  gsap.fromTo(
    children,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: parent,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Create a horizontal scroll text animation
 */
export function createHorizontalScroll(
  element: HTMLElement,
  options?: {
    x?: number;
    start?: string;
    end?: string;
  }
) {
  const { x = -200, start = "top bottom", end = "bottom top" } = options || {};

  gsap.fromTo(
    element,
    {
      x: 0,
    },
    {
      x,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
      },
    }
  );
}

export { gsap, ScrollTrigger };
