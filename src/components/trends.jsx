import React from "react";
import TrendSquid from "./trend-squid";
import ShowMore from "./show-more";
import TweetSitle from "./tweet-title";
import TweetAvatar from "./tweet-avatar";

function Trends() {
  return (
    <div className="trends">
      <input
        type="text"
        placeholder=" search twitter"
        className="btn-searchTwitter"
      />

      <div className="trendForYou">
        <h5 className="trend-setting">
          Trends for you <img src="src/icons/Settings.png" alt="icon-setting" />
        </h5>
        <TrendSquid />
        <TrendSquid />
        <TrendSquid />
        <TrendSquid />
        <ShowMore />
      </div>

      <div className="whoToFollow">
        <h3>who to Follow</h3>

        <div className="parent-tweetTitle">
          <TweetAvatar image="src/images/image 1.png" />
          <TweetSitle
            texte1={"The New York Times"}
            texte2={"@mytimes 2h"}
            image2={"verified"}
          />
        </div>

        <div className="parent-tweetTitle">
          <TweetAvatar image="src/icons/Tweet-Profile-Photo.png" />
          <TweetSitle texte1={"CNN"} texte2={"@ CNN"} image2={"verified"} />
        </div>

        <div className="parent-tweetTitle">
          <TweetAvatar image="src/icons/image 1.png" />
          <TweetSitle
            texte1={"Twitter"}
            texte2={"@ Twitter"}
            image2={"verified"}
          />
        </div>

        <ShowMore />
      </div>
      <div className="box-paragraphe">
        <p>terms of service Privacy Police cookie police</p>
        <p>
          imprint Ads info More{" "}
          <img
            src="src/icons/More-2.png"
            alt="icon-More2"
            className="last-image"
          />
          2021 twitter,inc
        </p>
      </div>
    </div>
  );
}
export default Trends;
