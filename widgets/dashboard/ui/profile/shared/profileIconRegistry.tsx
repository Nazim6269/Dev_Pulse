import {
  Calendar,
  Clock,
  Edit3,
  ExternalLink,
  Eye,
  GitCommit,
  GitFork,
  GitPullRequest,
  Globe,
  Link2,
  MapPin,
  Share2,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

import GitMerge from "@/icons/GitMerge";
import type {
  ProfileIconComponent,
  ProfileIconKey,
} from "../../../model/profile/profile.types";

const iconRegistry: Record<ProfileIconKey, ProfileIconComponent> = {
  calendar: Calendar,
  clock: Clock,
  edit: Edit3,
  external: ExternalLink,
  eye: Eye,
  fork: GitFork,
  "git-commit": GitCommit,
  "git-merge": GitMerge,
  globe: Globe,
  link: Link2,
  "map-pin": MapPin,
  "pull-request": GitPullRequest,
  share: Share2,
  star: Star,
  "trending-up": TrendingUp,
  zap: Zap,
};

export function getProfileIcon(iconKey: ProfileIconKey) {
  return iconRegistry[iconKey];
}
