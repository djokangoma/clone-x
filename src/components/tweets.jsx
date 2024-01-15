import React from "react";
import tweetData from "../models/tweetData";
import Tweet from "./tweet";

// function TweetBody() {
//   return (
//     <div className="tweet-body">
//       <TweetTitle
//         text="The New York Times"
//         image="src/icons/Verified.png"
//         span="@mytimes 2h"
//       />
//       <TweetText text="Gardening boomed during the pandemic. Six Black writers share how               it has helped them re-establish, and reimagine, a connection to cultivation and                the land" />
//       <TweetAction />
//     </div>
//   );
// }
// function TweetAction({ icon, value }) {
//   return (
//     <div className="tweet-action">
//       <img src={icon} alt="" />
//       <span>{value}</span>
//     </div>
//   );
// }
// function TweetActions() {
//   return (
//     <div className="tweet-actions">
//       <TweetAction icon="src/icons/Reply.png" value="17" />
//       <TweetAction icon="src/icons/Retweet.png" value="19" />
//       <TweetAction icon="src/icons/React.png" value="19" />
//       <TweetAction icon="src/icons/Share.png" />
//     </div>
//   );
// }
// function TweetContent() {
//   return (
//     <div className="tweet-content">
//       <TweetBody />
//       <TweetImage />
//       <TweetActions />
//     </div>
//   );
// }

// function TweetAll() {
//   return (
//     <div className="tweet">
//       <TweetAvatar image="src/images/image 1.png" />
//       <TweetContent />
//     </div>
//   );
// }
// function TweetEnd() {
//   return (
//     <div className="tweet">
//       <TweetAvatar image="src/icons/image 1.png" />
//       <div className="tweet-body">
//         <TweetTitle
//           text="Twitter"
//           image="src/icons/Verified.png"
//           span="@twitter                  2h"
//         />
//         <TweetText text="BIG NEWS lol jk still Twitter" />
//         <div className="tweet-content">
//           <TweetActions />
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Tweets() {
  console.log("DATA :" + JSON.stringify(tweetData));

  return (
    <div className="tweets">
      {tweetData.map((item) => (
        <>
          <Tweet
            key={item.id}
            avatarImage={item.avatar}
            tweetAuthor={item.tweetAuthor}
            image={item.tweetVeried}
            span={item.tweetDetail}
            time={item.tweetTime}
            text={item.tweetText}
            tweetImage={item.tweetImage}
          />
        </>
      ))}
    </div>
  );
}
