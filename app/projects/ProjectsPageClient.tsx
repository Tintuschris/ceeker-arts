"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  year: string;
  services: string[];
  coverImage?: { asset: { url: string } } | string;
};

interface ProjectsPageClientProps {
  projects: Project[];
}

const categories = ["All", "Design", "Branding", "Illustration"];

function getProjectImage(image: Project["coverImage"]): string {
  if (!image) return "/images/Our-Creative-Works-01.jpg";
  if (typeof image === "string") return image;
  return image.asset?.url || "/images/Our-Creative-Works-01.jpg";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 pb-20 px-6 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-number"
          >
            Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-3"
          >
            Selected <span className="text-[var(--accent)]">Work</span>
          </motion.h1>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              data-cursor="hover"
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-sm rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              layout
              data-cursor="work"
              className="group"
            >
              <Link href={`/projects/${project.slug.current}`}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--bg-secondary)]">
                  <Image
                    src={getProjectImage(project.coverImage)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Metadata */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.services?.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] text-[var(--text-muted)] px-2.5 py-1 bg-[var(--bg-secondary)] rounded-full border border-[var(--border)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
