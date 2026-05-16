"use client";

import { useState } from "react";
import { SlidersHorizontal, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import GenericButton from "@/components/common/GenericButton";
import { GenericSearch } from "@/components/common/search/GenericSearch";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import GenericDropDown from "@/components/common/GenericDropDown";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import type { SearchResult } from "@/types/search";
import { useGithubRepos, useAddGithubCollaborator } from "@/features/github";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type NavSearchResult = SearchResult & {
  href: string;
  label: string;
  value: string;
};

function searchNavigation(query: string): NavSearchResult[] {
  const q = query.toLowerCase();
  return NAV_LINKS.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.value.toLowerCase().includes(q),
  ) as NavSearchResult[];
}

const GITHUB_USERNAME = "Nazim6269";

export default function TopBar() {
  const router = useRouter();
  
  const { data: repos } = useGithubRepos(GITHUB_USERNAME);
  
  // Sort repos by updatedAt and get top 2
  const topRepos = repos
    ? [...repos]
        .sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime())
        .slice(0, 2)
    : [];

  const [selectedRepo, setSelectedRepo] = useState<string>("All repos");
  
  const [inviteOpen, setInviteOpen] = useState(false);
  const [collaboratorName, setCollaboratorName] = useState("");
  
  const { mutateAsync: addCollaborator, isPending: isAdding } = useAddGithubCollaborator();

  const handleInvite = async () => {
    if (!collaboratorName || selectedRepo === "All repos") return;
    try {
      await addCollaborator({
        username: GITHUB_USERNAME,
        repo: selectedRepo,
        collaborator: collaboratorName,
      });
      setInviteOpen(false);
      setCollaboratorName("");
      // Ideally show a success toast here
    } catch (error) {
      console.error("Failed to add collaborator", error);
      // Ideally show an error toast here
    }
  };

  return (
    <header className="h-14 border-b border-border bg-primaryColor flex items-center px-4 sm:px-6 gap-4 shrink-0">
      {/* Page title */}
      <div className="block sm:hidden">
        <GenericDropDown options={NAV_LINKS} placeholder="Overview" />
      </div>

      <div className="flex-1" />

      {/* Search */}
      <GenericSearch
        onSearch={searchNavigation}
        onSelect={(item) => {
          if (item.href) {
            router.push(item.href);
          }
        }}
        placeholder="Search pages and settings..."
        debounceMs={0}
        minChars={1}
        size="lg"
        className="w-sm hidden xl:block"
      />

      {/* Date filter */}
      <GenericDropDown
        options={[
          { label: "Last 30 days", value: "30" },
          { label: "Last 60 days", value: "60" },
          { label: "Last 90 days", value: "90" },
        ]}
        placeholder="Select..."
        leftIcon={<SlidersHorizontal size={13} />}
        className="hidden md:block "
        variant="dark"
      />

      {/* Button group (only visible on medium and larger screens) */}
      <div className="hidden md:flex items-center gap-1 rounded-xl border border-border-base bg-surface-muted p-1">
        <GenericButton
          title="All repos"
          size="sm"
          variant={selectedRepo === "All repos" ? "primary" : "no-style"}
          className={`px-3 text-sm ${selectedRepo === "All repos" ? "" : "text-muted-foreground hover:text-foreground"}`}
          onClick={() => setSelectedRepo("All repos")}
        />
        {topRepos.map((repo) => (
          <GenericButton
            key={repo.id}
            title={repo.name}
            size="sm"
            variant={selectedRepo === repo.name ? "primary" : "no-style"}
            className={`px-3 text-sm ${selectedRepo === repo.name ? "" : "text-muted-foreground hover:text-foreground"}`}
            onClick={() => setSelectedRepo(repo.name)}
          />
        ))}
      </div>

      {/* Invite Button */}
      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogTrigger asChild>
          <Button 
            className="hidden lg:flex h-9 cursor-pointer rounded-xl border border-orangeColor/20 bg-orangeColor/10 px-3 text-sm text-orangeColor hover:bg-orangeColor/15 disabled:opacity-50"
            disabled={selectedRepo === "All repos"}
          >
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Invite member
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Invite Collaborator</DialogTitle>
            <DialogDescription>
              Add a new collaborator to <span className="font-semibold">{GITHUB_USERNAME}/{selectedRepo}</span>.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                placeholder="github-username"
                className="col-span-3"
                value={collaboratorName}
                onChange={(e) => setCollaboratorName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleInvite} disabled={!collaboratorName || isAdding}>
              {isAdding && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Invite
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ThemeToggle />

      {/* Sync badge (visible on small screens and above) */}
      <div className="hidden lg:flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
        <span className="text-sm text-white/30">Synced</span>
      </div>
    </header>
  );
}
