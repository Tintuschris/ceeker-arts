"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ═══════════════════════════════════════════
// PARALLAX WRAPPER
// ═══════════════════════════════════════════

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax scroll effect - content moves at a different speed than scroll
 */
export function Parallax({ children, speed = 0.3, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => speed * 150,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// FADE IN UP
// ═══════════════════════════════════════════

interface FadeInUpProps {
  children: ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Fade in from bottom on scroll
 */
export function FadeInUp({ children, y = 60, duration = 1, delay = 0, className = "" }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// SCALE IN
// ═══════════════════════════════════════════

interface ScaleInProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

/**
 * Scale in from smaller size on scroll
 */
export function ScaleIn({ children, scale = 0.9, duration = 1, className = "" }: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale },
        {
          opacity: 1,
          scale: 1,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [scale, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// SLIDE IN
// ═══════════════════════════════════════════

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  distance?: number;
  duration?: number;
  className?: string;
}

/**
 * Slide in from a direction on scroll
 */
export function SlideIn({
  children,
  direction = "left",
  distance = 100,
  duration = 1,
  className = "",
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    switch (direction) {
      case "left":
        fromVars.x = -distance;
        break;
      case "right":
        fromVars.x = distance;
        break;
      case "top":
        fromVars.y = -distance;
        break;
      case "bottom":
        fromVars.y = distance;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, fromVars, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [direction, distance, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// STAGGER CONTAINER
// ═══════════════════════════════════════════

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

/**
 * Stagger animation for child elements
 */
export function StaggerContainer({ children, stagger = 0.1, className = "" }: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// TEXT REVEAL
// ═══════════════════════════════════════════

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Text reveal animation - clips text from bottom
 */
export function TextReveal({ children, className = "" }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// IMAGE PARALLAX
// ═══════════════════════════════════════════

interface ImageParallaxProps {
  children: ReactNode;
  speed?: number;
  scale?: number;
  className?: string;
}

/**
 * Parallax effect specifically for images
 * Moves and scales the image on scroll
 */
export function ImageParallax({ children, speed = 0.2, scale = 1.1, className = "" }: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { scale },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      gsap.to(ref.current, {
        y: () => speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, scale]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// RADIAL REVEAL
// ═══════════════════════════════════════════

interface RadialRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Radial reveal animation using clip-path
 */
export function RadialReveal({ children, className = "" }: RadialRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// HORIZONTAL SCROLL
// ═══════════════════════════════════════════

interface HorizontalScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Horizontal scroll effect - content moves horizontally on scroll
 */
export function HorizontalScroll({ children, speed = 100, className = "" }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        x: -speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
