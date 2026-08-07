import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-[#E2D8CC] bg-white px-4 py-2 text-sm text-[#1C1C1C] placeholder:text-[#9A9A9A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C1D2F] focus-visible:border-[#7C1D2F] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
