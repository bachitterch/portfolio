import { Head } from "../components/Head";
import { trpc } from "../utils/trpc";
import { rootRoute } from "./__root";

export const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: About,
});

function About() {
  const { data: TopTracks } = trpc.spotify.topTracks.useQuery();

  return (
    <>
      <Head title="About - Bachitter Chahal" canonical={{ href: "about" }} />
      <div className="w-full pt-36">
        <h1>About</h1>
        <p className="mt-6">
          Who, what, where and everything else you wanna know about me is here.
        </p>
      </div>
      <div className="mt-6">
        <img
          className="aspect-video rounded-2xl object-cover"
          src="https://res.cloudinary.com/dtl9hbz1e/image/upload/v1642978611/bachitter.dev/Public/avatar.jpg"
          alt="Image of Bachitter"
        />
      </div>
      <p className="mt-6 w-full max-w-[72ch]">
        Hello, my name is Bachitter and I'm a FullStack Developer from
        Vancouver, Canada. I specialize in TypeScript (Yeah I write JavaScript),
        React.
      </p>
      <div className="mt-6 grid w-full grid-cols-1 gap-4 pb-36 sm:grid-cols-2">
        {TopTracks?.items.map(track => (
          <a
            key={track.id}
            href={track.external_urls.spotify}
            className="flex gap-4"
          >
            <img src={track.album.images[0].url} className="w-20 rounded-xl" />
            <div>
              <p>{track.name}</p>
              <p className="text-xs">{track.artists[0].name}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
