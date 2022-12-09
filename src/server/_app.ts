import { tRouter } from "./trpc";
import { spotifyRouter } from "./routers/spotify";
import { revueRouter } from "./routers/revue";
import { contentfulRouter } from "./routers/contentful";

export const appRouter = tRouter({
  spotify: spotifyRouter,
  revue: revueRouter,
  contentful: contentfulRouter,
});

export type AppRouter = typeof appRouter;
