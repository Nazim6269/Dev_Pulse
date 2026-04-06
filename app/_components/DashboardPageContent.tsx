
import { Sidebar, TopBar, ProfileCard } from "./index";

export default function DashboardPage() {
    return (
        <div className="flex h-screen bg-[#0c0c0e] text-white overflow-hidden font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-12 gap-4 max-w-[1400px] mx-auto">

                        <div className="col-span-12 md:col-span-4">
                            <ProfileCard />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}