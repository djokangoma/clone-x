import React, { useState } from "react";
import tweetData from "../models/tweetData";
import Tweet from "./tweet";
import initialData from "../data/initialData.json";
import { useContext } from "react";
import { TweetContext } from "../context/user-context";

export default function Tweets() {
  // console.log("DATA :" + JSON.stringify(tweetData));
  const OwnTweet = useContext(TweetContext);
  const { datas, setDatas } = OwnTweet.tweets;
  const copydatas = [...datas].reverse();

  return (
    <div className="tweets">
      {copydatas.map((item) => (
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
          tweetJaime={item.tweetJaime}
          tweetMessage={item.tweetMessage}
          tweetRetweet={item.tweetRetweet}
          tweetShare={item.tweetShare}
        />
      ))}
    </div>
  );
}
