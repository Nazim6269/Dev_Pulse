# Pull Request Feature Test Examples

These are Jest and React Testing Library examples for the refactored pull request feature.

The current workspace does not include Jest or React Testing Library dependencies yet, so these examples are documentation-first and ready to wire into your preferred test setup.

## `StatusBadge.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { StatusBadge } from "@/components/pull-request/StatusBadge";

describe("StatusBadge", () => {
  it("renders the provided status label", () => {
    render(<StatusBadge status="merged" />);

    expect(screen.getByText("merged")).toBeInTheDocument();
  });

  it("applies size variants without changing the API", () => {
    render(<StatusBadge status="open" size="lg" variant="outline" />);

    expect(screen.getByText("open")).toHaveClass("text-sm");
  });
});
```

## `PullRequestList.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PullRequestList } from "@/components/pull-request/PullRequestList";
import type { PullRequest } from "@/types/pullRequest.types";

const pullRequests: PullRequest[] = [
  {
    id: "pr-1",
    title: "feat: add merge queue metrics",
    repository: "devpulse/web",
    branchName: "feature/merge-queue-metrics",
    status: "open",
    size: "md",
    reviewCount: 2,
    cycleTime: "9h",
    updatedAt: "1h ago",
    reviewers: [{ id: "r1", name: "Nazim Uddin", initials: "NU" }],
  },
];

describe("PullRequestList", () => {
  it("renders empty state when no items exist", () => {
    render(<PullRequestList items={[]} />);

    expect(screen.getByText(/no pull requests found/i)).toBeInTheDocument();
  });

  it("renders list rows from domain data", () => {
    render(<PullRequestList items={pullRequests} />);

    expect(screen.getByText(/merge queue metrics/i)).toBeInTheDocument();
  });

  it("lets users trigger retry from the error state", async () => {
    const user = userEvent.setup();
    const onRetry = jest.fn();

    render(<PullRequestList items={[]} error="Request failed" onRetry={onRetry} />);

    await user.click(screen.getByRole("button", { name: /retry/i }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
```

## `usePullRequests.test.ts`

```tsx
import { renderHook, waitFor, act } from "@testing-library/react";

import { usePullRequests } from "@/hooks/usePullRequests";

describe("usePullRequests", () => {
  it("loads initial pull requests", async () => {
    const { result } = renderHook(() => usePullRequests());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.items.length).toBeGreaterThan(0);
  });

  it("filters by status", async () => {
    const { result } = renderHook(() => usePullRequests());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.setStatus("merged");
    });

    await waitFor(() => {
      expect(result.current.items.every((item) => item.status === "merged")).toBe(true);
    });
  });
});
```
