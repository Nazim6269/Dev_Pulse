import { memo } from "react";

interface SectionDescProps {
  children: React.ReactNode;
}

export const SectionDesc = memo(function SectionDesc({ children }: SectionDescProps) {
  return <p className="mb-5 text-[12px] text-white/35">{children}</p>;
});

