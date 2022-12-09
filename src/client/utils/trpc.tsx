import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { ReactNode, useMemo } from "react";
import { AppRouter } from "src/server/_app";

export const trpc = createTRPCReact<AppRouter>();

const baseUrl = () => {
  if (import.meta.env.DEV) {
    return "http://192.168.1.107:8787/trpc";
  }
  if (!import.meta.env.VITE_API_URL) {
    return "http://192.168.1.107:8787/trpc";
  }

  return import.meta.env.VITE_API_URL + "/trpc";
};

export function TrpcClient({ children }: { children: ReactNode }) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {},
        },
      }),
    []
  );
  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: baseUrl(),
          }),
        ],
      }),
    []
  );

  return (
    <>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    </>
  );
}
