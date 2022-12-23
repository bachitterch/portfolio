import { z } from "zod";

import { createSubscription } from "../lib/convertkit";
import { tProcedure, tRouter } from "../trpc";

export const convertkitRouter = tRouter({
  createSubscription: tProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const data = await createSubscription(input.email, ctx.deps);

      return data;
    }),
});
