import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Explore from "";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "bookmaks",
        element: <Bookmaks />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "more",
        element: <More />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
