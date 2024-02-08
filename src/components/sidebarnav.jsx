import { NavLink } from "react-router-dom";
import {
  Expore,
  Bookmarks,
  Home,
  Profile,
  Messages,
  Lists,
  More,
  Notifications,
  Twitter,
} from "../icons/index";

export default function SidebarNav() {
  return (
    <ul>
      <img src={Twitter} alt="logo-twitter" className="navlink" width={75} />

      <li className="navlink">
        <NavLink to="/home" className="icon-navlink">
          <img src={Home} alt="icon-home" />
          Home
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/explore" className="icon-navlink">
          <img src={Expore} alt="icon-explore" />
          Explore
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/notifications" className="icon-navlink">
          <img src={Notifications} alt="icon-notification" />
          Notifications
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/messages" className="icon-navlink">
          <img src={Messages} alt="icon-message" />
          Messages
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/bookmarks" className="icon-navlink">
          <img src={Bookmarks} alt="icon-Bookmarks" />
          Bookmarks
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/lists" className="icon-navlink">
          <img src={Lists} alt="icon-Lists" />
          Lists
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/profile" className="icon-navlink">
          <img src={Profile} alt="icon-Profile" />
          Profile
        </NavLink>
      </li>

      <li className="navlink">
        <NavLink to="/more" className="icon-navlink">
          <img src={More} alt="icon-More" />
          More
        </NavLink>
      </li>
    </ul>
  );
}
