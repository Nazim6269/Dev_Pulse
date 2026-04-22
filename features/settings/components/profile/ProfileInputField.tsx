import { memo } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileInputFieldProps {
  label: string;
  onChange: (value: string) => void;
  type?: string;
  value: string;
}

export const ProfileInputField = memo(function ProfileInputField({
  label,
  onChange,
  type = "text",
  value,
}: ProfileInputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-[11px] text-white/50">{label}</Label>
      <Input
        className="h-9 border-white/[0.08] bg-white/[0.04] text-[13px] text-white/80 focus:border-violet-500/50 focus:ring-violet-500/20"
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
    </div>
  );
});

