"use client";

import Link from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#5C1620]/97 backdrop-blur-md shadow-lg border-b border-[#C9A24B]/20"
            : "bg-[#7A1F2B]"
        )}
      >
        {/* Subtle gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24B]/40 to-transparent pointer-events-none" />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo-mask-v2.png"
                alt="Dramawale — Kathakali mask logo"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className="font-display text-xl tracking-tight text-[#FBF6EE] group-hover:text-[#E8A33D] transition-colors duration-200">
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
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 font-body",
                    pathname === link.href
                      ? "text-[#E8A33D] bg-[#E8A33D]/10 font-semibold"
                      : "text-[#FBF6EE]/80 hover:text-[#E8A33D] hover:bg-[#E8A33D]/8"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-[#E8A33D] hover:bg-[#C9A24B] text-[#1F2340] font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-px transition-all"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-lg text-[#FBF6EE]/80 hover:text-[#E8A33D] hover:bg-[#E8A33D]/10 transition-colors"
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
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-[#7A1F2B] border-b border-[#C9A24B]/20 shadow-xl py-4 px-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-[#E8A33D] bg-[#E8A33D]/10 font-semibold"
                        : "text-[#FBF6EE]/80 hover:text-[#E8A33D] hover:bg-[#E8A33D]/8"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#C9A24B]/20">
              <Button
                asChild
                className="w-full bg-[#E8A33D] hover:bg-[#C9A24B] text-[#1F2340] font-bold rounded-full"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
