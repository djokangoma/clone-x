import React from "react";

export default function TweetAvatar({ image }) {
  return (
    <div className="tweet-avatar">
      <img className={image} alt="image" />
    </div>
  );
}
