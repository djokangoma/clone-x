import React from "react";
import avatarTweet from "../icons/image 1.png";

export default function TweetAvatar({ image }) {
  return (
    <div className="tweet-avatar">
      <img src={avatarTweet} className={image} alt="image" />
    </div>
  );
}
