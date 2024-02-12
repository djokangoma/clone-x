import React, { useContext } from "react";
import tweetData from "../models/tweetData";
import Tweet from "./tweet";
import initialData from "../data/initialData.json";
import { tweetContext } from "../context/user-context";

export default function Tweets({ children }) {
  const tweet = useContext(tweetContext);
  // console.log("DATA :" + JSON.stringify(tweetData));

  return (
    <div className="tweets">
      {initialData.tweets.map((item) => (
        <Tweet
          key={item.id}
          identifiant={item.id}
          avatarImage={item.avatar}
          tweetAuthor={item.tweetAuthor}
          image={item.tweetVeried}
          span={item.tweetDetail}
          time={item.tweetTime}
          text={item.tweetText}
          tweetImage={item.tweetImage}
        />
      ))}
    </div>
  );
}
