import {
  Link,
  RegisteredAllRouteInfo,
  useRouter,
} from "@tanstack/react-router";
import { ReactNode, useEffect, useState } from "react";
import { classNames } from "../utils/helpers";

type NavItemProps = {
  label: string;
  href: keyof RegisteredAllRouteInfo["routeInfoById"];
  children: ReactNode;
};

function NavItem(props: NavItemProps) {
  const router = useRouter();

  const [active, setActive] = useState(
    router.state.currentLocation.href === props.href,
  );

  useEffect(() => {
    setActive(() => router.state.currentLocation.href === props.href);
  }, [router.state.currentLocation.href]);

  return (
    <Link to={props.href} aria-label={props.label}>
      <div
        className={`${classNames(
          active
            ? "group rounded-xl border border-neutral-200 bg-neutral-200 p-2"
            : "group rounded-xl border border-neutral-200 p-2",
        )} transition-all duration-300`}
      >
        {props.children}
      </div>
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 bottom-8 z-[999] flex items-center justify-center">
      <ul className="mx-auto flex w-full max-w-fit gap-2 rounded-2xl border border-neutral-200 bg-neutral-100 p-2">
        <li>
          <NavItem href="/" label="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-neutral-500 transition group-hover:stroke-neutral-600"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </NavItem>
        </li>
        <li>
          <NavItem href="/about" label="About">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-neutral-500 transition group-hover:stroke-neutral-600"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}
