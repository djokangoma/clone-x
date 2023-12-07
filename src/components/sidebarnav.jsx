import { NavLink } from "react-router-dom";

function SidebarNav() {
  return (
    <ul>
      <img
        src="src/icons/Twitter.png"
        alt="logo-twitter"
        className="navlink"
        width={75}
      />

      <li className="navlink">
        <NavLink to="/home">
          <img
            src="src/icons/Home-Fill.png "
            alt="icon-home"
            className="icon-navlink"
          />
          Home
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/explore">
          <img
            src="src/icons/Explore.png"
            alt="icon-explore"
            className="icon-navlink"
          />
          Explore
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/notifications">
          <img
            src="src/icons/Notifications.png"
            alt="icon-notification"
            className="icon-navlink"
          />
          Notifications
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/messages">
          <img
            src="src/icons/Messages.png"
            alt="icon-message"
            className="icon-navlink"
          />
          Messages
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/bookmarks">
          <img
            src="src/icons/Bookmarks.png"
            alt="icon-Bookmarks"
            className="icon-navlink"
          />
          Bookmarks
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/lists">
          <img
            src="src/icons/Lists.png"
            alt="icon-Lists"
            className="icon-navlink"
          />
          Lists
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/profile">
          <img
            src="src/icons/Profile.png"
            alt="icon-Profile"
            className="icon-navlink"
          />
          Profile
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/more">
          <img
            src="src/icons/More.png"
            alt="icon-More"
            className="icon-navlink"
          />
          More
        </NavLink>
      </li>
    </ul>
  );
}
export default SidebarNav;
