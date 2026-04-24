import { memo } from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = memo(function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="mb-1 text-[13px] font-medium text-foreground/90">{children}</h2>;
});

