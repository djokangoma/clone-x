import React from "react";
import Sidebar from "./sidebar";
import Trends from "./trends";
import { Outlet } from "react-router-dom";
import dataJson from "../data/initialData.json";
import { useState } from "react";
import { TweetContext } from "../context/user-context";

function Layout() {
  const copyarray = [...dataJson.tweets];
  const [tweetUser, setTweetUser] = useState(copyarray);
  return (
    <TweetContext.Provider
      value={{ islogged: true, tweets: { tweetUser, setTweetUser } }}
    >
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="right-sidebar">
        <Trends />
      </div>
    </TweetContext.Provider>
  );
}

export default Layout;
