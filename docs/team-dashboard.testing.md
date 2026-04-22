# Team Dashboard Test Examples

These examples are ready for a future Jest or React Testing Library setup.

## `useCollaborationMatrix.test.ts`

```tsx
import { renderHook } from "@testing-library/react";

import { useCollaborationMatrix } from "@/features/team-dashboard/hooks/useCollaborationMatrix";

describe("useCollaborationMatrix", () => {
  it("formats rows for rendering", () => {
    const { result } = renderHook(() => useCollaborationMatrix());

    expect(result.current.rows.length).toBeGreaterThan(0);
    expect(result.current.rows[0].cells[0]).toHaveProperty("intensity");
  });
});
```

## `TeamMembersGrid.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { TeamMembersGrid } from "@/features/team-dashboard/components/members/TeamMembersGrid";

describe("TeamMembersGrid", () => {
  it("renders empty state without members", () => {
    render(
      <TeamMembersGrid
        items={[]}
        sortKey="commits"
        onSortChange={() => undefined}
      />,
    );

    expect(screen.getByText(/no team members available/i)).toBeInTheDocument();
  });
});
```

## `TeamVelocityChart.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { TeamVelocityChart } from "@/features/team-dashboard/components/velocity/TeamVelocityChart";

describe("TeamVelocityChart", () => {
  it("renders summary metrics", () => {
    render(
      <TeamVelocityChart
        bars={[{ id: "W1", label: "W1", value: 6, height: "50%" }]}
        summary={[{ id: "avg", label: "PRs/week avg", value: "8.5", tone: "violet" }]}
      />,
    );

    expect(screen.getByText("PRs/week avg")).toBeInTheDocument();
  });
});
```
