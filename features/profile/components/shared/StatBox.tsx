interface StatBoxProps {
  label: string;
  value: string;
}

export function StatBox({ label, value }: StatBoxProps) {
  return (
    <div className="rounded-xl bg-white/[0.04] p-2.5 text-center">
      <p className="text-[16px] font-semibold text-white">{value}</p>
      <p className="mt-0.5 text-[10px] text-white/30">{label}</p>
    </div>
  );
}
