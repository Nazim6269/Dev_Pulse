import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0c0c0e] text-white overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
         
        </main>
      </div>
    </div>
  );
}