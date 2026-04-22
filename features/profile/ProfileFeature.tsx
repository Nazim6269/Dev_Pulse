"use client";

import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";
import { AchievementsGrid } from "@/features/profile/components/achievements/AchievementsGrid";
import { ContributionCalendar } from "@/features/profile/components/activity/ContributionCalendar";
import { ProfileHeader } from "@/features/profile/components/header/ProfileHeader";
import { ProfileCard } from "@/features/profile/components/identity/ProfileCard";
import { MonthlyKPICard } from "@/features/profile/components/kpis/MonthlyKPICard";
import { TopLanguagesList } from "@/features/profile/components/languages/TopLanguagesList";
import { RepositoriesList } from "@/features/profile/components/repositories/RepositoriesList";
import { RecentActivityFeed } from "@/features/profile/components/feed/RecentActivityFeed";
import { ProfileStatsGrid } from "@/features/profile/components/stats/ProfileStatsGrid";
import { useAchievements } from "@/features/profile/hooks/useAchievements";
import { useContributionActivity } from "@/features/profile/hooks/useContributionActivity";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useProfileKPIs } from "@/features/profile/hooks/useProfileKPIs";
import { useProfileLanguages } from "@/features/profile/hooks/useProfileLanguages";
import { useProfileStats } from "@/features/profile/hooks/useProfileStats";
import { useRecentActivity } from "@/features/profile/hooks/useRecentActivity";
import { useRepositories } from "@/features/profile/hooks/useRepositories";

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
    <div className="flex h-screen overflow-hidden bg-primaryColor font-sans text-white">
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
              <AchievementsGrid items={achievements} earnedLabel={earnedLabel} />
              <RepositoriesList items={repositories} totalLabel={totalLabel} />
              <RecentActivityFeed items={recentActivity} />
            </div>
          </div>
        </CustomScrollableContainer>
      </div>
    </div>
  );
}
