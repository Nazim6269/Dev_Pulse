import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import type { ProfileIdentityModel } from "../../model/profile/profile.types";
import { DashboardCard } from "./shared/DashboardCard";
import { AvatarWithStatus } from "./AvatarWithStatus";
import { ProfileBadges } from "./ProfileBadges";
import { ProfileBio } from "./ProfileBio";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileMeta } from "./ProfileMeta";
import { SocialLinks } from "./SocialLinks";

interface ProfileCardProps {
  profile: ProfileIdentityModel;
  children: ReactNode;
}

export function ProfileCard({ profile, children }: ProfileCardProps) {
  return (
    <DashboardCard contentClassName="flex flex-col gap-4 p-6">
      <AvatarWithStatus initials={profile.initials} status={profile.status} />
      <ProfileInfo name={profile.name} email={profile.email} />
      <ProfileBadges items={profile.badges} />
      <ProfileBio bio={profile.bio} />
      <ProfileMeta items={profile.meta} />
      <SocialLinks items={profile.socials} />
      <Separator className="bg-border/40" />
      {children}
    </DashboardCard>
  );
}
