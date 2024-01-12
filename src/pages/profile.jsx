import React from "react";
import Avatar from "../components/avatar";

function Profile() {
  return (
    <div className="userProfile">
      <h1>Bradley Ortiz</h1>
      <p> 0 post </p>
      <div className="userProfileAvatar">
        <Avatar />
      </div>
      <button className="btnUserProfile"> Edit profile</button>
      <h1>Bradley Ortiz</h1>
      <p>@Bradley Ortiz</p>
    </div>
  );
}
export default Profile;
