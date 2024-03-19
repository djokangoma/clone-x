import { useState } from "react";

export default function TweetLikeButton({ image }) {
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
    <button
      className=" flex flex-row gap-4 hover:text-red-500 "
      onClick={handleClick}
    >
      <img
        className=" hover:bg-gradient-to-r from-red-500 via-red-500 to-red-500 "
        src="/icons/React.png"
        alt="image"
      />
      {count}
    </button>
  );
}
