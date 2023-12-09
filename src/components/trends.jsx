import React from "react";
import TrendSquid from "./trend-squid";
import ShowMore from "./show-more";
import TweetSitle from "./tweet-title";

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
        <TweetSitle
          image={"src/images/image 1.png"}
          texte1={"The New York Times"}
          texte2={"@ CNN"}
          image2={"verified"}
        />

        <TweetSitle
          image={"src/icons/tweet-profile-photo.png"}
          texte1={"CNN"}
          texte2={"@ CNN"}
          image2={"verified"}
        />

        <TweetSitle
          image={"src/icons/image 1.png"}
          texte1={"Twitter"}
          texte2={"@ Twitter"}
          image2={"verified"}
        />

        <ShowMore />
      </div>
      <p>terms of service Privacy Police cookie police</p>
      <p>
        imprint Ads info More{" "}
        <img src="src/icons/More-2.png" alt="icon-More2" />
        2021 twitter,inc
      </p>
    </div>
  );
}
export default Trends;
