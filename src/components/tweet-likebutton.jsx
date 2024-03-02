import { useState } from "react";

export default function TweetLikeButton() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setCount(count + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };
  const heartStyle = {
    backgroundColor: isLiked ? "red" : "black",
  };

  return (
    <div>
      <button
        className="tweet-like-button-container flex flex-row gap-4"
        onClick={handleClick}
      >
        <img
          className="hover:bg-red"
          src="/icons/React.png"
          alt="image"
          style={heartStyle}
        />
        {count}
      </button>
    </div>
  );
}
