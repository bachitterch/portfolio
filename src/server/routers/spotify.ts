import { SpotifyService } from "../lib/spotify";
import { tProcedure, tRouter } from "../trpc";

export const spotifyRouter = tRouter({
  getLastPlayedSong: tProcedure.query(async ({ ctx }) => {
    const spotifyClient = new SpotifyService(ctx.deps);

    const { access_token: accessToken } = await spotifyClient.getAccessToken();

    const data = await spotifyClient.getLastPlayed(accessToken);

    return data;
  }),
  currentPlayingSong: tProcedure.query(async ({ ctx }) => {
    const spotifyClient = new SpotifyService(ctx.deps);

    const { access_token: accessToken } = await spotifyClient.getAccessToken();
    const data = await spotifyClient.getNowPlaying(accessToken);

    return data;
  }),
  topTracks: tProcedure.query(async ({ ctx }) => {
    const spotifyClient = new SpotifyService(ctx.deps);

    const { access_token: accessToken } = await spotifyClient.getAccessToken();

    const data = await spotifyClient.getTopTracks(accessToken);

    return data;
  }),
});
