import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import GSAPProvider from "@/components/GSAPProvider";
import { getSiteSettings } from "@/sanity/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceeker Arts — Design & Illustration Portfolio",
  description:
    "Freelance web designer, illustrator & creative director crafting bold digital experiences.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <GSAPProvider>
          <CustomCursor />
          <Navbar navItems={settings.navItems} email={settings.email} />
          <main className="flex-1">{children}</main>
          <Footer siteTitle={settings.siteTitle} email={settings.email} socialLinks={settings.socialLinks} />
        </GSAPProvider>
      </body>
    </html>
  );
}

function Footer({
  siteTitle,
  email,
  socialLinks,
}: {
  siteTitle: string;
  email: string;
  socialLinks: Array<{ platform: string; url: string }>;
}) {
  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-semibold tracking-tight">
            {siteTitle}<span className="text-[var(--accent)]">.</span>
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Ceeker Arts. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url || `mailto:${email}`}
              data-cursor="hover"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 tracking-wide"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
