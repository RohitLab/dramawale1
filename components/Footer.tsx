import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import {
  FOOTER_PLATFORM_LINKS,
  FOOTER_PROGRAM_LINKS,
  CONTACT_INFO,
  TRUST_BADGES,
} from "@/lib/constants";

export function Footer() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo-mask.png"
                  alt="Dramawale logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-display font-bold text-white text-xl group-hover:text-[#E8A33D] transition-colors">
                Dramawale
              </span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed mb-4">
              India&apos;s premier drama education platform — empowering students, training
              educators, and transforming schools through the performing arts.
            </p>
            <p className="text-[#E8A33D] text-xs font-semibold uppercase tracking-widest">
              Drama is the language of the soul.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-sm font-semibold text-[#C9A24B] uppercase tracking-widest mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {FOOTER_PLATFORM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-[#E8A33D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs links */}
          <div>
            <h4 className="text-sm font-semibold text-[#C9A24B] uppercase tracking-widest mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {FOOTER_PROGRAM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-[#E8A33D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#C9A24B] uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E8A33D] flex-shrink-0" />
                {CONTACT_INFO.address}
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/55 hover:text-[#E8A33D] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E8A33D] flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2.5 text-sm text-white/55 hover:text-[#E8A33D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E8A33D] flex-shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A24B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Dramawale. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="text-xs text-[#E8A33D]/70 bg-[#C9A24B]/10 border border-[#C9A24B]/20 px-2.5 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
