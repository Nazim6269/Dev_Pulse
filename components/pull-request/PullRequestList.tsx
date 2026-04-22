import { PullRequestItem } from "@/components/pull-request/PullRequestItem";
import { Button } from "@/components/ui/button";
import type { PullRequest, PullRequestStatus } from "@/types/pullRequest.types";

export interface PullRequestListProps {
  items: PullRequest[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  onStatusChange?: (id: string, status: PullRequestStatus) => void | Promise<void>;
}

export function PullRequestList({
  items,
  isLoading = false,
  error,
  onRetry,
  onStatusChange,
}: PullRequestListProps) {
  if (isLoading) {
    return (
      <div
        className="rounded-2xl border border-dashed border-white/10 bg-[#111114] p-8 text-sm text-white/50"
        role="status"
        aria-live="polite"
      >
        Loading pull requests...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-6 text-sm text-rose-100"
        role="alert"
      >
        <p>{error}</p>
        {onRetry ? (
          <Button
            variant="outline"
            className="mt-4 border-rose-300/20 bg-transparent text-rose-100 hover:bg-rose-400/10"
            onClick={onRetry}
          >
            Retry
          </Button>
        ) : null}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-[#111114] p-8 text-center">
        <p className="text-sm font-medium text-white/80">No pull requests found</p>
        <p className="mt-2 text-sm text-white/45">
          Adjust your search or filter to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3" role="list" aria-label="Pull requests">
      {items.map((item) => (
        <PullRequestItem
          key={item.id}
          pullRequest={item}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
