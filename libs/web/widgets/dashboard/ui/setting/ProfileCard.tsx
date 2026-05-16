import { Check } from "lucide-react";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { useProfileSettings } from "../../model/settings/useProfileSettings";
import { SettingsCard } from "./shared/SettingsCard";
import { SectionTitle } from "./shared/SectionTitle";
import { SectionDesc } from "./shared/SectionDesc";
import { AvatarUploader } from "./AvatarUploader";
import { ProfileFieldGrid } from "./ProfileFieldGrid";
import { ProfileInputField } from "./ProfileInputField";
import { BioEditor } from "./BioEditor";
import { Badge } from "../notification/shared/Badge";


export const ProfileCard = memo(function ProfileCard() {
  const settings = useProfileSettings();

  return (
    <SettingsCard id="settings-section-profile">
      <SectionTitle>Personal information</SectionTitle>
      <SectionDesc>This is how you appear across DevPulse and your public profile.</SectionDesc>
      <AvatarUploader helperText={settings.avatarHint} initials={settings.initials} />

      <div className="mb-4">
        <ProfileFieldGrid>
          <ProfileInputField label="First name" onChange={(value) => settings.updateField("firstName", value)} value={settings.form.firstName} />
          <ProfileInputField label="Last name" onChange={(value) => settings.updateField("lastName", value)} value={settings.form.lastName} />
        </ProfileFieldGrid>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <ProfileInputField label="Email address" onChange={(value) => settings.updateField("email", value)} type="email" value={settings.form.email} />
        <div className="-mt-10 flex justify-end pr-2">
          <Badge variant={settings.emailVerified ? "success" : "warning"}>
            {settings.emailVerified ? <Check className="mr-1 h-2.5 w-2.5" /> : null}
            {settings.emailVerified ? "Verified" : "Needs review"}
          </Badge>
        </div>
      </div>

      <BioEditor count={settings.bioCount} maxLength={settings.bioMaxLength} onChange={(value) => settings.updateField("bio", value)} value={settings.form.bio} />

      <ProfileFieldGrid>
        <ProfileInputField label="Location" onChange={(value) => settings.updateField("location", value)} value={settings.form.location} />
        <ProfileInputField label="Website" onChange={(value) => settings.updateField("website", value)} value={settings.form.website} />
      </ProfileFieldGrid>

      <div className="mt-5 flex justify-end border-t border-border/40 pt-5">
        <Button className="h-8 bg-violet-500 px-5 text-[12px] text-primary-foreground hover:bg-violet-400" disabled={!settings.canSave} onClick={settings.saveProfile}>
          {settings.hasSaved ? "Saved" : "Save changes"}
        </Button>
      </div>
    </SettingsCard>
  );
});
