import React from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
import TweetAvatar from "../components/tweet-avatar";
import ButtonTwitter from "../components/button-tweet";
import axios from "axios";
import { TweetContext } from "../context/user-context";
import { useContext } from "react";

export default function OthersProfile() {
  const otherTweet = useContext(TweetContext);
  const { datas, setDatas } = otherTweet.tweets;
  const copydatas = [...datas];
  const { slug } = useParams();
  // const jsonTweets = useContext(TweetContext);

  const profile = copydatas.find((element) => element.slug === slug);

  console.log("id :", profile);
  return (
    <div className="userProfile">
      <h1>{profile.tweetAuthor}</h1>
      <p> 0 post </p>
      <div className="userProfileAvatar ">
        <TweetAvatar
          image={profile.avatar}
          details="avatarPofileUser rounded-full"
        />
      </div>
      <div className="profileNameUser">
        <h1>{profile.tweetAuthor} </h1>
        <p className="para-profileNameUser">@{profile.tweetAuthor} </p>
        <ButtonTwitter button="button-profileNameUser" Tweet={"Edit profile"} />
      </div>
    </div>
  );
}
