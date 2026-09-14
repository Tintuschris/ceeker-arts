"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type About = {
  _id: string;
  headline: string;
  bio: string[];
  skills: string[];
  experience: number;
  projectsCompleted: number;
  portrait?: { asset: { url: string } } | string;
  logo?: { asset: { url: string } } | string;
};

type Client = {
  _id: string;
  name: string;
  quote: string;
  role: string;
  logo?: { asset: { url: string } } | string;
};

interface AboutPageClientProps {
  about: About;
  clients: Client[];
}

function getImageUrl(
  image: { asset: { url: string } } | string | undefined,
  fallback: string = "/images/BG-1.jpg"
): string {
  if (!image) return fallback;
  if (typeof image === "string") return image;
  return image.asset?.url || fallback;
}

export default function AboutPageClient({ about, clients }: AboutPageClientProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Hero text animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Flip card animation
      if (flipRef.current) {
        gsap.fromTo(
          flipRef.current,
          { opacity: 0, x: -60, rotateY: -15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: flipRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Bio text animation
      if (bioRef.current) {
        gsap.fromTo(
          bioRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bioRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Skills stagger animation
      if (skillsRef.current) {
        const skillItems = skillsRef.current.querySelectorAll(".skill-item");
        gsap.fromTo(
          skillItems,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Clients stagger animation
      if (clientsRef.current) {
        const clientItems = clientsRef.current.querySelectorAll(".client-item");
        gsap.fromTo(
          clientItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: clientsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="pt-28 pb-20 px-6 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={heroRef} className="mb-16 opacity-0">
          <span className="section-number">About Me</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-3">
            The <span className="text-[var(--accent)]">Creative</span> Behind
            <br />
            the Work
          </h1>
        </div>

        {/* About Section with Image Flip */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Image Flip */}
          <div ref={flipRef} className="opacity-0">
            <div className="flip-container w-full aspect-[3/4] rounded-lg overflow-hidden">
              <div className="flip-inner w-full h-full relative">
                <div className="flip-front absolute inset-0">
                  <Image
                    src={getImageUrl(about.portrait)}
                    alt="Ceeker Arts Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flip-back absolute inset-0 bg-[var(--bg-secondary)] flex flex-col items-center justify-center p-8 border border-[var(--border)]">
                  <span className="text-4xl font-semibold tracking-tight mb-4">
                    CEEKER<span className="text-[var(--accent)]">.</span>
                  </span>
                  <p className="text-[var(--text-secondary)] text-center text-sm leading-relaxed">
                    Freelance Web Designer,
                    <br />
                    Illustrator &amp; Creative Director
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] mt-3 text-center tracking-wider">
              HOVER TO REVEAL
            </p>
          </div>

          {/* Bio Content */}
          <div ref={bioRef} className="flex flex-col justify-center opacity-0">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              {about.headline || "You need a designer who"}{" "}
              <span className="text-[var(--accent)]">gets it</span>
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              {about.bio?.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <Link
              href="/projects"
              data-cursor="hover"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] text-sm font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 w-fit"
            >
              Explore Selected Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mb-24">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-10">
            Skills &amp; <span className="text-[var(--accent)]">Expertise</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {about.skills?.map((skill: string) => (
              <div
                key={skill}
                className="skill-item px-5 py-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 opacity-0"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Clients */}
        <div ref={clientsRef}>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-10">
            Featured <span className="text-[var(--accent)]">Clients</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client) => (
              <div
                key={client._id}
                className="client-item p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg opacity-0"
              >
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic mb-4">
                  &ldquo;{client.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-xs font-medium text-[var(--accent)]">
                    {client.name[0]}
                  </div>
                  <span className="text-sm text-[var(--text-primary)]">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
