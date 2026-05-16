"use client";

import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
  type DehydratedState,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState, type ReactNode } from "react";
import { ApiError } from "@/features/api-errors";
import { env } from "@/features/env";

function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        // Don't retry on auth/forbidden — user action required
        retry: (failureCount, error) => {
          if (
            error instanceof ApiError &&
            (error.status === 401 ||
              error.status === 403 ||
              error.status === 404)
          ) {
            return false;
          }
          return failureCount < 2;
        },
        refetchOnWindowFocus: env.NODE_ENV === "production",
      },
      mutations: {
        retry: false,
      },
    },
  });
}

interface QueryProviderProps {
  children: ReactNode;
  dehydratedState?: DehydratedState; // For SSR hydration (Next.js)
}

export function QueryProvider({
  children,
  dehydratedState,
}: QueryProviderProps) {
  // Stable QueryClient instance per browser session
  const [queryClient] = useState(createQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      {/* {env.NODE_ENV !== "production" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )} */}
    </QueryClientProvider>
  );
}

// ─── SSR Prefetch Pattern (Next.js App Router) ────────────────────────────────
// In a Next.js server component:
//
// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import { userService } from "@/infrastructure/container";
// import { userKeys } from "@/features/users/user.query-keys";
//
// export default async function UsersPage() {
//   const qc = new QueryClient();
//   await qc.prefetchQuery({
//     queryKey: userKeys.list(),
//     queryFn: () => userService.listUsers(),
//   });
//
//   return (
//     <HydrationBoundary state={dehydrate(qc)}>
//       <UsersClient />
//     </HydrationBoundary>
//   );
// }
