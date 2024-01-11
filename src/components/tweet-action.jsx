import React from "react";

export default function TweetAction({ icon, value }) {
  return (
    <div className="tweet-action">
      <img src={icon} alt="" />
      <p> {value} </p>
    </div>
  );
}
