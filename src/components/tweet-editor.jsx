import React from "react";
import Avatar from "./avatar";
import { useState } from "react";
import ButtonTwitter from "./button-tweet";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TweetContext } from "../context/user-context";
import { useContext } from "react";

function TweetEditor() {
  const context = useContext(TweetContext);

  const { tweetUser, setTweetUser } = context.tweets;

  const [formData, setFormDate] = useState({
    tweetInput: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log(data);
    const ownUser = [...tweetUser];
    const userCharacteristic = {
      avatar: "./public/icons/profile-photo.png",
      tweetAuthor: "joe kangoma",
      tweetVeried: "/public/icons/verified.png",
      tweetDetail: "@joe.. ",
      slug: "joe",

      tweetTime: "à l'instantq",
      tweetText: `${data.tweetInput}`,
      tweetImage: null,
      tweetJaime: "Jaime",
      tweetMessage: "Message",
      tweetRetweet: "Retweet",
      tweetShare: "Share",
    };

    ownUser.unshift(userCharacteristic);

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
            name="tweetInput"
            {...register("tweetInput", {
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
          {errors.tweetInput && (
            <span style={{ color: "red" }}>{errors.tweetInput.message}</span>
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
