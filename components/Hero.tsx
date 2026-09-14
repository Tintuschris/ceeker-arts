"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

const roles = ["Webdesigner", "Illustrator", "Photographer"];

export default function Hero({ tagline }: { tagline?: string }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Radial Reveal Animation
  useEffect(() => {
    if (!revealRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Radial reveal animation
      gsap.fromTo(
        revealRef.current,
        {
          clipPath: "circle(100% at 50% 50%)",
        },
        {
          clipPath: "circle(0% at 50% 50%)",
          duration: 1.8,
          delay: 0.3,
          ease: "power3.inOut",
        }
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center px-6 md:px-10 py-28 md:py-32 overflow-hidden">
      {/* Radial reveal overlay */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-[var(--bg-primary)] z-20 pointer-events-none"
        style={{ clipPath: "circle(100% at 50% 50%)" }}
      />

      <div className="absolute -right-24 top-1/4 w-[42vw] h-[42vw] max-w-[650px] max-h-[650px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[140px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-30" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-30" />
        <div className="absolute top-0 left-1/4 w-full h-[1px] bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-30 rotate-90 origin-top" />
        <div className="absolute top-0 left-3/4 w-full h-[1px] bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-30 rotate-90 origin-top" />
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-[1500px] mx-auto opacity-0">
        <div className="max-w-[900px] flex flex-col items-start">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--text-muted)] text-xs tracking-[0.25em] uppercase"
        >
          Hello, I&apos;m Ceeker
        </motion.p>

        {/* Main Heading */}
        <div className="flex flex-col items-start gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="display-title"
          >
            I&apos;m a
          </motion.h1>

          {/* Rotating role */}
          <div className="h-[80px] md:h-[100px] lg:h-[120px] overflow-hidden relative">
            {roles.map((role, i) => (
              <motion.h1
                key={role}
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  i === roleIndex
                    ? { y: "0%", opacity: 1 }
                    : i === (roleIndex - 1 + roles.length) % roles.length
                    ? { y: "-100%", opacity: 0 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
              className="display-title absolute left-0 whitespace-nowrap text-[var(--accent)]"
              >
                {role}
              </motion.h1>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="display-title"
          >
            <span className="block">Based in</span>
            <span className="block text-[var(--accent)]">Lagos</span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[var(--text-secondary)] text-base md:text-lg max-w-md leading-relaxed mt-8"
        >
          {tagline ||
            "Crafting bold digital experiences through design, illustration & creative direction. Turning ideas into visual stories that resonate."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-start gap-4 mt-8"
        >
          <Link
            href="/projects"
            data-cursor="hover"
            className="px-8 py-3.5 bg-[var(--accent)] text-[var(--bg-primary)] text-sm font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.3)]"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            data-cursor="hover"
            className="px-8 py-3.5 border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            Let&apos;s Collaborate
          </Link>
        </motion.div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-[8vw] top-[18vh] w-[27vw] h-[38vw] max-h-[620px] overflow-hidden rounded-t-[14rem] rounded-b-[1rem] border border-white/15 rotate-[4deg] opacity-80">
        <Image src="/images/BG-1.jpg" alt="Ceeker Arts visual work" fill className="object-cover scale-110" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
