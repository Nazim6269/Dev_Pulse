import { PullRequestItem } from "@/widgets/dashboard/ui/pull-request/PullRequestItem";
import { Button } from "@/components/ui/button";
import type { PullRequest, PullRequestStatus } from "@/types/pullRequest.types";

export interface PullRequestListProps {
  items: PullRequest[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  onStatusChange?: (
    id: string,
    status: PullRequestStatus,
  ) => void | Promise<void>;
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
        className="rounded-2xl border border-dashed border-border bg-card p-8 text-sm text-muted-foreground"
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
        className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-6 text-sm text-rose-700 dark:text-rose-200"
        role="alert"
      >
        <p className="font-medium">{error}</p>
        {onRetry ? (
          <Button
            variant="outline"
            className="mt-4 border-rose-500/20 bg-transparent text-rose-700 dark:text-rose-200 hover:bg-rose-500/10"
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
      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <p className="text-sm font-semibold text-foreground">
          No pull requests found
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
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
