import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout, { appRouter } from "./src/App";
import { RouterProvider } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
