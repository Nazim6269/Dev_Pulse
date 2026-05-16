import { memo } from "react";

import { Separator } from "@/components/ui/separator";
import { SettingsCard } from "@/widgets/dashboard/ui/setting/shared/SettingsCard";
import { DeleteAccountAction } from "@/widgets/dashboard/ui/setting/DeleteAccountAction";
import { ExportDataAction } from "@/widgets/dashboard/ui/setting/ExportDataAction";

export const DangerZoneCard = memo(function DangerZoneCard() {
  return (
    <SettingsCard id="settings-section-danger-zone" tone="danger">
      <h2 className="mb-1 text-[13px] font-medium text-rose-400">Danger zone</h2>
      <p className="mb-5 text-[12px] text-muted-foreground/50">These actions are irreversible. Proceed with caution.</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[12px] text-foreground/70">Export all data</p>
            <p className="text-[11px] text-muted-foreground/50">Download a ZIP of your complete account data</p>
          </div>
          <ExportDataAction />
        </div>
        <Separator className="bg-border/40" />
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[12px] text-rose-400/80">Delete account</p>
            <p className="text-[11px] text-muted-foreground/50">Permanently remove your account and all data</p>
          </div>
          <DeleteAccountAction />
        </div>
      </div>
    </SettingsCard>
  );
});

