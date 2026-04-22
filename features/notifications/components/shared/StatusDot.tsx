export function StatusDot({ className }: { className?: string }) {
  return (
    <span
      className={`absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-primaryColor bg-rose-400 ${className ?? ""}`}
    />
  );
}
