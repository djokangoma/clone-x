import React from "react";
import tweetData from "../modelss/tweetData";
import Tweet from "./tweet";

export default function Tweets() {
  console.log("DATA :" + JSON.stringify(tweetData));

  return (
    <div className="tweets">
      {tweetData.map((item) => (
        <Tweet
          key={item.id}
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
