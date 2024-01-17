import React from "react";

export default function TweetImage({ tweetImage }) {
  return (
    <div className="tweet-image">
      <img src={tweetImage} alt="tweetAvatar" />
    </div>
  );
}
