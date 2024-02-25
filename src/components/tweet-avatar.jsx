import React from "react";

export default function TweetAvatar({ image, details }) {
  return (
    <div className="tweet-avatar">
      <img src={image} className={details} alt="image" />
    </div>
  );
}
