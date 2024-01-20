import React from "react";

export default function TweetAction({ icon, value, customClassName }) {
  return (
    <div className="tweet-action ">
      <div className={customClassName}>
        <img src={icon} alt="iconAction" />
        <p> {value} </p>
      </div>
    </div>
  );
}
