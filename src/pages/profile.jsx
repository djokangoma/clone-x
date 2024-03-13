import React from "react";
import Avatar from "../components/avatar";
import ButtonTwitter from "../components/button-tweet";
import { TweetContext } from "../context/user-context";
import { useContext } from "react";

function Profile() {
  // const context = useContext(TweetContext);
  // const { tweetUser, setTweetUser } = context.tweets;
  // const ownUser = [...tweetUser];

  return (
    <div className="userProfile">
      <h1>Bradley Ortiz</h1>
      <p> 0 post </p>
      <div className="userProfileAvatar">
        <Avatar image={"avatarPofileUser"} />
      </div>
      <div className="profileNameUser">
        <h1>Bradley Ortiz</h1>
        <p className="para-profileNameUser">@Bradley Ortiz</p>
        <ButtonTwitter button="button-profileNameUser" Tweet={"Edit profile"} />
      </div>
    </div>
  );
}
export default Profile;
