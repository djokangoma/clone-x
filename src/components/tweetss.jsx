import React from "react";
import tweetData from "../models/tweetData";
import Tweet from "./tweet";

export default function Tweetss() {
  // console.log(tweetData);
  return (
    <div className="tweets">
      {/* {tweetData.map((tweet, index) => {
        <Tweet tweet={tweet} key={index} />;
      })} */}
    </div>
  );
}
