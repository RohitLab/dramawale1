import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C1D2F] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#7C1D2F] text-white shadow-md hover:bg-[#A63245] hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-[#7C1D2F] text-[#7C1D2F] bg-transparent hover:bg-[#7C1D2F] hover:text-white",
        secondary:
          "bg-[#FAF6F0] border border-[#E2D8CC] text-[#1C1C1C] hover:bg-[#F0E9DF]",
        ghost:
          "text-[#7C1D2F] hover:bg-[#FAF6F0]",
        terracotta:
          "bg-[#C4623A] text-white hover:bg-[#b3572f] hover:shadow-lg hover:-translate-y-0.5",
        white:
          "bg-white text-[#7C1D2F] hover:bg-[#FAF6F0] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        "white-outline":
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#7C1D2F]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
