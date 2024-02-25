import React from "react";
import Avatar from "./avatar";
import { useState } from "react";
import ButtonTwitter from "./button-tweet";
import { Link } from "react-router-dom";
import data from "../data/initialData.json";
import { useForm } from "react-hook-form";

function TweetEditor() {
  const copyarray = [...data.tweets];
  const [tweetUser, setTweetUser] = useState("copyarray");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: tweetUser });

  const onSubmit = (data) => {
    Event.preventDefault();
    const ownUser = [...tweetUser];
    const userCharacteristic = {
      avatar: "./public/icons/profile-photo.png",
      tweetAuthor: "joe kangoma",
      tweetVeried: "/public/icons/verified.png",
      tweetDetail: "@joe.. ",
      slug: "joe",

      tweetTime: "1m",
      tweetText: "",
      tweetImage: null,
      tweetJaime: "Jaime",
      tweetMessage: "Message",
      tweetRetweet: "Retweet",
      tweetShare: "Share",
    };

    ownUser.push(userCharacteristic);

    setTweetUser(ownUser);
  };

  return (
    <div className="tweet-editor">
      <Link to="/profile">
        <Avatar />
      </Link>

      <form className="tweet-editor-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="tweet-editor-input"
            placeholder="what's happening?"
            name="name"
            {...register("name", {
              required: "ce champ est obligatoire",
              minLength: {
                value: 1,
                message: "le texte doit contenir au moins un caractere",
              },
              maxLength: {
                value: 180,
                message:
                  "le texte ne doit pas contenir plus de  120 caracteres",
              },
            })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.namemessage}</span>
          )}
        </div>

        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="src/icons/Vector.png" />
            <img src="src/icons/Gif.png" />
            <img src="src/icons/Poll.png" />
            <img src="src/icons/Group.png" />
            <img src="src/icons/Schedule.png" />
          </div>
          <ButtonTwitter button="button" Tweet={"Tweet"} />
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;
