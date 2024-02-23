import React from "react";
import Avatar from "./avatar";
import { useState } from "react";
import ButtonTwitter from "./button-tweet";
import { Link } from "react-router-dom";
import data from "../data/initialData.json";

function TweetEditor() {
  const copyarray = [...data.tweets];
  const [tweetUser, setTweetUser] = useState("copyarray");
  const [input, SetInput] = useState("");

  // const tableau = [...tweetUser];

  // const objet = {
  //   author: "ton auteur",
  //   tweetText: "valeur de ton input",
  // };

  // tableau.push(objet);

  // setTweetUser(tableau);

  const handleSubmit = (Event) => {
    Event.preventDefault();
    const copyTweet = [...tweet];
    const tweetAdd = { tweet };
    const newTweet = tweetAdd.push(copyTweet);
    console.log("newTweet :", newTweet);
    setTweet(newTweet);

    alert("mon ");
  };

  const handleChange = (Event) => {
    const newId = Event.target.value;
    console.log("newId :", newId);
  };

  return (
    <div className="tweet-editor">
      <Link to="/profile">
        <Avatar />
      </Link>

      <form className="tweet-editor-form" onSubmit={handleSubmit}>
        <input
          className="tweet-editor-input"
          placeholder="what's happening?"
          onChange={handleChange}
        />
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
      </form>
    </div>
  );
}

export default TweetEditor;
