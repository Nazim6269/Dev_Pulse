import CustomScrollableContainer from "@/components/common/CustomScrollableContainer";
import { Sidebar, TopBar, ProfileCard, StatsRow, ActivityChart, PRCycleCard, ContributionHeatmap, RecentPRs, GoalTracker, TopRepos, ReviewStats } from "./index";

export default function DashboardPageContent() {
    return (
        <div className="flex h-screen bg-[#0c0c0e] text-white overflow-hidden font-sans">
            <div className="flex-1 flex flex-col overflow-hidden">
                <CustomScrollableContainer className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-12 gap-4 max-w-[1920px] mx-auto">

                        {/* Row 1 */}
                        <div className="col-span-12 md:col-span-4">
                            <ProfileCard />
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <StatsRow />
                        </div>
                        {/* Row 2 */}
                        <div className="col-span-12 md:col-span-8">
                            <ActivityChart />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <PRCycleCard />
                        </div>

                        {/* Row 3 */}
                        <div className="col-span-12">
                            <ContributionHeatmap />
                        </div>

                        {/* Row 4 */}
                        <div className="col-span-12 md:col-span-5">
                            <RecentPRs />
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <GoalTracker />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <TopRepos />
                        </div>
                        {/* Row 5 */}
                        <div className="col-span-12">
                            <ReviewStats />
                        </div>
                    </div>
                </CustomScrollableContainer>
            </div>
        </div>
    );
}