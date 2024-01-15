import React from "react";
import TweetActions from "./tweet-actions";

export default function Tweet({
  text,
  avatarImage,
  image,
  span,
  time,
  tweetAuthor,
  tweetImage,
}) {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={avatarImage} alt="image" />
      </div>
      <div className="tweet-body">
        <div className="tweet-title">
          {tweetAuthor}
          <img src={image} className="Verified" />
          <div className="tweet-title-details">
            <p>
              {span}
              <span> . </span>
              {time}
            </p>
          </div>
        </div>
        <div className="tweet-text">
          <p>{text}</p>
        </div>
        <div className="tweet-content">
          {tweetImage ? (
            <></>
          ) : (
            <>
              <p>bonjour</p>
            </>
          )}
        </div>
        <TweetActions />{" "}
      </div>
    </div>
  );
}
