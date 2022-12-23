import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import type { Env } from "./env";
import { createContext } from "./trpc";
import { Dependencies } from "./utils";
import { appRouter } from "./_app";

const app = new Hono<{ Bindings: Env }>();

app.use("*", logger());
app.use("/trpc/*", cors());

app.use("/trpc/*", async (c, next) => {
  await next();
  c.res.headers.append("Access-Control-Allow-Origin", "*");
  c.res.headers.append("Access-Control-Allow-Methods", "GET, POST");
  c.res.headers.append(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type",
  );
  c.res.headers.append("Access-Control-Max-Age", "600");

  return c.res;
});

app.get("/trpc/*", c => {
  const deps = new Dependencies(c.env);

  return fetchRequestHandler({
    endpoint: "/trpc",
    req: c.req,
    router: appRouter,
    createContext: createContext(deps),
  });
});

app.post("/trpc/*", c => {
  const deps = new Dependencies(c.env);

  return fetchRequestHandler({
    endpoint: "/trpc",
    req: c.req,
    router: appRouter,
    createContext: createContext(deps),
  });
});

app.all("*", () => new Response("", { status: 404 }));

export default app;
