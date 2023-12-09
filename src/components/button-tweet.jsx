import React from "react";

export default function ButtonTwitter({ button, tweet }) {
  return (
    <div>
      <button className={button}>{tweet}</button>
    </div>
  );
}
