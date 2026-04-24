"use client";

import {
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import {
  fetchPullRequests,
  updatePullRequestStatus,
} from "@/services/pullRequest.service";
import type {
  PullRequest,
  PullRequestFilterState,
  PullRequestStatus,
  PullRequestStatusFilter,
} from "@/types/pullRequest.types";

interface PullRequestState {
  filters: PullRequestFilterState;
  items: PullRequest[];
  isLoading: boolean;
  error: string | null;
}

type PullRequestAction =
  | { type: "set-query"; payload: string }
  | { type: "set-status"; payload: PullRequestStatusFilter }
  | { type: "fetch-start" }
  | { type: "fetch-success"; payload: PullRequest[] }
  | { type: "fetch-error"; payload: string }
  | {
      type: "status-updated";
      payload: { id: string; status: PullRequestStatus };
    };

const initialState: PullRequestState = {
  filters: {
    query: "",
    status: "all",
  },
  items: [],
  isLoading: true,
  error: null,
};

function reducer(
  state: PullRequestState,
  action: PullRequestAction,
): PullRequestState {
  switch (action.type) {
    case "set-query":
      return {
        ...state,
        filters: { ...state.filters, query: action.payload },
      };
    case "set-status":
      return {
        ...state,
        filters: { ...state.filters, status: action.payload },
      };
    case "fetch-start":
      return { ...state, isLoading: true, error: null };
    case "fetch-success":
      return { ...state, items: action.payload, isLoading: false, error: null };
    case "fetch-error":
      return { ...state, isLoading: false, error: action.payload };
    case "status-updated":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: action.payload.status }
            : item,
        ),
      };
    default:
      return state;
  }
}

const EMPTY_REVIEWERS: PullRequest["reviewers"] = [];

export function usePullRequests() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const deferredQuery = useDeferredValue(state.filters.query);

  useEffect(() => {
    let isCancelled = false;

    async function loadPullRequests() {
      dispatch({ type: "fetch-start" });

      try {
        const items = await fetchPullRequests({
          query: deferredQuery,
          status: state.filters.status,
        });

        if (!isCancelled) {
          dispatch({ type: "fetch-success", payload: items });
        }
      } catch (error) {
        if (!isCancelled) {
          dispatch({
            type: "fetch-error",
            payload:
              error instanceof Error
                ? error.message
                : "Unable to load pull requests.",
          });
        }
      }
    }

    void loadPullRequests();

    return () => {
      isCancelled = true;
    };
  }, [deferredQuery, state.filters.status]);

  const setQuery = useCallback((query: string) => {
    startTransition(() => {
      dispatch({ type: "set-query", payload: query });
    });
  }, []);

  const setStatus = useCallback((status: PullRequestStatusFilter) => {
    dispatch({ type: "set-status", payload: status });
  }, []);

  const refresh = useCallback(async () => {
    dispatch({ type: "fetch-start" });

    try {
      const items = await fetchPullRequests({
        query: deferredQuery,
        status: state.filters.status,
      });
      dispatch({ type: "fetch-success", payload: items });
    } catch (error) {
      dispatch({
        type: "fetch-error",
        payload:
          error instanceof Error
            ? error.message
            : "Unable to load pull requests.",
      });
    }
  }, [deferredQuery, state.filters.status]);

  const updateStatus = useCallback(
    async (id: string, status: PullRequestStatus) => {
      const updatedPullRequest = await updatePullRequestStatus(id, status);
      dispatch({
        type: "status-updated",
        payload: { id: updatedPullRequest.id, status: updatedPullRequest.status },
      });
    },
    [],
  );

  const summary = useMemo(() => {
    return state.items.reduce(
      (accumulator, item) => {
        accumulator.total += 1;
        accumulator[item.status] += 1;
        return accumulator;
      },
      { total: 0, open: 0, closed: 0, merged: 0 },
    );
  }, [state.items]);

  return {
    items: state.items,
    filters: state.filters,
    summary,
    isLoading: state.isLoading,
    error: state.error,
    setQuery,
    setStatus,
    refresh,
    updateStatus,
    emptyReviewers: EMPTY_REVIEWERS,
  };
}
