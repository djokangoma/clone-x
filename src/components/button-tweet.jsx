import React from "react";

export default function ButtonTwitter({ button, Tweet }) {
  return (
    <div>
      <button className={button}>{Tweet} </button>
    </div>
  );
}
