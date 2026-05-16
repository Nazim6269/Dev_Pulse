# Notifications Feature Test Examples

These examples are ready for a future Jest or React Testing Library setup.

## `useNotificationGroups.test.ts`

```tsx
import { renderHook } from "@testing-library/react";

import { useNotificationGroups } from "@/features/notifications/hooks/useNotificationGroups";

describe("useNotificationGroups", () => {
  it("groups notifications by date label", () => {
    const { result } = renderHook(() => useNotificationGroups());

    expect(result.current.groups.length).toBeGreaterThan(0);
    expect(result.current.groups[0]).toHaveProperty("label");
  });
});
```

## `NotificationItem.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { NotificationItem } from "@/features/notifications/components/feed/NotificationItem";

describe("NotificationItem", () => {
  it("renders notification title", () => {
    render(
      <NotificationItem
        item={{
          id: "1",
          title: "PR merged",
          body: "Merged by teammate",
          timeLabel: "1 hr ago",
          read: false,
          type: "merge",
          tone: "violet",
        }}
      />,
    );

    expect(screen.getByText(/pr merged/i)).toBeInTheDocument();
  });
});
```

## `FilterSidebar.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";

import { FilterSidebar } from "@/features/notifications/components/sidebar/FilterSidebar";

describe("FilterSidebar", () => {
  it("renders filter tabs", () => {
    render(
      <FilterSidebar
        tabs={[{ id: "all", label: "All", active: true }]}
        channels={[]}
        onFilterChange={() => undefined}
      />,
    );

    expect(screen.getByText("All")).toBeInTheDocument();
  });
});
```
