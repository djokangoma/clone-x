import TwitterImg from "../icons/image 1.png";
import TweetAvatarRouge from "../icons/Tweet-Profile-Photo.png";
import TweetAvatarBlack from "../images/image-1.png";
import Jaime from "../icons/React.png";
import Message from "../icons/Reply.png";
import Retweet from "../icons/Retweet.png";
import Share from "../icons/Share.png";
import flower from "../images/tweet-image.png";
import Certified from "../icons/Verified.png";

const tweetData = [
  {
    id: 1,
    avatar: TweetAvatarRouge,
    tweetAuthor: "CNN",
    tweetVeried: Certified,
    tweetDetail: "@CNN",
    tweetTime: "7m",
    tweetText:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    tweetImage: null,
    tweetJaime: Jaime,
    tweetMessage: Message,
    tweetRetweet: Retweet,
    tweetShare: Share,
  },
  {
    id: 2,
    avatar: TweetAvatarBlack,
    tweetAuthor: "The New York Times ",
    tweetVeried: Certified,
    tweetDetail: "@nytimes",
    tweetTime: "2h",
    tweetText:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    tweetImage: flower,
    tweetJaime: Jaime,
    tweetMessage: Message,
    tweetRetweet: Retweet,
    tweetShare: Share,
  },
  {
    id: 3,
    avatar: TwitterImg,
    tweetAuthor: "Twitter",
    tweetVeried: Certified,
    tweetDetail: "@twitter",
    tweetTime: "Oct 29",
    tweetText: "BIG NEWS lol jk still Twitter",
    tweetImage: null,
    tweetJaime: Jaime,
    tweetMessage: Message,
    tweetRetweet: Retweet,
    tweetShare: Share,
  },
  {
    id: 4,
    avatar: TwitterImg,
    tweetAuthor: "Twitter",
    tweetVeried: Certified,
    tweetDetail: "@twitter",
    tweetTime: "Oct 29",
    tweetText: "hello literally everyone",
    tweetImage: null,
    tweetJaime: Jaime,
    tweetMessage: Message,
    tweetRetweet: Retweet,
    tweetShare: Share,
  },
  {
    id: 5,
    avatar: TwitterImg,
    tweetAuthor: "Twitter",
    tweetVeried: Certified,
    tweetDetail: "@twitter",
    tweetTime: "Oct 4",
    tweetText: "hello literally everyone",
    tweetImage: null,
    tweetJaime: Jaime,
    tweetMessage: Message,
    tweetRetweet: Retweet,
    tweetShare: Share,
  },
];

export default tweetData;
