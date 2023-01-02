import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCProxyClient } from "@trpc/client";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { ReactNode } from "react";
import { useMemo } from "react";
import type { AppRouter } from "src/server/_app";

const baseUrl = () => {
  if (!import.meta.env.VITE_API_URL) {
    return "http://192.168.1.107:8787/trpc";
  }

  return import.meta.env.VITE_API_URL + "/trpc";
};

export const trpcReact = createTRPCReact<AppRouter>();
export const trpcVanilla = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: baseUrl(),
    }),
  ],
});

export function TrpcClient({ children }: { children: ReactNode }) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {},
        },
      }),
    [],
  );
  const trpcClient = useMemo(
    () =>
      trpcReact.createClient({
        links: [
          httpBatchLink({
            url: baseUrl(),
          }),
        ],
      }),
    [],
  );

  return (
    <>
      <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </trpcReact.Provider>
    </>
  );
}
