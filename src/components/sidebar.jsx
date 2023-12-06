import React from "react";
import SidebarNav from "./sidebarnav";

function Sidebar() {
  return (
    <div>
      <SidebarNav />
      <button className="btn-tweetsidebar">Tweet</button>
      <div>
        <img src="src/images/profile-photo.png" alt="image-topTweets" />
        <p>
          Bradley Ortiz <img src="src/icons/Private.png" alt="icon-private" />
        </p>
        <input type="text" placeholder="@Bradley" />
        <img src="src/icons/More-2.png" alt="icon-More-2" />
      </div>
    </div>
  );
}
export default Sidebar;
