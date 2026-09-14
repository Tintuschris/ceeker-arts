"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-number">Contact</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-3">
            Let&apos;s Create <span className="text-[var(--accent)]">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[var(--text-secondary)] mt-6 text-lg leading-relaxed max-w-2xl">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s collaborate to create something remarkable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form className="space-y-6">
              <div>
                <label className="block text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none transition-colors">
                  <option>Brand Identity</option>
                  <option>Web Design</option>
                  <option>Illustration</option>
                  <option>UI/UX Design</option>
                  <option>Motion Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" data-cursor="hover" className="w-full px-8 py-3.5 bg-[var(--accent)] text-[var(--bg-primary)] text-sm font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.3)]">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col justify-center">
            <div className="space-y-10">
              <div>
                <h3 className="text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-3">Email</h3>
                <a href="mailto:hello@ceekerarts.com" data-cursor="hover" className="text-xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  hello@ceekerarts.com
                </a>
              </div>
              <div>
                <h3 className="text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-3">Location</h3>
                <p className="text-xl text-[var(--text-primary)]">Lagos, Nigeria</p>
              </div>
              <div>
                <h3 className="text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase mb-3">Social</h3>
                <div className="flex flex-col gap-3">
                  {["Twitter", "Dribbble", "Behance", "Instagram"].map((s) => (
                    <a key={s} href="#" data-cursor="hover" className="text-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Available for freelance work. Let&apos;s discuss your next project and bring your vision to life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
