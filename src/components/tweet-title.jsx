import React from "react";
import { useContext } from "react";
import verified from "../icons/Verified.png";
import ButtonTwitter from "./button-tweet";
import { TweetContext } from "../context/user-context";

export default function TweetTitle({ texte1, texte2, image2 }) {
  const contex = useContext(TweetContext);
  console.log("TweetContext: ", contex.tweets);
  return (
    <div className="flex ">
      <div className="flex items-start ">
        <div className="flex flex-col">
          <p className="md:font-bold">{texte1} </p>
          <p className="opacity-50">{texte2} </p>
        </div>
        <img src={verified} alt="icon-verified" className={image2} />
      </div>
      {/* <ButtonTwitter button="button" Tweet="Follow" /> */}
    </div>
  );
}
