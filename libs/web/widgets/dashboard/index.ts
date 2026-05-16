//=========================pull-requests=========================
export { usePullRequests } from "@/widgets/dashboard/model/pull-request/usePullRequests";
export {
  ActionDropdown,
  PullRequestHeader,
  PullRequestItem,
  PullRequestList,
  PullRequestsDashboard,
  ReviewerAvatars,
  StatusBadge,
} from "@/widgets/dashboard/ui/pull-request";

//=========================commits=========================
export {
  CommitTypeDistribution,
  DailyCommitChart,
  TimeOfDayHeatmap,
  RecentCommitItem,
  RecentCommitList,
  RepoContributionBar,
  RepoCommitItem,
  RepoCommitList,
  StatCard,
  StatCardSkeleton,
  StatsGrid,
} from "@/widgets/dashboard/ui/commit";

//goals
export { useTrendData } from "@/widgets/dashboard/model/goals/useTrendData";
export { useRecords } from "@/widgets/dashboard/model/goals/useRecords";
export { useGoalFilters } from "@/widgets/dashboard/model/goals/useGoalFilters";
export { useGoals } from "@/widgets/dashboard/model/goals/useGoals";
export { useGoalStats } from "@/widgets/dashboard/model/goals/useGoalStats";
export { useMilestones } from "@/widgets/dashboard/model/goals/useMilestones";
export { useCategories } from "@/widgets/dashboard/model/goals/useCategories";
export { useAchievements } from "@/widgets/dashboard/model/goals/useAchievements";
export {
  AchievementBadge,
  AchievementFeed,
  AchievementItem,
  CategoryGrid,
  CategoryItem,
  MilestoneItem,
  CategoryProgressBlocks,
  GoalIcon,
  GoalItem,
  GoalProgressBar,
  TrendSummary,
  TrendBar,
  RecordsGrid,
  RecordCard,
  ProgressStatsGrid,
  ProgressRing,
  MonthlyProgressCard,
  MilestoneUrgencyBadge,
  MilestoneList,
  GoalTrendChart,
  GoalStatusBadge,
} from "@/widgets/dashboard/ui/goals";

export type * as GoalsTypes from "@/widgets/dashboard/model/goals/goals-dashboard.types"; //as both goals and notifications have BadgeVariant type

//=========================notifications=========================
export { useNotifications } from "@/widgets/dashboard/model/notifications/useNotifications";
export { useNotificationFilters } from "@/widgets/dashboard/model/notifications/useNotificationFilters";
export { useNotificationStats } from "@/widgets/dashboard/model/notifications/useNotificationStats";
export { useNotificationActivity } from "@/widgets/dashboard/model/notifications/useNotificationActivity";
export { useNotificationGroups } from "@/widgets/dashboard/model/notifications/useNotificationGroups";
export {
  ActivitySparkline,
  ChannelFilterItem,
  ChannelFilterList,
  NotificationEmptyState,
  NotificationFeed,
  NotificationItem,
  NotificationGroup,
  NotificationIcon,
  NotificationsHeader,
  NotificationStatsPanel,
  QuickSettingsPanel,
  UnreadIndicatorDot,
  UrgentNotificationBanner,
  WeeklyStatsList,
} from "@/widgets/dashboard/ui/notification";
export type * as NotificationTypes from "@/widgets/dashboard/model/notifications/notification.types";

//=========================profile=========================
export { useProfileStats } from "@/widgets/dashboard/model/profile/useProfileStats";
export { useProfileLanguages } from "@/widgets/dashboard/model/profile/useProfileLanguages";
export { useProfileKPIs } from "@/widgets/dashboard/model/profile/useProfileKPIs";
export { useContributionActivity } from "@/widgets/dashboard/model/profile/useContributionActivity";
export { useRepositories } from "@/widgets/dashboard/model/profile/useRepositories";
export { useRecentActivity } from "@/widgets/dashboard/model/profile/useRecentActivity";
export { useProfile } from "@/widgets/dashboard/model/profile/useProfile";
export { useAchievements as useProfileAchievements } from "@/widgets/dashboard/model/profile/useAchievements";
export {
  AchievementCard,
  AchievementsGrid,
  ActivityContent,
  ActivityHeatmapGrid,
  ActivityIcon,
  ActivityItem,
  ActivityLegend,
  ActivityMeta,
  AvatarWithStatus,
  ContributionCalendar,
  EditProfile,
  HeaderActions,
  HeatmapCell,
  HeatmapRow,
  KPIItem,
  LanguageItem,
  MonthlyKPICard,
  ProfileBadges,
  ProfileBio,
  ProfileHeader,
  ProfileInfo,
  ProfileMeta,
  ProfileStatsGrid,
  RecentActivityFeed,
  RepositoriesList,
  RepositoryCard,
  RepositoryMeta,
  ShareProfile,
  SocialLinks,
  StatItem,
  StreakStats,
  TopLanguagesList,
  ViewPublic,
} from "@/widgets/dashboard/ui/profile";
export type * from "@/widgets/dashboard/model/profile/profile.types";

//=========================setting=========================
export { useAppearanceSettings } from "@/widgets/dashboard/model/settings/useAppearanceSettings";
export { useNotificationSettings } from "@/widgets/dashboard/model/settings/useNotificationSettings";
export { useProfileSettings } from "@/widgets/dashboard/model/settings/useProfileSettings";
export { useSecuritySettings } from "@/widgets/dashboard/model/settings/useSecuritySettings";
export { useGithubSettings } from "@/widgets/dashboard/model/settings/useGithubSettings";
export { usePersistentSettingsState } from "@/widgets/dashboard/model/settings/usePersistentSettingsState";
export { useSettingsNavigation } from "@/widgets/dashboard/model/settings/useSettingsNavigation";
export {
  AccentColorPicker,
  ApiTokenManager,
  AppearanceCard,
  AvatarUploader,
  BioEditor,
  DangerZoneCard,
  DeleteAccountAction,
  DensityToggle,
  ExportDataAction,
  GithubConnectionCard,
  GithubStatusBadge,
  LanguageSelector,
  NotificationSettingsList,
  NotificationToggleItem,
  ProfileCard,
  ProfileFieldGrid,
  ProfileInputField,
  RepoAccessSelect,
  SecurityCard,
  SessionManager,
  SettingsNavItem,
  SettingsSidebar,
  SyncIntervalSelect,
  ThemeSelector,
  TwoFactorStatus,
} from "@/widgets/dashboard/ui/setting";
export type * from "@/widgets/dashboard/model/settings/settings.types";

//=========================team-dashboard=========================
export { useCollaborationMatrix } from "@/widgets/dashboard/model/team-dashboard/useCollaborationMatrix";
export { useSubTeams } from "@/widgets/dashboard/model/team-dashboard/useSubTeams";
export { useTeamMembers } from "@/widgets/dashboard/model/team-dashboard/useTeamMembers";
export { useTeamStats } from "@/widgets/dashboard/model/team-dashboard/useTeamStats";
export { useTeamVelocity } from "@/widgets/dashboard/model/team-dashboard/useTeamVelocity";
export {
  CollaborationMatrix,
  HealthBar,
  MatrixCell,
  MatrixLegend,
  SubTeamCard,
  SubTeamGrid,
  TeamMemberCard,
  TeamMembersGrid,
  TeamStatCard,
  TeamStatsGrid,
  TeamVelocityChart,
  VelocityBar,
  VelocitySummary,
} from "@/widgets/dashboard/ui/team-dashboard";
export type * from "@/widgets/dashboard/model/team-dashboard/team.types";

