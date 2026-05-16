"use client";

import { useGithubProfile } from "@/features/github/model/github.hooks";
import { MapPin, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProfileCardSkeleton } from "@/widgets/dashboard/ui/home/skeleton";

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Python: "bg-yellow-400",
Rust: "bg-orange-400",
  Go: "bg-cyan-400",  
};

export default function ProfileCard() {
  const { data, isLoading } = useGithubProfile("Nazim6269");
  if (isLoading) {
    return <ProfileCardSkeleton />;
  }
  return (
    <div className="h-full bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
      {/* Top section */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          {data?.avatarUrl ? (
            <Image
              src={data.avatarUrl}
              alt={data.login || "Github Profile"}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 flex items-center justify-center text-lg font-bold text-white shadow-xl shadow-orange-500/20">
              {data?.login?.slice(0, 2).toUpperCase()}
            </div>
          )}

          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-card shadow shadow-emerald-400/40" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-foreground leading-tight truncate">
            {data?.name}
          </p>
          <p className="text-[12px] text-muted-foreground mt-0.5">
            {data?.login}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[11px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
              Pro
            </span>
            <span className="text-[11px] text-muted-foreground/60 flex items-center gap-1">
              <MapPin size={10} /> {data?.location}
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-[12px] text-muted-foreground leading-relaxed">
        {data?.bio}
      </p>

      {/* Link */}
      <div className="flex items-center gap-1.5 text-[12px] text-primary font-medium">
        <Link2 size={11} />
        <Link href={data?.htmlUrl || "#"} aria-label="Github Profile">
          Github Profile
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Repos", value: String(data?.publicRepos) },
          { label: "Following", value: String(data?.following) || 0 },
          { label: "Followers", value: String(data?.followers) || 0 },
        ].map(({ label, value }) => (
          <div key={label} className="bg-muted/50 rounded-xl p-2.5 text-center">
            <p className="text-[15px] font-semibold text-foreground">{value}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Top languages */}
      <div>
        <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mb-2">
          Top languages
        </p>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(langColors).map(([lang, dot]) => (
            <div
              key={lang}
              className="flex items-center gap-1.5 bg-muted/30 border border-border rounded-lg px-2.5 py-1"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-[11px] text-muted-foreground">{lang}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
