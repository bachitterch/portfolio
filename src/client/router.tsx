import { createReactRouter, RouterProvider } from "@tanstack/react-router";

import { indexRoute } from "./routes";
import { rootRoute } from "./routes/__root";

const routeConfig = rootRoute.addChildren([indexRoute]);

export const router = createReactRouter({
  routeConfig,
});

export function Router() {
  return (
    <>
      <RouterProvider router={router} defaultPreload="intent" />
    </>
  );
}

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}
