import { animate, stagger } from "motion";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";

function Bars() {
  useEffect(() => {
    animate(
      "#bar",
      {
        transform: [
          "scaleY(0.3)",
          "scaleY(1)",
          "scaleY(0.5)",
          "scaleY(1.2)",
          "scaleY(0.8)",
          "scaleY(1.5)",
        ],
      },
      {
        duration: 2,
        repeat: Infinity,
        easing: ["ease-in-out"],
        delay: stagger(Math.random(), {
          from: "center",
          easing: "ease-in-out",
        }),
      }
    );
  }, []);

  return (
    <div className="relative flex gap-[3px] w-auto h-4 scale-75">
      <span id="bar" className="w-1 h-full bg-gray-600 rounded" />
      <span id="bar" className="w-1 h-full bg-gray-600 rounded" />
      <span id="bar" className="w-1 h-full bg-gray-600 rounded" />
    </div>
  );
}

export function SpotifyNowPlaying() {
  const {
    data: currentPlaying,
    status,
    error,
  } = trpc.spotify.currentPlayingSong.useQuery();

  if (status === "error") {
    return (
      <div className="flex items-center gap-4 text-xs">{error.message}</div>
    );
  }

  return (
    <>
      {currentPlaying?.is_playing ? (
        <a
          href={currentPlaying.item?.external_urls.spotify}
          className="inline-flex items-center gap-2 text-xs"
        >
          <Bars />
          <div className="inline-flex">
            {currentPlaying?.item?.name} -{" "}
            {currentPlaying.item?.artists[0].name}
          </div>
        </a>
      ) : null}
    </>
  );
}