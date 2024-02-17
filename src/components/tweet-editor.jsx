import React from "react";
import Avatar from "./avatar";
import { useState } from "react";
import ButtonTwitter from "./button-tweet";
import { Link } from "react-router-dom";

function TweetEditor() {
  const [tweet, setTweet] = useState([
    {
      "current-user": {
        avatar: "./public/icons/profile-photo.png",
        tweetAuthor: "Bradley Ortiz",
        tweetVeried: "/public/icons/verified.png",
        tweetDetail: "@Bradley.. ",

        tweetTime: "1m",
        tweetText: "",
        tweetImage: null,
        tweetJaime: "Jaime",
        tweetMessage: "Message",
        tweetRetweet: "Retweet",
        tweetShare: "Share",
      },
      tweets: [
        {
          id: "1",
          avatar: "./public/icons/Tweet-Profile-Photo.png",
          tweetAuthor: "CNN",
          tweetVeried: "/public/icons/verified.png",
          tweetDetail: "@CNN",

          tweetTime: "7m",
          tweetText:
            "'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a \"major breakthrough\" that would serve to both strengthen the US steel industry and combat the global climate crisis.'",
          tweetImage: null,
          tweetJaime: "Jaime",
          tweetMessage: "Message",
          tweetRetweet: "Retweet",
          tweetShare: "Share",
        },
        {
          id: "2",
          avatar: "./public/icons/image-1.png",
          tweetAuthor: "The New York Times ",
          tweetVeried: "/public/icons/verified.png",
          tweetDetail: "@nytimes",
          tweetTime: "2h",
          tweetText:
            "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
          tweetImage: "./public/icons/tweet-image.png",
          tweetJaime: "Jaime",
          tweetMessage: "Message",
          tweetRetweet: "Retweet",
          tweetShare: "Share",
        },
        {
          id: "3",
          avatar: "./public/icons/image 1.png",
          tweetAuthor: "Twitter",
          tweetVeried: "/public/icons/verified.png",
          tweetDetail: "@twitter",
          tweetTime: "Oct 29",
          tweetText: "BIG NEWS lol jk still Twitter",
          tweetImage: null,
          tweetJaime: "Jaime",
          tweetMessage: "Message",
          tweetRetweet: "Retweet",
          tweetShare: "Share",
        },
        {
          id: "4",
          avatar: "./public/icons/image 1.png",
          tweetAuthor: "Twitter",
          tweetVeried: "/public/icons/verified.png",
          tweetDetail: "@twitter",
          tweetTime: "Oct 29",
          tweetText: "hello literally everyone",
          tweetImage: null,
          tweetJaime: "Jaime",
          tweetMessage: "Message",
          tweetRetweet: "Retweet",
          tweetShare: "Share",
        },
        {
          id: "5",
          avatar: "./public/icons/image 1.png",
          tweetAuthor: "Twitter",
          tweetVeried: "/public/icons/verified.png",
          tweetDetail: "@twitter",
          tweetTime: "Oct 4",
          tweetText: "hello literally everyone",
          tweetImage: null,
          tweetJaime: "Jaime",
          tweetMessage: "Message",
          tweetRetweet: "Retweet",
          tweetShare: "Share",
        },
      ],
    },
  ]);
  const [input, SetInput] = useState("");

  const handleSubmit = (Event) => {
    Event.preventDefault();
    const copyTweet = [...tweet];
    const tweetAdd = { tweet };
    const newTweet = copyTweet.push(tweetAdd);
    console.log("newTweet :", newTweet);
    setTweet(newTweet);

    alert("mon coeur");
  };

  const handleChange = (Event) => {
    SetInput(Event.target.value);
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
