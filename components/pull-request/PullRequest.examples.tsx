import {
  PullRequestHeader,
  PullRequestItem,
  ReviewerAvatars,
  StatusBadge,
} from "@/components/pull-request";
import type { PullRequest } from "@/types/pullRequest.types";

const examplePullRequest: PullRequest = {
  id: "pr-example",
  title: "feat: support draft review summaries",
  repository: "devpulse/web",
  branchName: "feature/draft-review-summaries",
  status: "open",
  size: "md",
  reviewCount: 2,
  cycleTime: "11h",
  updatedAt: "30m ago",
  reviewers: [
    { id: "reviewer-1", name: "Nazim Uddin", initials: "NU" },
    { id: "reviewer-2", name: "Rafi Ahmed", initials: "RA" },
    { id: "reviewer-3", name: "Lina Park", initials: "LP" },
  ],
};

export function DefaultPullRequestItemExample() {
  return <PullRequestItem pullRequest={examplePullRequest} />;
}

export function HeaderExample() {
  return (
    <PullRequestHeader
      title="Repository Pull Requests"
      totalCount={18}
      query=""
      selectedStatus="all"
      onQueryChange={() => undefined}
      onStatusChange={() => undefined}
    />
  );
}

export function StatusBadgeVariantsExample() {
  return (
    <div className="flex items-center gap-2">
      <StatusBadge status="open" />
      <StatusBadge status="closed" variant="outline" />
      <StatusBadge status="merged" size="lg" />
    </div>
  );
}

export function ReviewerAvatarsExample() {
  return <ReviewerAvatars reviewers={examplePullRequest.reviewers} />;
}

export function ExtendedStatusExample() {
  return (
    <div className="space-y-2 text-sm text-white/70">
      <p>Add a new status in one place:</p>
      <pre className="overflow-x-auto rounded-xl bg-black/20 p-3 text-xs text-white/80">
        {`1. Extend PullRequestStatus in types/pullRequest.types.ts
2. Add tone styles in StatusBadge.tsx
3. Add filter option in PullRequestHeader.tsx
4. Add transition actions in PullRequestItem.tsx`}
      </pre>
    </div>
  );
}
