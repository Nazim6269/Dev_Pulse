import { Button } from "@/components/ui/button";
import type { SocialLinkModel } from "../../model/profile/profile.types";

interface SocialLinksProps {
  items: SocialLinkModel[];
}

export function SocialLinks({ items }: SocialLinksProps) {
  const socialItems = items.map((item) => {
    const Icon = item.icon;

    return (
      <Button
        key={item.id}
        variant="ghost"
        size="sm"
        className="h-8 gap-1.5 px-2 text-[11px] text-muted-foreground/50 hover:bg-muted/50 hover:text-foreground/80"
      >
        <Icon size={15} />
        {item.label}
      </Button>
    );
  });

  return <div className="flex gap-2 pt-1">{socialItems}</div>;
}
