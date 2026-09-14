"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Illustration = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  description?: string;
  primaryImage?: { asset: { url: string } } | string;
  secondaryImages?: Array<{ asset: { url: string } } | string>;
};

interface IllustrationPageClientProps {
  illustrations: Illustration[];
}

function getImageUrl(
  image: { asset: { url: string } } | string | undefined,
  fallback: string = "/images/Our-Creative-Works-01.jpg"
): string {
  if (!image) return fallback;
  if (typeof image === "string") return image;
  return image.asset?.url || fallback;
}

const categories = [
  "All",
  "Editorial",
  "Brand",
  "Character",
  "Iconography",
  "Print",
  "Digital",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function IllustrationPageClient({
  illustrations,
}: IllustrationPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Illustration | null>(null);

  const filtered =
    activeFilter === "All"
      ? illustrations
      : illustrations.filter((i) => i.category === activeFilter);

  return (
    <div className="pt-28 pb-20 px-6 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-number"
          >
            Illustration
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-3"
          >
            Illustration <span className="text-[var(--accent)]">Gallery</span>
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

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item) => (
            <motion.div
              key={item._id}
              variants={itemVariants}
              data-cursor="work"
              onClick={() => setSelected(item)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-[var(--bg-secondary)]"
            >
              <Image
                src={getImageUrl(item.primaryImage)}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1] as const,
              }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-medium text-white">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-white/50 mt-1">
                    {selected.category}
                  </p>
                </div>
                <button
                  data-cursor="hover"
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 4L12 12M12 4L4 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={getImageUrl(selected.primaryImage)}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {selected.secondaryImages?.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-1 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={getImageUrl(img)}
                        alt={`${selected.title} detail ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
