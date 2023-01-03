import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Navbar } from "./Navbar";

export function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="flex justify-center">
        <Badge message="🚧 This website is still under development." />
        <Navbar />
      </header>
      <main className="mx-auto mt-40 flex w-full max-w-4xl flex-col items-center justify-center px-8">
        {children}
      </main>
    </>
  );
}
