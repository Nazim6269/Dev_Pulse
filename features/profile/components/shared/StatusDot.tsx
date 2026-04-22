import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusDotVariants = cva("block rounded-full border-2 shadow", {
  variants: {
    status: {
      online: "bg-emerald-400 border-[#111114] shadow-emerald-400/40",
      offline: "bg-white/20 border-[#111114] shadow-white/20",
    },
  },
  defaultVariants: {
    status: "offline",
  },
});

interface StatusDotProps extends VariantProps<typeof statusDotVariants> {
  className?: string;
}

export function StatusDot({ className, status }: StatusDotProps) {
  return <span className={cn(statusDotVariants({ status }), className)} />;
}
