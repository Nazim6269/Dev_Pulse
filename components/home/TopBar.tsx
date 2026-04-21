"use client";

import { Search, SlidersHorizontal, ChevronDown, Plus } from "lucide-react";
import { DropDownMenu } from "./index";
import { Button } from "@/components/ui/button";
import GenericButton from "@/components/common/GenericButton";
import { GenericSearch } from "@/components/common/search/GenericSearch";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import GenericDropDown from "@/components/common/GenericDropDown";

function searchNavigation(query: string) {
  const q = query.toLowerCase();
  return NAV_LINKS.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.value.toLowerCase().includes(q),
  );
}
export default function TopBar() {
  const router = useRouter();
  return (
    <header className="h-14 border-b border-customRed bg-primaryColor flex items-center px-4 sm:px-6 gap-4 shrink-0">
      {/* Page title */}
      <div className="block sm:hidden">
        <DropDownMenu
          title="Overview"
          placeholderClass="text-placeHolderTextColor hover:text-violetColor"
          itemClass="text-placeHolderTextColor hover:text-violetColor"
          items={NAV_LINKS}
          size="md"
        />
      </div>

      <div className="flex-1" />

      {/* Search */}

      {/* Date filter */}
      <GenericSearch
        onSearch={searchNavigation as any}
        onSelect={(item: any) => {
          if (item && item.id) {
            router.push(item.id);
          }
        }}
        placeholder="Search pages and settings..."
        debounceMs={0}
        minChars={1}
        size="lg"
        className="w-sm hidden xl:block"
      />

      <GenericDropDown
        options={[
          { label: "Last 30 days", value: "30" },
          { label: "Last 60 days", value: "60" },
          { label: "Last 90 days", value: "90" },
        ]}
        placeholder="Select..."
        leftIcon={<SlidersHorizontal size={13} />}
        className="w-[180px]"
        variant="dark"
      />

      {/* Button group (only visible on medium and larger screens) */}
      <div className="hidden md:flex items-center gap-1 rounded-xl border border-white/6 bg-white/4 p-1">
        <GenericButton
          title="All repos"
          size="sm"
          variant="ghost"
          className="px-3 text-sm"
        />
        <GenericButton
          title="devpulse/web"
          size="sm"
          variant="ghost"
          className="px-3 text-sm"
        />
        <GenericButton
          title="devpulse/api"
          size="sm"
          variant="ghost"
          className="px-3 text-sm"
        />
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
