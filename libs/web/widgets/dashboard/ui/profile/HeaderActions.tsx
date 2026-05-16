import type { ProfileHeaderActionModel } from "../../model/profile/profile.types";
import { EditProfile,ShareProfile,ViewPublic } from "./";

interface HeaderActionsProps {
  actions: ProfileHeaderActionModel[];
}

export function HeaderActions({ actions }: HeaderActionsProps) {
  const shareAction = actions.find((action) => action.id === "share");
  const viewPublicAction = actions.find(
    (action) => action.id === "view-public",
  );
  const editAction = actions.find((action) => action.id === "edit");

  return (
    <div className="flex items-center gap-2">
      {shareAction ? <ShareProfile action={shareAction} /> : null}
      {viewPublicAction ? <ViewPublic action={viewPublicAction} /> : null}
      {editAction ? <EditProfile action={editAction} /> : null}
    </div>
  );
}

