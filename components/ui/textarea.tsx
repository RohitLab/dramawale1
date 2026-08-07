import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-[#E2D8CC] bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#9A9A9A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C1D2F] focus-visible:border-[#7C1D2F] disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
