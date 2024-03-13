import React from "react";
import Avatar from "./avatar";
import { useState } from "react";
import ButtonTwitter from "./button-tweet";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TweetContext } from "../context/user-context";
import { useContext } from "react";
import axios from "axios";

function TweetEditor() {
  const context = useContext(TweetContext);

  // const { tweetUser, setTweetUser } = context.tweets;
  const { datas, setDatas } = context.tweets;

  const [formData, setFormDate] = useState({
    tweetInput: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userCharacteristic = {
      avatar: "./public/icons/profile-photo.png",
      tweetAuthor: "joe kangoma",
      tweetVeried: "/public/icons/verified.png",
      tweetDetail: "@joe.. ",
      slug: "joe",
      tweetTime: "à l'instant",
      tweetText: `${data.tweetInput}`,
      tweetImage: null,
      tweetJaime: "./public/icons/React.png",
      tweetMessage: "./public/icons/Reply.png",
      tweetRetweet: "./public/icons/Retweet.png",
      tweetShare: "./public/icons/Share.png",
    };
    try {
      const response = await axios.post(
        "https://65e5ab22d7f0758a76e700d1.mockapi.io/clonex/tweets",
        userCharacteristic
      );

      const copyData = [...datas];
      copyData.push(userCharacteristic);

      setDatas(copyData);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  console.log(datas);
  // const ownUser = [...tweetUser];

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
                  "le texte ne doit pas contenir plus de  180 caracteres",
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
