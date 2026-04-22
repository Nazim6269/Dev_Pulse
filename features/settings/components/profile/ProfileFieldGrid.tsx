import { memo } from "react";

interface ProfileFieldGridProps {
  children: React.ReactNode;
}

export const ProfileFieldGrid = memo(function ProfileFieldGrid({
  children,
}: ProfileFieldGridProps) {
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>;
});

