import { ReactNode } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  actions?: ReactNode;
  footer?: ReactNode;
}

/**
 * Premium page hero — used on all inner pages.
 * Deep indigo→maroon gradient with gold accent border, Yatra One headline.
 */
export function PageHero({ eyebrow, title, description, actions, footer }: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#1F2340]">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1F2340 0%, #2E3560 40%, #7A1F2B 100%)" }}
        />
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/70 to-transparent" />
        {/* Gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/40 to-transparent" />
        {/* Warm glow orb */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7A1F2B]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E8A33D]/10 rounded-full blur-3xl" />
        {/* Fabric texture lines */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, #C9A24B 0px, #C9A24B 1px, transparent 1px, transparent 40px)"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <p className="text-[#E8A33D] text-sm font-bold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>
          )}
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4">{actions}</div>
          )}
          {footer && <div className="mt-8">{footer}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
