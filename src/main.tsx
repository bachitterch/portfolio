import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "./client/router";
import { TrpcClient } from "./client/utils/trpc";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TrpcClient>
      <Router />
    </TrpcClient>
  </React.StrictMode>,
);
