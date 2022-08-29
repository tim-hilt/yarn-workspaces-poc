import React from "react";
import ReactDOM from "react-dom/client";
import { aFunc } from "@workspaces/a";
import { bFunc } from "@workspaces/b";

aFunc();
bFunc();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>Hi, Tim</div>
  </React.StrictMode>
);
