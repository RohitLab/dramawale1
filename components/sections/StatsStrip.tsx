"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  prefix?: string;
  icon: string;
}

const STATS: StatItem[] = [
  {
    numericValue: 12,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Crafting theatre experiences since 2014",
    prefix: "",
    icon: "🎭",
  },
  {
    numericValue: 5000,
    suffix: "+",
    label: "Young Minds Ignited",
    sublabel: "Students who discovered the stage",
    prefix: "",
    icon: "✨",
  },
  {
    numericValue: 300,
    suffix: "+",
    label: "Workshops Delivered",
    sublabel: "Across classrooms, stages & open spaces",
    prefix: "",
    icon: "🎬",
  },
  {
    numericValue: 12,
    suffix: "+",
    label: "Districts Reached",
    sublabel: "Taking drama across India",
    prefix: "",
    icon: "🗺️",
  },
  {
    numericValue: 150,
    suffix: "+",
    label: "Stories Created",
    sublabel: "Original scripts & timeless tales",
    prefix: "",
    icon: "📜",
  },
];

function CountUp({
  target, suffix, prefix,
}: {
  target: number; suffix: string; prefix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {`${prefix}${count}${suffix}`}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#1F2340]">
      {/* Gold top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/60 to-transparent" />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, rgba(122,31,43,0.15) 0%, transparent 70%)"
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Marketing tagline */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#C9A24B]/70 text-xs font-semibold uppercase tracking-[0.3em] mb-10"
        >
          Our Impact in Numbers
        </motion.p>

        {/* 5-column stat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`text-center flex flex-col items-center gap-1
                ${i < STATS.length - 1 ? "lg:border-r lg:border-[#C9A24B]/20" : ""}`}
            >
              {/* Icon */}
              <span className="text-3xl mb-1" role="img" aria-label={stat.label}>
                {stat.icon}
              </span>

              {/* Animated number */}
              <div className="font-display text-4xl lg:text-5xl font-bold text-[#E8A33D] leading-none">
                <CountUp
                  target={stat.numericValue}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                />
              </div>

              {/* Label */}
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mt-1">
                {stat.label}
              </p>

              {/* Sublabel */}
              <p className="text-white/40 text-xs leading-snug px-2">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
