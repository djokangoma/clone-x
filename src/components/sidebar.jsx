import React from "react";
import SidebarNav from "./sidebarnav";
import avatar from "./avatar";
import ButtonTwitter from "./button-tweet";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarNav />

      <ButtonTwitter button={"btn-tweet2"} Tweet={"Twitter"} />

      <div className="box-profile">
        <avatar image={"avatar-profile"} />

        <div>
          <div>
            <p className="private-profile">
              Bradley Ortiz
              <img src="src/icons/Private.png" alt="icon-private" />
            </p>
          </div>
          <p className="name-bradley">@Bradley..</p>
        </div>

        <img src="src/icons/More-2.png" alt="icon-More-2" />
      </div>
    </div>
  );
}
export default Sidebar;
