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
        <NavLink to="/home" className="icon-navlink">
          <img src="src/icons/Home-Fill.png " alt="icon-home" />
          Home
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/explore" className="icon-navlink">
          <img src="src/icons/Explore.png" alt="icon-explore" />
          Explorei
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/notifications" className="icon-navlink">
          <img src="src/icons/Notifications.png" alt="icon-notification" />
          Notifications
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/messages" className="icon-navlink">
          <img src="src/icons/Messages.png" alt="icon-message" />
          Messages
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/bookmarks" className="icon-navlink">
          <img src="src/icons/Bookmarks.png" alt="icon-Bookmarks" />
          Bookmarks
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/lists" className="icon-navlink">
          <img src="src/icons/Lists.png" alt="icon-Lists" />
          Lists
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/profile" className="icon-navlink">
          <img src="src/icons/Profile.png" alt="icon-Profile" />
          Profile
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/more" className="icon-navlink">
          <img src="src/icons/More.png" alt="icon-More" />
          More
        </NavLink>
      </li>
    </ul>
  );
}
export default SidebarNav;
