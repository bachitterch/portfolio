import { contentfulRouter } from "./routers/contentful";
import { revueRouter } from "./routers/revue";
import { spotifyRouter } from "./routers/spotify";
import { tRouter } from "./trpc";

export const appRouter = tRouter({
  spotify: spotifyRouter,
  revue: revueRouter,
  contentful: contentfulRouter,
});

export type AppRouter = typeof appRouter;
