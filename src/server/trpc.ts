import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { Dependencies } from "./utils";

export const t = initTRPC.context<Context>().create();

export const tRouter = t.router;
export const tProcedure = t.procedure;

export function createContext(deps: Dependencies) {
  return async ({ req }: FetchCreateContextFnOptions) => {
    return {
      deps,
      req,
    };
  };
}

export type Context = inferAsyncReturnType<ReturnType<typeof createContext>>;
