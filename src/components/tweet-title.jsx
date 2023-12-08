import React from "react";
import verified from "../icons/Verified.png";
import imgTwitter from "../icons/image 1.png";

export default function TweetSitle({ image, texte, image2 }) {
  return (
    <>
      <img src={imgTwitter} className={image} alt="" />
      <p>{texte} </p>
      <img src={verified} alt="icon-verified" className={image2} />
    </>
  );
}
