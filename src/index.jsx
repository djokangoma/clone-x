import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/page-error";
import "./style/App.css";
import "./style/reset.css";
import Layout from "./components/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Notifications from "./pages/notifications";
import Messages from "./pages/messages";
import Bookmarks from "./pages/bookmarks";
import Lists from "./pages/lists";
import Profile from "./pages/profile";
import More from "./pages/more";
import OthersProfile from "./pages/otherProfile";

import { TweetContext } from "./context/user-context";
import dataJson from "./data/initialData.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TweetContext.Provider
        value={{ islogged: true, tweets: dataJson.tweets }}
      >
        <Layout />,
      </TweetContext.Provider>
    ),
    errorElement: <ErrorPage />,
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
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: ":slug",
        element: <OthersProfile />,
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
