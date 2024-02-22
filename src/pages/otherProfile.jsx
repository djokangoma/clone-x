import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
import TweetAvatar from "../components/tweet-avatar";
import ButtonTwitter from "../components/button-tweet";
import { TweetContext } from "../context/user-context";

export default function OthersProfile() {
  const { slug } = useParams();
  const jsonTweets = useContext(TweetContext);
  console.log("jsonTweets: ", jsonTweets);
  const profile = jsonTweets.tweets.find((element) => element.slug === slug);

  console.log("id :", profile);
  return (
    <div className="userProfile">
      <div className="userProfileAvatar">
        <TweetAvatar image={profile.avatar} />
      </div>
      <div className="profileNameUser">
        <h1>{profile.tweetAuthor} </h1>
        <p className="para-profileNameUser">@{profile.tweetAuthor} </p>
        <ButtonTwitter button="button-profileNameUser" Tweet={"Edit profile"} />
      </div>
      {/* <TweetAvatar image={profile.avatar} /> */}
      {/* <p>{profile.tweetText}</p> */}
    </div>
  );
}
