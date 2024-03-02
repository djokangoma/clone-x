import { useState } from "react";

export default function TweetLikeButton() {
  const [count, setCount] = useState(0);
  const [imageColor, setImageColor] = useState("black");

  const handleClick = () => {
    setCount(count + 1);
    setImageColor("red");
  };

  return (
    <div>
      <button
        className="tweet-like-button-container flex flex-row gap-4"
        onClick={handleClick}
      >
        <img
          src="/icons/React.png"
          alt="image"
          style={{ color: setImageColor }}
        />
        {count}
      </button>
    </div>
  );
}
