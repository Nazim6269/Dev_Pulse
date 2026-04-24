interface StatBoxProps {
  label: string;
  value: string;
}

export function StatBox({ label, value }: StatBoxProps) {
  return (
    <div className="rounded-xl bg-muted/40 p-2.5 text-center">
      <p className="text-[16px] font-semibold text-foreground">{value}</p>
      <p className="mt-0.5 text-[10px] text-muted-foreground/40">{label}</p>
    </div>
  );
}
