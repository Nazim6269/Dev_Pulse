import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { NotificationFilterTabModel } from "../../model/notifications/notification.types";
import { Badge } from "./shared/Badge";

const filterTabVariants = cva(
  "w-full rounded-xl px-3 py-2 text-left text-[12px] transition-all flex items-center justify-between",
  {
    variants: {
      active: {
        true: "bg-violet-500/15 text-violet-400",
        false: "text-muted-foreground/60 hover:bg-muted hover:text-foreground/80",
      },
    },
  },
);

export function FilterTabButton({
  item,
  onClick,
}: {
  item: NotificationFilterTabModel;
  onClick: () => void;
}) {
  return (
    <button className={cn(filterTabVariants({ active: item.active }))} onClick={onClick}>
      <span>{item.label}</span>
      {item.countLabel ? (
        <Badge variant={item.badgeVariant}>{item.countLabel}</Badge>
      ) : null}
    </button>
  );
}
