import { createContext } from "react";
import { useContext } from "react";
import Tweet from "../components/tweet";

export const tweetContext = createContext(true, Tweet);
console.log("tweetContext :", tweetContext);

// export default function Tweet({ tweets, children }) {
//   const tweet = useContext(tweetContext);
// }
// {
//   return (
//     <TweetContext.Provider value={tweet}>
//       <article className="tweet">
//         <TweetAvatar />
//         <TweetContent />
//       </article>
//     </TweetContext.Provider>
//   );
// }
