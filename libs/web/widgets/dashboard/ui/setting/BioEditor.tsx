import { memo } from "react";

import { Label } from "@/components/ui/label";

interface BioEditorProps {
  count: number;
  maxLength: number;
  onChange: (value: string) => void;
  value: string;
}

export const BioEditor = memo(function BioEditor({
  count,
  maxLength,
  onChange,
  value,
}: BioEditorProps) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <Label className="text-[11px] text-muted-foreground/50">Bio</Label>
      <textarea
        className="min-h-[88px] w-full resize-none rounded-xl border border-border/40 bg-muted/30 px-3 py-2.5 text-[13px] text-foreground/80 placeholder:text-muted-foreground/30 focus:border-violet-500/50 focus:outline-none"
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        value={value}
      />
      <p className="text-right text-[10px] text-muted-foreground/40">
        {count} / {maxLength}
      </p>
    </div>
  );
});

