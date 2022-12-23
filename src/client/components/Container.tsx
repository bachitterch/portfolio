import type { ReactNode } from "react";

import { Badge } from "./Badge";
import { Navbar } from "./Navbar";

export function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="mx-auto flex w-full justify-center">
        <Badge message="🚧 This website is still under development." />
        <Navbar />
      </header>
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-8">
        {children}
      </main>
    </>
  );
}
