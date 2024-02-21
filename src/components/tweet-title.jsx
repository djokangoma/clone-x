import React from "react";
import verified from "../icons/Verified.png";
import ButtonTwitter from "./button-tweet";

export default function TweetTitle({ texte1, texte2, image2 }) {
  return (
    <div class="flex ">
      <div class="flex items-start ">
        <div class="flex flex-col">
          <p class="md:font-bold">{texte1} </p>
          <p class="opacity-50">{texte2} </p>
        </div>
        <img src={verified} alt="icon-verified" className={image2} />
      </div>
      {/* <ButtonTwitter button="button" Tweet="Follow" /> */}
    </div>
  );
}
