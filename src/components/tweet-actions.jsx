import TweetAction from "./tweet-action";
import Jaime from "../icons/React.png";
import Message from "../icons/Reply.png";
import Retweet from "../icons/Retweet.png";
import Share from "../icons/Share.png";

export default function TweetActions() {
  return (
    <div className="tweet-actions">
      <TweetAction icon={Message} value="0" customClassName="messageIcon" />
      <TweetAction icon={Retweet} value="10" customClassName="retweetIcon" />
      <TweetAction icon={Jaime} value="0" customClassName="jaimeIcon" />
      <TweetAction icon={Share} customClassName="sharetIcon" />
    </div>
  );
}
