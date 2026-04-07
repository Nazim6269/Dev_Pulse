export function SidebarButton({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`relative flex aspect-square w-full items-center justify-center rounded-xl transition-all ${active
        ? "bg-violet-500/15 text-violet-400"
        : "text-white/25 hover:bg-white/[0.05] hover:text-white/60"
        }`}
    >
      {icon}
      {active && (
        <span className="absolute right-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-violet-400" />
      )}
    </button>
  );
}