import { createReactRouter, RouterProvider } from "@tanstack/react-router";

import { indexRoute } from "./routes";
import { rootRoute } from "./routes/__root";
import { aboutRoute } from "./routes/about";

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);

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
