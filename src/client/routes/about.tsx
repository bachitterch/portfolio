import { Head } from "../components/Head";
import { rootRoute } from "./__root";

export const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: About,
});

function About() {
  return (
    <>
      <Head title="About - Bachitter Chahal" canonical={{ href: "about" }} />
      <div className="w-full">
        <h1>About</h1>
        <p className="mt-6">
          Who, what, where and everything else you wanna know about me is here.
        </p>
      </div>
      <div className="mt-6">
        <img
          className="rounded-2xl"
          src="https://res.cloudinary.com/dtl9hbz1e/image/upload/v1642978611/bachitter.dev/Public/avatar.jpg"
          alt="Image of Bachitter"
        />
      </div>
      <p className="mt-6 w-full">Todo...</p>
    </>
  );
}
