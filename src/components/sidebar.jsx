import React from "react";

function Sidebar() {
  return (
    <div>
      <div>
        <img src="src/icons/Twitter.png" alt="logo-twitter" />
      </div>

      <div>
        <p>
          <img src="src/icons/Home-Fill.png " width={15} alt="icon-home" /> home
        </p>
      </div>

      <div>
        <p>
          <img src="src/icons/Explore.png" width={15} alt="icon-explore" />{" "}
          Explore my name is joeffrey
        </p>
      </div>

      <div>
        <p>
          <img
            src="src/icons/Notifications.png"
            width={15}
            alt="icon-notification"
          />{" "}
          Notifications
        </p>
      </div>

      <div>
        <p>
          <img src="src/icons/Messages.png" width={15} alt="icon-message" />{" "}
          {" Messages"}
        </p>
      </div>
      <div>
        <p>
          {" "}
          <img
            src="src/icons/Bookmarks.png"
            width={15}
            alt="icon-Bookmarks"
          />{" "}
          Bookmarks
        </p>
      </div>

      <div>
        <p>
          {" "}
          <img src="src/icons/Lists.png" width={15} alt="icon-Lists" /> Lists
        </p>
      </div>

      <div>
        <p>
          <img src="src/icons/Profile.png" width={15} alt="icon-Profile" />{" "}
          Profile
        </p>
      </div>

      <div>
        <p>
          <img src="src/icons/More.png" width={15} alt="icon-More" /> More
        </p>
      </div>
      <button></button>
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
