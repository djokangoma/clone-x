import React from "react";
import TweetAction from "./tweet-action";
import Jaime from "../icons/React.png";
import Message from "../icons/Reply.png";
import Retweet from "../icons/Retweet.png";
import Share from "../icons/Share.png";

export default function TweetActions() {
  return (
    <div className="tweet-actions">
      <TweetAction icon={Message} value="0" />
      <TweetAction icon={Retweet} value="0" />
      <TweetAction icon={Jaime} value="0" />
      <TweetAction icon={Share} />
    </div>
  );
}
