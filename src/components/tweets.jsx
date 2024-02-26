import React, { useState } from "react";
import tweetData from "../models/tweetData";
import Tweet from "./tweet";
import initialData from "../data/initialData.json";
import { useContext } from "react";
import { TweetContext } from "../context/user-context";

export default function Tweets() {
  // console.log("DATA :" + JSON.stringify(tweetData));
  const tweetPro = useContext(TweetContext);
  // const copyarray = [...initialData.tweets];
  // const [tweetUser, setTweetUser] = useState("copyarray");
  const { tweetUser, setTweetUser } = tweetPro.tweets;

  return (
    <div className="tweets">
      {tweetUser.map((item) => (
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
          slug={item.slug}
        />
      ))}
    </div>
  );
}
