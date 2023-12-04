import React from 'react';

function TweetAvatar({ image }) {
  return (
    <div className="image1.png">
      <img src={image} alt="" />
    </div>
  )
}
function TweetTitle({ text, image, span }) {
  return (
    <div className="tweet-title">
      {text}
      <img src={image} />
      <div className="tweet-title-details">
        {span}
      </div>
    </div>
  )
}
function TweetText({ text }) {
  return (
    <div className="tweet-text">
      <p>{text}</p>
    </div>
  )
}
function TweetImage() {
  return (
    <div className="tweet-image">
      <img src="src/images/tweetImage.png" />
    </div>
  )
}
function TweetBody() {
  return (
    <div className="tweet-body">
      <TweetTitle text="The New York Times" image="src/components/icons/Group.svg" span="@nytimes 9h" />
      <TweetText text="Gardening boomed during the pandemic. Six Black writers share how               it has helped them re-establish, and reimagine, a connection to cultivation and                the land" />
      <TweetAction />
    </div>
  )
}
function TweetAction({ icon, value }) {
  return (
    <div className="tweet-action">
      <img src={icon} alt="" />
      <span>{value}</span>
    </div>
  )
}
function TweetActions() {
  return (
    <div className="tweet-actions">
      <TweetAction icon="src/components/icons/Vector.png"
        value="17" />
      <TweetAction icon="src/components/icons/Groups.png"
        value="19" />
      <TweetAction icon="src/components/icons/React.png"
        value="19" />
      <TweetAction icon="src/components/icons/Share.png"
        value="19" />
    </div>
  )
}
function TweetContent() {
  return (
    <div className="tweet-content">
      <TweetBody />
      <TweetImage />
      <TweetActions />
    </div>
  )
}
function Tweet() {
  return (
    <div className="tweet">
      <TweetAvatar image="src/images/tweet-profile-photo.png" />
      <div className="tweet-body">
        <TweetTitle text="CNN" image="src/components/icons/Group.svg" span="CNN 7h" />
        <TweetText text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
        <div className="tweet-content">
          <TweetActions />
        </div>
      </div>
    </div>
  )
}
function TweetAll() {
  return (
    <div className="tweet">
      <TweetAvatar image="src/images/tweet-image.png" />
      <TweetContent />
    </div>
  )
}
function TweetEnd() {
  return (
    <div className="tweet">
      <TweetAvatar image="src/icons/image 1.png" />
      <div className="tweet-body">
        <TweetTitle text="Twitter" image="src/images/image 1.png" span="@twitter   2h" />
        <TweetText text='BIG NEWS lol jk still Twitter' />
        <div className="tweet-content">
          <TweetActions />
        </div>
      </div>
    </div>
  )
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
  )
}
