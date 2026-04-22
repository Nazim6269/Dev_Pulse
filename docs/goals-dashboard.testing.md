# Goals Dashboard Test Examples

These examples are ready for a future Jest or React Testing Library setup.

## `useTrendData.test.ts`

```tsx
import { renderHook } from "@testing-library/react";

import { useTrendData } from "@/features/goals-dashboard/hooks/useTrendData";

describe("useTrendData", () => {
  it("precomputes chart bar heights", () => {
    const { result } = renderHook(() => useTrendData());

    expect(result.current.bars.length).toBeGreaterThan(0);
    expect(result.current.bars[0]).toHaveProperty("height");
  });
});
```

## `GoalsList.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { GoalsList } from "@/features/goals-dashboard/components/goals/GoalsList";

describe("GoalsList", () => {
  it("renders goal rows", () => {
    render(
      <GoalsList
        items={[
          {
            id: "goal-1",
            label: "Merge 20 PRs this month",
            category: "Shipping",
            progressLabel: "14 / 20",
            progressWidth: "70%",
            state: "active",
            tone: "amber",
            daysLeftLabel: "12d left",
          },
        ]}
        stats={{
          doneCount: 6,
          activeCount: 2,
          pendingCount: 2,
          atRiskCount: 1,
          overallCompletionRate: "75%",
        }}
      />,
    );

    expect(screen.getByText(/merge 20 prs/i)).toBeInTheDocument();
  });
});
```

## `CategoryGrid.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { CategoryGrid } from "@/features/goals-dashboard/components/categories/CategoryGrid";

describe("CategoryGrid", () => {
  it("renders top category summary", () => {
    render(<CategoryGrid items={[]} topCategory="Code quality (3 completed)" />);

    expect(screen.getByText(/code quality/i)).toBeInTheDocument();
  });
});
```
