import { createContext } from "react";

export const TweetContext = createContext({
  islogged: false,
  tweets: [],
});
