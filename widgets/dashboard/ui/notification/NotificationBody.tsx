import { cn } from "@/lib/utils";

export interface NotificationBodyProps {
  title: string;
  body: string;
  timeLabel: string;
  repo?: string;
  read: boolean;
}

export function NotificationBody({
  title,
  body,
  timeLabel,
  repo,
  read,
}: NotificationBodyProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className="mb-0.5 flex items-start justify-between gap-2">
        <p
          className={cn(
            "text-[12px] leading-tight",
            read ? "text-muted-foreground/70" : "font-medium text-foreground/90",
          )}
        >
          {title}
        </p>
        <span className="mt-0.5 shrink-0 text-[10px] text-muted-foreground/50">{timeLabel}</span>
      </div>
      <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground/60">{body}</p>
      {repo ? (
        <span className="mt-1.5 inline-block rounded-md bg-violet-400/[0.07] px-2 py-0.5 font-mono text-[10px] text-violet-400/60">
          {repo}
        </span>
      ) : null}
    </div>
  );
}
