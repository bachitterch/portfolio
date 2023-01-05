import { useLoaderData } from "@tanstack/react-router";

import { Head } from "../components/Head";
import { trpcReact, trpcVanilla } from "../utils/trpc";
import { rootRoute } from "./__root";

export const aboutRoute = rootRoute.createRoute({
  path: "about",
  component: About,
  loader: async () => {
    return {
      topTracks: await trpcVanilla.spotify.topTracks.query(),
    };
  },
  loaderGcMaxAge: 10 * 60 * 1000,
});

function About() {
  const data = useLoaderData({
    from: aboutRoute.id,
  });

  const { data: lastPlayed } = trpcReact.spotify.getLastPlayedSong.useQuery();

  return (
    <>
      <Head title="About - Bachitter Chahal" canonical={{ href: "about" }} />

      <div className="w-full">
        <div>
          <h1>A little about me.</h1>
        </div>
        <div className="mt-6">
          <img
            className="rounded-2xl object-cover object-center"
            src="https://res.cloudinary.com/dtl9hbz1e/image/upload/v1642978611/bachitter.dev/Public/avatar.jpg"
            alt="Image of Bachitter"
          />
        </div>
        <p className="mt-6 w-full">
          Hey, I'm Bachitter, a self-taught FullStack Developer from based in
          Vancouver,BC. I started out as a FrontEnd Developer but{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://trpc.io/">
            trpc
          </a>{" "}
          transitioned me into a FullStack.
        </p>
        <h2 className="mt-6 w-full">Music</h2>
        <div className="mt-6 flex w-full items-center rounded-xl border border-neutral-200 bg-neutral-100 py-2 px-3">
          <a href={lastPlayed?.items[0].track.external_urls.spotify}>
            Last Played: {lastPlayed?.items[0].track.name} -{" "}
            {lastPlayed?.items[0].track.artists[0].name}
          </a>
        </div>
        <div className="mt-6 mb-36 grid w-full gap-4 sm:grid-cols-2">
          {data.topTracks.items.map(track => (
            <a
              className="flex gap-4"
              key={track.id}
              href={track.external_urls.spotify}
            >
              <img
                className="h-20 w-20 rounded-2xl border border-neutral-200 object-cover"
                src={track.album.images[0].url}
                alt={track.album.name}
              />
              <div>
                <p>{track.name}</p>
                <p className="text-sm text-neutral-500">
                  {track.artists[0].name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
