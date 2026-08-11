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
            ? "bg-[#FBF6EE]/97 backdrop-blur-md shadow-md border-b border-[#E2D4B8]"
            : "bg-[#FBF6EE]/90 backdrop-blur-sm"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo-mask.png"
                alt="Dramawale — Kathakali mask logo"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className="font-display text-xl tracking-tight text-[#7A1F2B] group-hover:text-[#A3283A] transition-colors">
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
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors font-body",
                    pathname === link.href
                      ? "text-[#7A1F2B] bg-[#7A1F2B]/8 font-semibold"
                      : "text-[#4A4A4A] hover:text-[#7A1F2B] hover:bg-[#7A1F2B]/6"
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
              className="hidden sm:inline-flex bg-[#7A1F2B] hover:bg-[#A3283A] text-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-lg text-[#4A4A4A] hover:text-[#7A1F2B] hover:bg-[#7A1F2B]/8 transition-colors"
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
          <div className="absolute top-16 left-0 right-0 bg-[#FBF6EE] border-b border-[#E2D4B8] shadow-xl py-4 px-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-[#7A1F2B] bg-[#7A1F2B]/8 font-semibold"
                        : "text-[#4A4A4A] hover:text-[#7A1F2B] hover:bg-[#7A1F2B]/6"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#E2D4B8]">
              <Button
                asChild
                className="w-full bg-[#7A1F2B] hover:bg-[#A3283A] text-white rounded-full"
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
