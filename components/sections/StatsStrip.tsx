"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const STATS: StatItem[] = [
  {
    value: "NEP",
    numericValue: 0,
    suffix: "",
    label: "NEP-Aligned Curriculum",
    prefix: "",
  },
  {
    value: "100",
    numericValue: 100,
    suffix: "+",
    label: "Schools Partnered",
    prefix: "",
  },
  {
    value: "3",
    numericValue: 3,
    suffix: "",
    label: "Certified Programs",
    prefix: "",
  },
];

function CountUp({
  target,
  suffix,
  prefix,
  isText,
  textValue,
}: {
  target: number;
  suffix: string;
  prefix: string;
  isText: boolean;
  textValue: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || isText) return;
    let start = 0;
    const duration = 1500;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, isText]);

  return (
    <span ref={ref} className="tabular-nums">
      {isText ? textValue : `${prefix}${count}${suffix}`}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-[#7C1D2F] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`text-center ${
                i < STATS.length - 1 ? "sm:border-r sm:border-white/20" : ""
              }`}
            >
              <div className="font-display text-5xl lg:text-6xl font-bold text-white mb-2">
                <CountUp
                  target={stat.numericValue}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                  isText={stat.numericValue === 0}
                  textValue={stat.value}
                />
              </div>
              <p className="text-white/70 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
