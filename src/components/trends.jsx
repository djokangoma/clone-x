import React from "react";

function Trends() {
  return (
    <div className="trends">
      <button className="btn-searchTwitter">
        {" "}
        <img src="src/icons/Search.png" alt="icon-search" />
        search twitter
      </button>
      <div className="trendForYou"></div>
    </div>
  );
}
export default Trends;
