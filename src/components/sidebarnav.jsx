import { NavLink } from "react-router-dom";

function SidebarNav() {
  return (
    <ul>
      <li>
        <img src="src/icons/Twitter.png" alt="logo-twitter" />
        <NavLink to="/home">
          <img src="src/icons/Home-Fill.png " alt="icon-home" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore">
          <img src="src/icons/Explore.png" alt="icon-explore" />
          Explore
        </NavLink>
      </li>
      <li>
        <NavLink to="/notifications">
          <img src="src/icons/Notifications.png" alt="icon-notification" />
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink to="/messages">
          <img src="src/icons/Messages.png" alt="icon-message" />
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink to="/bookmarks">
          <img src="src/icons/Bookmarks.png" alt="icon-Bookmarks" />
          Bookmarks
        </NavLink>
      </li>
      <li>
        <NavLink to="/lists">
          <img src="src/icons/Lists.png" alt="icon-Lists" />
          Lists
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          <img src="src/icons/Profile.png" alt="icon-Profile" />
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/more">
          <img src="src/icons/More.png" alt="icon-More" />
          More
        </NavLink>
      </li>
    </ul>
  );
}
export default SidebarNav;
