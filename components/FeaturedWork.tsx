"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  year: string;
  coverImage?: { asset: { url: string } } | string;
};

interface FeaturedWorkProps {
  projects: Project[];
}

function getProjectImage(image: Project["coverImage"]): string {
  if (!image) return "/images/Our-Creative-Works-01.jpg";
  if (typeof image === "string") return image;
  return image.asset?.url || "/images/Our-Creative-Works-01.jpg";
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
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
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
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
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 opacity-0">
          <div>
            <span className="section-number">01//</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mt-2">
              Selected <span className="text-[var(--accent)]">Work</span>
            </h2>
          </div>
          <Link
            href="/projects"
            data-cursor="hover"
            className="hidden md:flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-16 md:gap-y-24">
          {projects.map((project) => (
            <div
              key={project._id}
              data-cursor="work"
              className={`project-card group relative opacity-0 ${project.slug.current === projects[0]?.slug.current ? "md:col-span-7" : "md:col-span-5 md:mt-24"}`}
            >
              <Link href={`/projects/${project.slug.current}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)]">
                  <Image
                    src={getProjectImage(project.coverImage)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6 border-t border-[var(--border)] pt-4">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    {project.year}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-10 text-center">
          <Link
            href="/projects"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-sm text-[var(--accent)]"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
