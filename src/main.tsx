import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HeadProvider } from "react-head";

import { Router } from "./client/router";
import { TrpcClient } from "./client/utils/trpc";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeadProvider>
      <TrpcClient>
        <Router />
      </TrpcClient>
    </HeadProvider>
  </React.StrictMode>,
);
