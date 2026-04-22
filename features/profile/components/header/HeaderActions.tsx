import type { ProfileHeaderActionModel } from "@/features/profile/types/profile.types";

import { EditProfile } from "./EditProfile";
import { ShareProfile } from "./ShareProfile";
import { ViewPublic } from "./ViewPublic";

interface HeaderActionsProps {
  actions: ProfileHeaderActionModel[];
}

export function HeaderActions({ actions }: HeaderActionsProps) {
  const shareAction = actions.find((action) => action.id === "share");
  const viewPublicAction = actions.find((action) => action.id === "view-public");
  const editAction = actions.find((action) => action.id === "edit");

  return (
    <div className="flex items-center gap-2">
      {shareAction ? <ShareProfile action={shareAction} /> : null}
      {viewPublicAction ? <ViewPublic action={viewPublicAction} /> : null}
      {editAction ? <EditProfile action={editAction} /> : null}
    </div>
  );
}
