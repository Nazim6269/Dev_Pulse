import { Search, SlidersHorizontal, ChevronDown, Plus } from "lucide-react";
import { DropDownMenu } from "./index";
import { Button } from "@/components/ui/button";
import CustomSearch from "@/components/common/CustomSearch";
import GenericButton from "@/components/common/GenericButton";
export default function TopBar() {
  return (
    <header className="h-14 border-b border-white/6 bg-primaryColor flex items-center px-4 sm:px-6 gap-4 shrink-0">
      {/* Page title */}
      <div className="block sm:hidden">
        <DropDownMenu
          title="Overview"
          placeholderClass="text-placeHolderTextColor hover:text-violetColor"
          itemClass="text-placeHolderTextColor hover:text-violetColor"
          items={[
            { label: "Overview", value: "overview", href: "/" },
            { label: "Commits", value: "commits", href: "/commits" },
            { label: "PRs", value: "prs", href: "/prs" },
            { label: "Issues", value: "issues", href: "/issues" },
            { label: "Repos", value: "repos", href: "/repos" },
            { label: "Contributors", value: "contributors", href: "/contributors" },
            { label: "Settings", value: "settings", href: "/settings" },
            { label: "Notification", value: "notification", href: "/notification" },
            { label: "Profile", value: "profile", href: "/profile" },
          ]}
        />
      </div>

      <div className="flex-1" />

      {/* Search */}
      <CustomSearch
        placeholder="Search repos, PRs..."
        inputClass="text-sm"
        iconSize={13}
        iconClass="text-white/30 shrink-0"
      />

      {/* Date filter */}
      <DropDownMenu
        title="Last 30 days"
        placeholderClass="text-placeHolderTextColor hover:text-violetColor"
        itemClass="text-placeHolderTextColor hover:text-violetColor"
        leftIcon={<SlidersHorizontal size={13} />}
        items={[
          { label: "Last 30 days", value: "30" },
          { label: "Last 60 days", value: "60" },
          { label: "Last 90 days", value: "90" },
        ]}
      />

      {/* Button group (only visible on medium and larger screens) */}
      <div className="hidden md:flex items-center gap-1 rounded-xl border border-white/6 bg-white/4 p-1">
        <GenericButton title="All repos" size="sm" variant="ghost" className="px-3 text-sm" />
        <GenericButton title="devpulse/web" size="sm" variant="ghost" className="px-3 text-sm" />
        <GenericButton title="devpulse/api" size="sm" variant="ghost" className="px-3 text-sm" />
      </div>

      {/* Invite Button */}
      <Button className="hidden lg:flex h-9 cursor-pointer rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 text-sm text-violet-400 hover:bg-violet-500/15">
        <Plus className="mr-1.5 h-3.5 w-3.5" />
        Invite member
      </Button>

      {/* Sync badge (visible on small screens and above) */}
      <div className="hidden lg:flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
        <span className="text-sm text-white/30">Synced</span>
      </div>
    </header>
  );
}