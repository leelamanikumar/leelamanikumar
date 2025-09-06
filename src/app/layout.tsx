import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { AdminToggle } from "@/components/AdminToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEELA MANI KUMAR — Portfolio",
  description: "Portfolio of LEELA MANI KUMAR: projects, skills, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-b border-sky-200/50 dark:border-sky-800/50 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl sky-gradient-text hover:scale-105 transition-transform duration-300">
              LEELA MANI KUMAR
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link className="text-sky-700 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200 hover:underline underline-offset-4 transition-colors duration-300" href="/#about">About</Link>
              <Link className="text-sky-700 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200 hover:underline underline-offset-4 transition-colors duration-300" href="/projects">Projects</Link>
              <a className="text-sky-700 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200 hover:underline underline-offset-4 transition-colors duration-300" href="mailto:lmkleela1@gmail.com">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-black/10 dark:border-white/15">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
            <span className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} LEELA MANI KUMAR</span>
            <a className="hover:underline underline-offset-4" href="https://github.com/leelamanikumar" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </footer>
        <AdminToggle />
      </body>
    </html>
  );
}
