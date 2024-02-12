import React from "react";
import SidebarNav from "./sidebarnav";
import Avatar from "./avatar";
import ButtonTwitter from "./button-tweet";
import Private from "../icons/Private.png";
import More from "../icons/More-2.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarNav />

      <ButtonTwitter button={"btn-tweet2"} Tweet={"Twitter"} />

      <div className="box-profile">
        <Avatar image={"avatar-profile"} />

        <div>
          <div>
            <p className="private-profile">
              Bradley Ortiz
              <img src={Private} alt="icon-private" />
            </p>
          </div>
          <p className="name-bradley">@Bradley..</p>
        </div>

        <img src={More} alt="icon-More-2" />
      </div>
    </div>
  );
}
export default Sidebar;
