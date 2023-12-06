import React from "react";

function TweetAvatar({ image }) {
  return (
    <div className="tweet-avatar">
      <img src={image} alt="image" />
    </div>
  );
}
function TweetTitle({ text, image, span }) {
  return (
    <div className="tweet-title">
      {text}
      <img src={image} className="Verified" />
      <div className="tweet-title-details">{span}</div>
    </div>
  );
}
function TweetText({ text }) {
  return (
    <div className="tweet-text">
      <p>{text}</p>
    </div>
  );
}
function TweetImage() {
  return (
    <div className="tweet-image">
      <img src="src/images/tweet-image.png" />
    </div>
  );
}
function TweetBody() {
  return (
    <div className="tweet-body">
      <TweetTitle
        text="The New York Times"
        image="src/icons/Verified.png"
        span="@nytimes 9h"
      />
      <TweetText text="Gardening boomed during the pandemic. Six Black writers share how               it has helped them re-establish, and reimagine, a connection to cultivation and                the land" />
      <TweetAction />
    </div>
  );
}
function TweetAction({ icon, value }) {
  return (
    <div className="tweet-action">
      <img src={icon} alt="" />
      <span>{value}</span>
    </div>
  );
}
function TweetActions() {
  return (
    <div className="tweet-actions">
      <TweetAction icon="src/icons/Reply.png" value="17" />
      <TweetAction icon="src/icons/Retweet.png" value="19" />
      <TweetAction icon="src/icons/React.png" value="19" />
      <TweetAction icon="src/icons/Share.png" />
    </div>
  );
}
function TweetContent() {
  return (
    <div className="tweet-content">
      <TweetBody />
      <TweetImage />
      <TweetActions />
    </div>
  );
}
function Tweet() {
  return (
    <div className="tweet">
      <TweetAvatar image="src/images/tweet-profile-photo.png" />
      <div className="tweet-body">
        <TweetTitle text="CNN" image="src/icons/Verified.png" span="@CNN 7m" />
        <TweetText text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
        <div className="tweet-content">
          <TweetActions />
        </div>
      </div>
    </div>
  );
}
function TweetAll() {
  return (
    <div className="tweet">
      <TweetAvatar image="src/images/image 1.png" />
      <TweetContent />
    </div>
  );
}
function TweetEnd() {
  return (
    <div className="tweet">
      <TweetAvatar image="src/icons/image 1.png" />
      <div className="tweet-body">
        <TweetTitle
          text="Twitter"
          image="src/icons/Verified.png"
          span="@twitter                  2h"
        />
        <TweetText text="BIG NEWS lol jk still Twitter" />
        <div className="tweet-content">
          <TweetActions />
        </div>
      </div>
    </div>
  );
}
export default function Tweets() {
  return (
    <div className="tweets">
      <Tweet />
      <TweetAll />
      <TweetEnd />
      <TweetEnd />
      <TweetEnd />
    </div>
  );
}
