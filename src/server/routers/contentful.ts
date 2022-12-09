import { string, z } from "zod";
import { contentfulService } from "../lib/contentful/client";
import { tProcedure, tRouter } from "../trpc";

export const contentfulRouter = tRouter({
  getAllPosts: tProcedure
    .input(
      z.object({
        token: string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const client = new contentfulService(ctx.deps);

      if (input.token === ctx.deps.env.CONTENTFUL_PREVIEW_TOKEN) {
        const data = await client.getAllPosts(true);

        return data;
      }

      const data = await client.getAllPosts(false);

      return data;
    }),
  getPostsSlugs: tProcedure.query(async ({ ctx }) => {
    const client = new contentfulService(ctx.deps);
    const data = await client.getAllPostsBySlug();

    return data;
  }),
  getPost: tProcedure
    .input(
      z.object({
        token: z.string().optional(),
        slug: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const client = new contentfulService(ctx.deps);

      if (input.token === ctx.deps.env.CONTENTFUL_PREVIEW_TOKEN) {
        const data = await client.getPost(input.slug, true);

        return data;
      }

      const data = await client.getPost(input.slug);

      return data;
    }),
  getProjects: tProcedure.query(async ({ ctx }) => {
    const client = new contentfulService(ctx.deps);

    const data = await client.getAllProjects();

    return data;
  }),
});
