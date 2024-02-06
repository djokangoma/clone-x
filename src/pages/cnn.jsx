import React from "react";
import { useParams } from "react-router-dom";
import jsonDatas from "../data/initialData.json";
// import TweetAvatar from "../components/tweet-avatar";

export default function CNN() {
  const { idProfile } = useParams();
  const jsonTweets = jsonDatas.tweets;
  const profile = jsonTweets.find((element) => (element.id = idProfile));
  console.log(profile);
  return (
    <div>
      <h1>{profile.tweetAuthor}</h1>
      <p> 0 post </p>
      <TweetAvatar image={profile.avatar} />
      <p>{profile.tweetText}</p>
    </div>
  );
}
