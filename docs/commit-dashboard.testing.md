# Commit Dashboard Test Examples

These examples are ready for a future Jest or React Testing Library setup.

The current workspace still does not include a test runner configuration, so this file documents the intended coverage while keeping the refactor build-safe today.

## `useDailyCommitVolume.test.ts`

```tsx
import { renderHook } from "@testing-library/react";

import { useDailyCommitVolume } from "@/features/commits/hooks/useDailyCommitVolume";

describe("useDailyCommitVolume", () => {
  it("builds chart bars with precomputed heights", () => {
    const { result } = renderHook(() => useDailyCommitVolume());

    expect(result.current.bars.length).toBeGreaterThan(0);
    expect(result.current.bars[0]).toHaveProperty("height");
  });
});
```

## `RecentCommitList.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { RecentCommitList } from "@/features/commits/components/commits/RecentCommitList";

describe("RecentCommitList", () => {
  it("shows an empty state when no commits exist", () => {
    render(<RecentCommitList items={[]} />);

    expect(screen.getByText(/no commits available/i)).toBeInTheDocument();
  });
});
```

## `RepoCommitItem.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { RepoCommitList } from "@/features/commits/components/repos/RepoCommitList";

describe("RepoCommitList", () => {
  it("renders repository contribution rows", () => {
    render(
      <RepoCommitList
        items={[
          {
            id: "repo-1",
            name: "devpulse/web",
            commitCount: 89,
            shareLabel: "28%",
            segments: [{ id: "feat", width: "50%", tone: "violet" }],
          },
        ]}
      />,
    );

    expect(screen.getByText("devpulse/web")).toBeInTheDocument();
  });
});
```
