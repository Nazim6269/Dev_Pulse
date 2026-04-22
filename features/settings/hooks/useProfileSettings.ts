import { useCallback, useMemo, useState } from "react";

import {
  defaultProfileSettings,
  profileConstraints,
} from "@/features/settings/data/settings.data";
import { usePersistentSettingsState } from "@/features/settings/hooks/usePersistentSettingsState";
import type { ProfileSettingsForm } from "@/features/settings/types/settings.types";

const storageKey = "devpulse-settings-profile";

export function useProfileSettings() {
  const [form, setForm] = usePersistentSettingsState<ProfileSettingsForm>(storageKey, defaultProfileSettings);
  const [hasSaved, setHasSaved] = useState(false);

  const updateField = useCallback(
    <TField extends keyof ProfileSettingsForm>(field: TField, value: ProfileSettingsForm[TField]) => {
      setHasSaved(false);
      setForm((current) => ({ ...current, [field]: value }));
    },
    [setForm],
  );

  const validation = useMemo(
    () => ({
      firstName: form.firstName.trim().length > 0,
      lastName: form.lastName.trim().length > 0,
      email: /\S+@\S+\.\S+/.test(form.email),
      website: form.website.trim().length > 0,
      bio: form.bio.length <= profileConstraints.bioMaxLength,
    }),
    [form],
  );

  const initials = useMemo(
    () => `${form.firstName.charAt(0)}${form.lastName.charAt(0)}`.toUpperCase(),
    [form.firstName, form.lastName],
  );

  const bioCount = form.bio.length;
  const canSave = Object.values(validation).every(Boolean);

  const saveProfile = useCallback(() => {
    setHasSaved(true);
  }, []);

  return {
    avatarHint: profileConstraints.avatarHint,
    bioCount,
    bioMaxLength: profileConstraints.bioMaxLength,
    canSave,
    emailVerified: validation.email,
    form,
    hasSaved,
    initials,
    updateField,
    saveProfile,
  };
}
