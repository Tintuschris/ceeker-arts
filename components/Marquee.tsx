"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      // Infinite marquee animation
      gsap.to(trackRef.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Speed up on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const speed = Math.abs(velocity) / 1000;
          gsap.to(trackRef.current, {
            timeScale: 1 + speed * 0.5,
            duration: 0.3,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "Let's start a project together ✺ ";

  return (
    <section ref={sectionRef} className="py-20 md:py-28 overflow-hidden border-y border-[var(--border)]">
      <Link href="/contact" data-cursor="hover">
        <div ref={trackRef} className="flex w-max">
          {/* Duplicate text for seamless loop */}
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[var(--text-primary)] whitespace-nowrap px-4"
            >
              {text}
            </span>
          ))}
        </div>
      </Link>
    </section>
  );
}
