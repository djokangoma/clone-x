import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./components/sidebar.jsx";
import Trends from "./components/trends.jsx";
import("./style/reset.css");
import("./style/App.css");
import dataJson from "./data/initialData.json";
import { TweetContext } from "./context/user-context.js";

export default function App() {
  // const listTweets = dataJson.tweets;
  // console.log(listTweets);
  return (
    // <TweetContext.Provider value={{ islogged: true, tweets: listTweets }}>
    <Layout>
      <Sidebar />
      <Home />
      <Trends />
    </Layout>
    // </TweetContext.Provider>
  );
}
