import { ReactNode } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  actions?: ReactNode;
  /** Extra content below actions (e.g. trust badges) */
  footer?: ReactNode;
}

/**
 * Consistent cream-gradient hero used on all inner pages.
 * Title accepts JSX so callers can drop in italic/coloured spans.
 */
export function PageHero({ eyebrow, title, description, actions, footer }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#FAF6F0] to-[#F0E4D6] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle decorative blob */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#A63245]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl">
          <p className="text-[#C4623A] text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>
          )}
          {actions && <div className="flex flex-col sm:flex-row gap-4">{actions}</div>}
          {footer && <div className="mt-8">{footer}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
