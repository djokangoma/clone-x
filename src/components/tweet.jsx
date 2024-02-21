import React from "react";
import TweetActions from "./tweet-actions";
import { Link } from "react-router-dom";

export default function Tweet({
  identifiant,
  text,
  avatarImage,
  image,
  span,
  time,
  tweetAuthor,
  tweetImage,
}) {
  return (
    <div className="tweet flex justify-start items-start gap-5 py-1.5 px-1 border-b border-gray-700">
      <div className="tweet-avatar ">
        <Link to={`/profile/${identifiant}`}>
          <img
            src={avatarImage}
            alt="image"
            className="w-full h-16 rounded-full"
          />
        </Link>
      </div>

      <div className="tweet-content flex flex-col items-start justify-start gap-30 w-full">
        <div className="tweet-body flex flex-col gap-0.5">
          <div className="tweet-title flex items-start justify-start gap-10 text-base">
            <div class="md:font-bold">
              {" "}
              <Link to={`/profile/${identifiant}`}>{tweetAuthor}</Link>
            </div>
            <img src={image} className="Verified" />
            <div className="tweet-title-details text-gray-600">
              <p>
                {span}
                <span> . </span>
                {time}
              </p>
            </div>
          </div>
          <div className="tweet-text text-gray-400 text-base">
            <p>{text}</p>
          </div>
          <div className="tweet-image w-full px-3 pt-0 pb-0">
            {tweetImage ? (
              <>
                <img
                  src={tweetImage}
                  alt="img"
                  className="w-full h-auto  rounded-3xl border-gray-700 border-solid"
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <TweetActions />{" "}
        </div>
      </div>
    </div>
  );
}
