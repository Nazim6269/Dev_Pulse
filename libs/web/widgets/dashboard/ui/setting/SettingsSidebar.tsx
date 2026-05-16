import { memo } from "react";

import { SettingsNavItem } from "@/widgets/dashboard/ui/setting/SettingsNavItem";
import type { SettingsNavSection } from "@/widgets/dashboard";
import { sidebarFooterAction } from "@/pages/dashboard/settings/data/settings.data";

interface SettingsSidebarProps {
  items: Array<SettingsNavSection & { isActive: boolean }>;
  onSectionChange: (id: SettingsNavSection["id"]) => void;
}

export const SettingsSidebar = memo(function SettingsSidebar({
  items,
  onSectionChange,
}: SettingsSidebarProps) {
  const FooterIcon = sidebarFooterAction.icon;

  return (
    <aside className="flex w-52 shrink-0 flex-col border-r border-border/40 bg-primaryColor px-3 py-6">
      <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.24em] text-muted-foreground/40">
        Settings
      </p>
      <nav className="flex flex-col gap-0.5">
        {items.map((item) => (
          <SettingsNavItem
            key={item.id}
            item={item}
            onSelect={onSectionChange}
          />
        ))}
      </nav>

      <div className="mt-auto px-3">
        <button
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[12px] text-rose-400/60 transition-all hover:bg-rose-400/[0.06] hover:text-rose-400"
          onClick={() => onSectionChange("danger-zone")}
          type="button"
        >
          <FooterIcon className="h-4 w-4" />
          <span>{sidebarFooterAction.label}</span>
        </button>
      </div>
    </aside>
  );
});
