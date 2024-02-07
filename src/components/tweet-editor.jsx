import React from "react";
import Avatar from "./avatar";
import ButtonTwitter from "./button-tweet";
import { Link } from "react-router-dom";

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Link to="/profile">
        <Avatar />
      </Link>

      <div className="tweet-editor-form">
        <input className="tweet-editor-input" placeholder="what's happening?" />

        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="src/icons/Vector.png" />
            <img src="src/icons/Gif.png" />
            <img src="src/icons/Poll.png" />
            <img src="src/icons/Group.png" />
            <img src="src/icons/Schedule.png" />
          </div>
          <ButtonTwitter button="button" Tweet={"Tweet"} />
        </div>
      </div>
    </div>
  );
}
export default TweetEditor;
