import React from "react";
import { Link } from "react-router-dom";
import TweetLikeButton from "./tweet-likebutton";

export default function Tweet({
  identifiant,
  text,
  avatarImage,
  image,
  span,
  time,
  tweetAuthor,
  tweetImage,
  slug,
  tweetJaime,
  tweetMessage,
  tweetRetweet,
  tweetShare,
}) {
  return (
    <div className="tweet flex justify-start items-start gap-5 py-1.5 px-1 border-b border-gray-700">
      <div className="tweet-avatar ">
        <Link to={`/${slug}`}>
          <img
            src={avatarImage}
            alt="image"
            className="w-full h-20 rounded-full"
          />
        </Link>
      </div>

      <div className="tweet-content flex flex-col items-start justify-start gap-30 w-full">
        <div className="tweet-body flex flex-col gap-0.5">
          <div className="tweet-title flex items-start justify-start gap-10 text-base">
            <div className="md:font-bold">
              {" "}
              <Link to={`/${slug}`}>{tweetAuthor}</Link>
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

          <div className="flex  items-center gap-24">
            <div className=" flex flex-row gap-4">
              <TweetLikeButton />
            </div>
            <div className=" flex flex-row gap-4  hover:bg-purple-600">
              <img src={tweetMessage} alt="image" className=" hover:bg-red" />
              <p>10</p>
            </div>
            <div className=" flex flex-row gap-4">
              <img src={tweetRetweet} alt="image" />
              <p>0</p>
            </div>
            <div className=" flex flex-row gap-4">
              <img src={tweetShare} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
