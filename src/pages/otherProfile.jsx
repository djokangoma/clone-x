import React from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
import TweetAvatar from "../components/tweet-avatar";

export default function OthersProfile() {
  const params = useParams();
  const { idProfile } = params;
  const jsonTweets = jsonDatas.tweets;
  const profile = jsonTweets.find(
    (element) => element.identifiant === idProfile
  );
  return (
    <div>
      <h1>{profile.tweetAuthor} </h1>
      <h1>{profile.tweetAuthor}</h1>
      <p> 0 post </p>
      <TweetAvatar image={profile.avatar} />
      <p>{profile.tweetText}</p>
    </div>
  );
}
