"use client";

import { useMemo } from "react";

import { categoryRecords } from "@/features/goals-dashboard/data/goals-dashboard.data";
import type {
  CategoryBlockModel,
  CategoryItemModel,
} from "@/features/goals-dashboard/types/goals-dashboard.types";

export function useCategories() {
  const items = useMemo<CategoryItemModel[]>(
    () =>
      categoryRecords.map((category) => ({
        id: category.name,
        label: category.name,
        completedLabel: `${category.completed}/${category.total}`,
        tone: category.tone,
        blocks: Array.from({ length: category.total }, (_, index): CategoryBlockModel => ({
          id: `${category.name}-${index}`,
          filled: index < category.completed,
          tone: category.tone,
        })),
      })),
    [],
  );

  const topCategory = useMemo(() => {
    const highest = [...categoryRecords].sort(
      (left, right) => right.completed - left.completed,
    )[0];
    return `${highest.name} (${highest.completed} completed)`;
  }, []);

  return { items, topCategory };
}
