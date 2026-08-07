"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E2D8CC]"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#7C1D2F] flex items-center justify-center shadow-md group-hover:bg-[#A63245] transition-colors">
              <span className="text-white font-bold text-sm font-display">D</span>
            </div>
            <span className="font-display font-bold text-[#1C1C1C] text-xl tracking-tight">
              Dramawale
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#7C1D2F] bg-[#FAF6F0]"
                      : "text-[#4A4A4A] hover:text-[#7C1D2F] hover:bg-[#FAF6F0]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-lg text-[#4A4A4A] hover:text-[#7C1D2F] hover:bg-[#FAF6F0] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-[#E2D8CC] shadow-lg py-4 px-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-[#7C1D2F] bg-[#FAF6F0] font-semibold"
                        : "text-[#4A4A4A] hover:text-[#7C1D2F] hover:bg-[#FAF6F0]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#E2D8CC]">
              <Button asChild className="w-full">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
