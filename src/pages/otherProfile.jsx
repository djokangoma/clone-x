import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
import TweetAvatar from "../components/tweet-avatar";
import ButtonTwitter from "../components/button-tweet";

export default function OthersProfile() {
  const { slug } = useParams();
  // const jsonTweets = useContext(TweetContext);
  const copyarray = [...jsonDatas.tweets];
  const profile = copyarray.find((element) => element.slug === slug);

  console.log("id :", profile);
  return (
    <div className="userProfile">
      <h1>{profile.tweetAuthor}</h1>
      <p> 0 post </p>
      <div className="userProfileAvatar">
        <TweetAvatar image={profile.avatar} />
      </div>
      <div className="profileNameUser">
        <h1>{profile.tweetAuthor} </h1>
        <p className="para-profileNameUser">@{profile.tweetAuthor} </p>
        <ButtonTwitter button="button-profileNameUser" Tweet={"Edit profile"} />
      </div>
    </div>
  );
}
