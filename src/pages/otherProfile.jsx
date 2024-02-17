import React from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
import TweetAvatar from "../components/tweet-avatar";

export default function OthersProfile() {
  // const params = useParams();
  const { identifiant } = useParams();
  const jsonTweets = jsonDatas.tweets;
  console.log("jsonTweets: ", jsonTweets);
  const profile = jsonTweets.find((element) => element.id === identifiant);

  console.log("id :", identifiant);
  return (
    <div>
      <h1>{profile.tweetAuthor}</h1>
      <p> 0 post </p>
      <TweetAvatar image={profile.avatar} />
      <p>{profile.tweetText}</p>
    </div>
  );
}
