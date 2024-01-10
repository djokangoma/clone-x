import React from "react";
import AvatarImg from "../images/profile-photo.png";

export default function Avatar({ image }) {
  return (
    <div>
      <img src={AvatarImg} className={image} alt="avatar" />
    </div>
  );
}
