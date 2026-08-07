import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF6F0] px-4 text-center">
      {/* Decorative number */}
      <div className="relative mb-6">
        <span
          className="font-display text-[180px] sm:text-[220px] font-bold leading-none select-none"
          style={{ color: "#F0E9DF" }}
        >
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl">🎭</span>
        </div>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-3">
        The curtain has fallen
      </h1>
      <p className="text-[#4A4A4A] text-lg max-w-md mb-8 leading-relaxed">
        This page seems to have wandered off stage. Let&apos;s get you back to the
        spotlight.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/" className="group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
