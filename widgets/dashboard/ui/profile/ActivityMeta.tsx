export function ActivityMeta({ timeAgo }: { timeAgo: string }) {
  return <span className="mt-0.5 shrink-0 text-[10px] text-muted-foreground/40">{timeAgo}</span>;
}
