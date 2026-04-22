import { cva, type VariantProps } from "class-variance-authority";
import { memo } from "react";

import { cn } from "@/lib/utils";

const settingsCardVariants = cva(
  "rounded-2xl border border-white/[0.06] bg-[#111114] p-6",
  {
    variants: {
      tone: {
        default: "",
        danger: "border-rose-500/[0.15] bg-rose-500/[0.05]",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

interface SettingsCardProps extends VariantProps<typeof settingsCardVariants> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SettingsCard = memo(function SettingsCard({
  children,
  className,
  id,
  tone,
}: SettingsCardProps) {
  return (
    <section id={id} className={cn(settingsCardVariants({ tone }), className)}>
      {children}
    </section>
  );
});

