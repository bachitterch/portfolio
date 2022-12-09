import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { Router } from "itty-router";
import { Dependencies } from "./utils";
import { appRouter } from "./_app";
import { createContext } from "./trpc";
import { Env } from "./env";

const router = Router();

function addCORS(v: Response) {
  v.headers.append("Access-Control-Allow-Origin", "*");
  v.headers.append("Access-Control-Allow-Methods", "GET, POST");
  v.headers.append(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type"
  );
  v.headers.append("Access-Control-Max-Age", "600");
  return v;
}

router.post("/trpc/*", (request: Request, deps: Dependencies) => {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: appRouter,
    createContext: createContext(deps),
  });
});

router.get("/trpc/*", (request: Request, deps: Dependencies) => {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: appRouter,
    createContext: createContext(deps),
  });
});

router.all("*", () => new Response("", { status: 404 }));

const handler = {
  fetch: async (request: Request, env: Env) => {
    if (request.method === "OPTIONS") {
      return addCORS(new Response("", { status: 204 }));
    }

    const deps = new Dependencies(env);

    let resp = (await router.handle(request, deps).catch(
      (error) =>
        new Response(error.message || "Server Error", {
          status: error.status || 500,
        })
    )) as Response;
    if (!resp) {
      resp = new Response("", { status: 404 });
    }

    return addCORS(resp);
  },
};

export default handler;
