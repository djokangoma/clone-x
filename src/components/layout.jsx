import React from "react";
import Sidebar from "./sidebar";
import Trends from "./trends";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="right-sidebar">
        <Trends />
      </div>
    </>
  );
}

export default Layout;
