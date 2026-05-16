"use client";

import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";

import {
  useProfile,
  useProfileStats,
  useProfileLanguages,
  useProfileKPIs,
  useContributionActivity,
  useRepositories,
  useRecentActivity,
  AchievementsGrid,
  ContributionCalendar,
  ProfileHeader,
  MonthlyKPICard,
  TopLanguagesList,
  RepositoriesList,
  RecentActivityFeed,
  ProfileStatsGrid,
} from "@/widgets/dashboard";
import { useAchievements } from "@/widgets/dashboard/model/profile/useAchievements";
import { ProfileCard } from "@/widgets/dashboard/ui/profile";

export function ProfileFeature() {
  const { title, profile, headerActions } = useProfile();
  const { stats } = useProfileStats();
  const { items: languages } = useProfileLanguages();
  const { items: kpis } = useProfileKPIs();
  const { activity } = useContributionActivity();
  const { items: achievements, earnedLabel } = useAchievements();
  const { items: repositories, totalLabel } = useRepositories();
  const { items: recentActivity } = useRecentActivity();

  return (
    <div className="flex h-screen overflow-hidden bg-primaryColor font-sans text-foreground">
      <div className="flex flex-1 flex-col overflow-hidden">
        <ProfileHeader title={title} actions={headerActions} />

        <CustomScrollableContainer className="flex-1 p-6">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
              <ProfileCard profile={profile}>
                <ProfileStatsGrid items={stats} />
                <TopLanguagesList items={languages} />
              </ProfileCard>
              <MonthlyKPICard items={kpis} />
            </div>

            <div className="col-span-12 flex flex-col gap-4 md:col-span-8">
              <ContributionCalendar activity={activity} />
              <AchievementsGrid
                items={achievements}
                earnedLabel={earnedLabel}
              />
              <RepositoriesList items={repositories} totalLabel={totalLabel} />
              <RecentActivityFeed items={recentActivity} />
            </div>
          </div>
        </CustomScrollableContainer>
      </div>
    </div>
  );
}

export default function DefaultExport() {
  return null;
}
