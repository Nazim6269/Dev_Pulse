export function AvatarBadge({
  initials,
  gradient,
}: {
  initials: string;
  gradient: string;
}) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-[11px] font-semibold text-white ${gradient}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
