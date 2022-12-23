import { contentfulRouter } from "./routers/contentful";
import { convertkitRouter } from "./routers/convertkit";
import { spotifyRouter } from "./routers/spotify";
import { tRouter } from "./trpc";

export const appRouter = tRouter({
  spotify: spotifyRouter,
  convertkit: convertkitRouter,
  contentful: contentfulRouter,
});

export type AppRouter = typeof appRouter;
