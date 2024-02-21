import React from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
import TweetAvatar from "../components/tweet-avatar";
import ButtonTwitter from "../components/button-tweet";

export default function OthersProfile() {
  const { identifiant } = useParams();
  const jsonTweets = jsonDatas.tweets;
  console.log("jsonTweets: ", jsonTweets);
  const profile = jsonTweets.find((element) => element.identifiant === id);

  console.log("id :", identifiant);
  return (
    <div className="userProfile">
      <h1>bounjour</h1>
      <p> 0 post </p>
      <div className="userProfileAvatar">
        <TweetAvatar image={profile} />
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
