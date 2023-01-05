import { createRouteConfig, Outlet } from "@tanstack/react-router";
import { lazy } from "react";

import { Container } from "../components/Container";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import("@tanstack/react-router-devtools").then(res => ({
        default: res.TanStackRouterDevtools,
      })),
    );

export const rootRoute = createRouteConfig({
  component: () => (
    <Container>
      <TanStackRouterDevtools />
      <Outlet />
    </Container>
  ),
});
