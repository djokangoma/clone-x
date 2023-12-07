import React from "react";
import SidebarNav from "./sidebarnav";
import ProfilePhoto from "./profile-photo";
import ButtonTwitter from "./button-tweet";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarNav />
      <ButtonTwitter />

      <div className="box-profile">
        <ProfilePhoto />
        <p>
          Bradley Ortiz <img src="src/icons/Private.png" alt="icon-private" />
        </p>
        <input
          type="text"
          placeholder="@Bradley"
          className="tweet-editor-input"
        />
        <img src="src/icons/More-2.png" alt="icon-More-2" />
      </div>
    </div>
  );
}
export default Sidebar;
