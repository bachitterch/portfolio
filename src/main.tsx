import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./client/router";
import { TrpcClient } from "./client/utils/trpc";
import { HeadProvider } from "react-head";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeadProvider>
      <TrpcClient>
        <Router />
      </TrpcClient>
    </HeadProvider>
  </React.StrictMode>
);
