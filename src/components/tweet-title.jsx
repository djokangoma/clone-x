import React from "react";
import verified from "../icons/Verified.png";
import imgTwitter from "../icons/image 1.png";
import ButtonFollow from "./button-follow";
import ButtonTwitter from "./button-tweet";

export default function TweetSitle({ image, texte1, texte2, image2 }) {
  return (
    <div>
      <div className="box-tweetTitle">
        <div className="children-tweetTitle">
          <img src={imgTwitter} className={image} alt="" />
          <div>
            <p>{texte1} </p>
            <p className="parag">{texte2} </p>
          </div>
          <img src={verified} alt="icon-verified" className={image2} />
        </div>
        <ButtonTwitter button="button" Tweet="Follow" />
      </div>
    </div>
  );
}
