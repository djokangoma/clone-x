import React from "react";
import verified from "../icons/Verified.png";
import ButtonTwitter from "./button-tweet";

export default function TweetTitle({ texte1, texte2, image2 }) {
  return (
    <div className="box-tweetTitle">
      <div className="children-tweetTitle">
        <p>{texte1} </p>
        <p className="parag">{texte2} </p>
      </div>
      <img src={verified} alt="icon-verified" className={image2} />
      <ButtonTwitter button="button" Tweet="Follow" />
    </div>
  );
}
