import TweetAction from "./tweet-action";
import Jaime from "../icons/React.png";
import Message from "../icons/Reply.png";
import Retweet from "../icons/Retweet.png";
import Share from "../icons/Share.png";
import { useState } from "react";
// import data from "../data/initialData.json";

export default function TweetActions() {
  // const [like, setLike] = useState(0);

  // const handleLike = () => {
  //   console.Console(handleLike);
  //   setLike((like = like + 1));
  // };

  // const TweetLikeButton = ({ tweetId, initialLikesCount }) => {
  //   const [likesCount, setLikesCount] = useState(initialLikesCount);
  //   const [isLiked, setIsLiked] = useState(false);

  //   const handleLikeClick = () => {
  //     if (isLiked) {
  //       // Déjà liké, annuler le like
  //       setLikesCount(likesCount - 1);
  //       setIsLiked(false);
  //     } else {
  //       // Incrémenter le nombre de likes
  //       setLikesCount(likesCount + 1);
  //       setIsLiked(true);
  //     }
  //   };

  //   const getLikeButtonStyle = () => {
  //     return isLiked ? "liked-button" : "default-button";
  //   };

  //   return (
  //     <div className="tweet-like-button-container">
  //       <button className={getLikeButtonStyle()} onClick={handleLikeClick}>
  //         {likesCount}
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div className="tweet-actions flex justify-center items-center gap-5 text-gray-700 text-base">
      <TweetAction icon={Message} value="0" customClassName="messageIcon" />
      <TweetAction icon={Retweet} value="10" customClassName="retweetIcon" />
      <TweetAction icon={Jaime} value="0" customClassName="jaimeIcon" />
      <TweetAction icon={Share} customClassName="sharetIcon" />
    </div>
  );
}
