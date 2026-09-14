"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  year: string;
  description: string;
  services: string[];
  tools: string[];
  coverImage?: { asset: { url: string } } | string;
  images?: Array<{ asset: { url: string } } | string>;
};

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

function getImageUrl(
  image: { asset: { url: string } } | string | undefined,
  fallback: string = "/images/Our-Creative-Works-01.jpg"
): string {
  if (!image) return fallback;
  if (typeof image === "string") return image;
  return image.asset?.url || fallback;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const images = project.images || [];
  const mainImage = getImageUrl(project.coverImage, getImageUrl(images[0]));
  const detailImage1 = getImageUrl(images[1], "/images/Our-Creative-Works-02.jpg");
  const detailImage2 = getImageUrl(images[2], "/images/Our-Creative-Works-03.jpg");

  return (
    <div className="pt-28 pb-20 px-6 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-xs text-[var(--text-muted)] font-mono tracking-wider">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span className="text-xs text-[var(--text-muted)] font-mono">
              {project.year}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
          >
            {project.title}
          </motion.h1>
        </div>

        {/* 3-Image Layout (Lumen/Brandolk style) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16"
        >
          {/* Primary Image (large) */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden rounded-lg bg-[var(--bg-secondary)]">
            <Image src={mainImage} alt={project.title} fill className="object-cover" priority />
          </div>
          {/* Secondary Images */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--bg-secondary)]">
            <Image src={detailImage1} alt={`${project.title} Detail 1`} fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--bg-secondary)]">
            <Image src={detailImage2} alt={`${project.title} Detail 2`} fill className="object-cover" />
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-medium tracking-tight mb-4">
              About the project
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              {project.description}
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-3">
                Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.services?.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full text-[var(--text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-3">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prev/Next Navigation */}
        <div className="flex items-center justify-between pt-10 border-t border-[var(--border)]">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug.current}`}
              data-cursor="hover"
              className="group flex items-center gap-3"
            >
              <span className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                ← {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug.current}`}
              data-cursor="hover"
              className="group flex items-center gap-3"
            >
              <span className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {nextProject.title} →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
