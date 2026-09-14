"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  _id: string;
  number: string;
  title: string;
  description: string;
  image?: { asset: { url: string } } | string;
  deliverables: string[];
};

interface ServicesPageClientProps {
  services: Service[];
}

function getServiceImage(image: Service["image"]): string {
  if (!image) return "/images/Our-Creative-Works-01.jpg";
  if (typeof image === "string") return image;
  return image.asset?.url || "/images/Our-Creative-Works-01.jpg";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-number"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-3"
          >
            Services &amp; <span className="text-[var(--accent)]">Skills</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg leading-relaxed"
          >
            From brand strategy to motion design, I offer a full spectrum of
            creative services. Each service is tailored to meet your unique needs
            and elevate your brand.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service._id}
              variants={itemVariants}
              className="group overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={getServiceImage(service.image)}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-[var(--text-muted)] font-mono tracking-wider">
                    {`${service.number}//`}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables?.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-full text-[var(--text-muted)]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Ready to bring your vision to life?
          </h2>
          <Link
            href="/contact"
            data-cursor="hover"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--accent)] text-[var(--bg-primary)] text-sm font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300"
          >
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
