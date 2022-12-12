import { createRouteConfig, Outlet } from "@tanstack/react-router";
import { Container } from "../components/Container";

export const rootRoute = createRouteConfig({
  component: () => (
    <Container>
      <Outlet />
    </Container>
  ),
});
