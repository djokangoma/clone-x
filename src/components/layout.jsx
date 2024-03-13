import React from "react";
import Sidebar from "./sidebar";
import Trends from "./trends";
import { Outlet } from "react-router-dom";
import dataJson from "../data/initialData.json";
import { useState, useEffect } from "react";
import { TweetContext } from "../context/user-context";
import axios from "axios";

function Layout() {
  // State to store the fetched data
  const [datas, setDatas] = useState([]);
  // const nouau = "inverser le tableau datas";

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65e5ab22d7f0758a76e700d1.mockapi.io/clonex/tweets"
      );
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // const copyarray = [...dataJson.tweets];
  // const [tweetUser, setTweetUser] = useState(copyarray);
  return (
    <TweetContext.Provider
      value={{ islogged: true, tweets: { datas, setDatas } }}
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
