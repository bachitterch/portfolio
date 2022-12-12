import type { inferAsyncReturnType } from "@trpc/server";
import { initTRPC } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

import type { Dependencies } from "./utils";

export const t = initTRPC.context<Context>().create();

export const tRouter = t.router;
export const tProcedure = t.procedure;

export function createContext(deps: Dependencies) {
  return ({ req }: FetchCreateContextFnOptions) => {
    return {
      deps,
      req,
    };
  };
}

export type Context = inferAsyncReturnType<ReturnType<typeof createContext>>;
