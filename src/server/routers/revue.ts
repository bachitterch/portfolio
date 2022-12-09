import { z } from "zod";
import { createSubscription } from "../lib/revue";
import { tProcedure, tRouter } from "../trpc";

export const revueRouter = tRouter({
  createSubscruption: tProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await createSubscription(ctx.deps, input.email);

      return data;
    }),
});
