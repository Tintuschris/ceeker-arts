"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Service = {
  _id: string;
  number: string;
  title: string;
  description: string;
  image?: { asset: { url: string } } | string;
};

interface ServicesPreviewProps {
  services: Service[];
}

function getServiceImage(image: Service["image"]): string {
  if (!image) return "/images/Our-Creative-Works-01.jpg";
  if (typeof image === "string") return image;
  return image.asset?.url || "/images/Our-Creative-Works-01.jpg";
}

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Grid items stagger animation
      if (gridRef.current) {
        const items = gridRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-16 opacity-0">
          <div>
            <span className="section-number">02//</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mt-2">
              Services &amp;{" "}
              <span className="text-[var(--accent)]">Skills</span>
            </h2>
          </div>
          <Link
            href="/services"
            data-cursor="hover"
            className="hidden md:flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            All Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              data-cursor="hover"
              className="group relative bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500 opacity-0"
            >
              <Link href="/services">
                {/* Image (top half) */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getServiceImage(service.image)}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]" />
                </div>

                {/* Content (bottom half) */}
                <div className="p-6">
                  <span className="text-xs text-[var(--text-muted)] font-mono tracking-wider">
                    {`${service.number}//`}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight mt-2 whitespace-pre-line leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
