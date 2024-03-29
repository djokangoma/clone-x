import React from "react";
import TrendSquid from "./trend-squid";
import ShowMore from "./show-more";
import TweetSitle from "./tweet-title";
import TweetAvatar from "./tweet-avatar";
import Settings from "../icons/Settings.png";
import AvatarNewyork from "../images/image-1.png";
import AvatarCNN from "../icons/Tweet-Profile-Photo.png";
import AvatarTwitter from "../icons/image 1.png";
import More2 from "../icons/More-2.png";
import ButtonTwitter from "./button-tweet";
import { Search } from "../icons/index";

function Trends() {
  return (
    <div className="trends">
      <div className="absolute pl-4 pt-2">
        <img src={Search} alt="Search" className="search" />
      </div>
      <input
        type="text"
        placeholder=" search twitter "
        className="btn-searchTwitter"
      />

      <div className="trendForYou">
        <h5 className="trend-setting">
          Trends for you <img src={Settings} alt="icon-setting" />
        </h5>
        <TrendSquid />
        <TrendSquid />
        <TrendSquid />
        <TrendSquid />
        <ShowMore />
      </div>

      <div className="whoToFollow">
        <h3 className="md:font-bold">who to Follow</h3>
        <div className=" flex justify-between flex-row mt-2 mb-2">
          <div className="flex items-center">
            <TweetAvatar image={AvatarNewyork} />
            <TweetSitle
              texte1={"The New York Times"}
              texte2={"@nytimes 2h"}
              image2={"verified"}
            />
          </div>
          <ButtonTwitter button="buttonFollow" Tweet="Follow" />
        </div>

        <div className=" flex justify-between flex-row mt-2 mb-2">
          <div className="flex items-center ">
            <TweetAvatar image={AvatarCNN} />
            <TweetSitle texte1={"CNN"} texte2={"@ CNN"} image2={"verified"} />
          </div>
          <ButtonTwitter button="buttonFollow" Tweet="Follow" />
        </div>

        <div className="flex justify-between flex-row mt-2 mb-2">
          <div className="flex items-center ">
            <TweetAvatar image={AvatarTwitter} />
            <TweetSitle
              texte1={"Twitter"}
              texte2={"@ Twitter"}
              image2={"verified"}
            />
          </div>
          <ButtonTwitter button="buttonFollow" Tweet="Follow" />
        </div>

        <ShowMore />

        <div className="box-paragraphe">
          <p>terms of service Privacy Police cookie police</p>
          <p>
            imprint Ads info More{" "}
            <img src={More2} alt="icon-More2" className="last-image" />
            2021 twitter,inc
          </p>
        </div>
      </div>
    </div>
  );
}
export default Trends;
