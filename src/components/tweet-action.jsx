import React from "react";

export default function TweetAction({ icon, value, customClassName }) {
  return (
    <div className="tweet-action flex items-center justify-center gap-4">
      <div className={customClassName}>
        <img src={icon} alt="iconAction" />
        <button>{value} </button>
      </div>
    </div>
  );
}
