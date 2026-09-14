"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = { label: string; href: string };

export default function Navbar({
  navItems,
  email,
}: {
  navItems: NavItem[];
  email: string;
}) {

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <Link href="/" data-cursor="hover" className="relative z-10">
          <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            CEEKER<span className="text-[var(--accent)]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-cursor="hover"
              className={`text-sm tracking-wide transition-colors duration-300 ${
                pathname === item.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`mailto:${email}`}
            data-cursor="hover"
            className="text-sm px-5 py-2.5 border border-[var(--border)] rounded-full text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            Email me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          data-cursor="hover"
          className="md:hidden relative z-10 w-8 h-8 flex flex-col items-end justify-center gap-1.5"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            className="block h-[2px] bg-[var(--text-primary)] origin-right"
            style={{ width: "100%" }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            className="block h-[2px] w-3/4 bg-[var(--text-primary)]"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "60%" }}
            className="block h-[2px] bg-[var(--text-primary)] origin-right"
            style={{ width: "60%" }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
            className="fixed inset-0 z-40 bg-[var(--bg-secondary)] flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-4xl font-light tracking-tight transition-colors ${
                    pathname === item.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href={`mailto:${email}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg px-8 py-3 border border-[var(--accent)] text-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300"
              >
                Email me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
