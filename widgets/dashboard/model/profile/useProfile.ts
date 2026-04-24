"use client";

import { useMemo } from "react";

import { profileData } from "@/pages/dashboard/profile/data/profile.data";
import { getProfileIcon } from "../../ui/profile/shared/profileIconRegistry";
import type {
  ProfileHeaderActionModel,
  ProfileIdentityModel,
} from "./profile.types";

export function useProfile() {
  const headerActions = useMemo<ProfileHeaderActionModel[]>(
    () =>
      profileData.headerActions.map((action: { iconKey: any }) => ({
        ...action,
        icon: getProfileIcon(action.iconKey),
      })),
    [],
  );

  const profile = useMemo<ProfileIdentityModel>(
    () => ({
      ...profileData.identity,
      meta: [
        {
          id: "location",
          label: "Location",
          value: profileData.identity.location,
          icon: getProfileIcon("map-pin"),
          tone: "neutral",
        },
        {
          id: "website",
          label: "Website",
          value: profileData.identity.websiteLabel,
          icon: getProfileIcon("link"),
          tone: "violet",
        },
        {
          id: "joined",
          label: "Joined",
          value: profileData.identity.joinedLabel,
          icon: getProfileIcon("calendar"),
          tone: "neutral",
        },
      ],
      socials: profileData.identity.socials.map((social: { iconKey: any }) => ({
        ...social,
        icon: getProfileIcon(social.iconKey),
      })),
    }),
    [],
  );

  return {
    title: profileData.title,
    profile,
    headerActions,
  };
}
