import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SidebarNav from "./components/sidebarnav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarNav />,
  },
  {
    path: "/home",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
