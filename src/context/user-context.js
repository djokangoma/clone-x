import { createContext } from "react";

export const TweetContext = createContext({
  islogged: false,
  tweets: [],
});

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
