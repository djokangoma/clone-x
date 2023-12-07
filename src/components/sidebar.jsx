import React from "react";
import SidebarNav from "./sidebarnav";
import ProfileAvatar from "./profile-avatar";
import ButtonTwitter from "./button-tweet";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarNav />
      <ButtonTwitter className="btn-twitterSidebar" />

      <div className="box-profile">
        <ProfileAvatar style={"avatar-profile"} />

        <div className="pp">
          <p className="private-profile">
            Bradley Ortiz <img src="src/icons/Private.png" alt="icon-private" />
          </p>
          <input
            type="text"
            placeholder="@Bradley"
            className="tweet-editor-input"
          />
        </div>
        <img src="src/icons/More-2.png" alt="icon-More-2" />
      </div>
    </div>
  );
}
export default Sidebar;
