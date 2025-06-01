// providers/ReactQueryProvider.tsx
"use client";

import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export function ReactQueryProvider({ children, state }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={state}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
