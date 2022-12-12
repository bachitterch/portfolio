import type { ReactNode } from "react";

import { Badge } from "./Badge";
import { Navbar } from "./Navbar";

export function Container({
  children,
  isArticle,
}: {
  children: ReactNode;
  isArticle?: boolean;
}) {
  if (isArticle) {
    return (
      <>
        <header className="flex justify-center">
          <Badge message="🚧 This website is still under development." />
          <Navbar />
        </header>
        <article>{children}</article>
      </>
    );
  }

  return (
    <>
      <header className="flex justify-center">
        <Badge message="🚧 This website is still under development." />
        <Navbar />
      </header>
      <main className="flex h-full w-full flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
