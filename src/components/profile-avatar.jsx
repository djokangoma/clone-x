import React from "react";
import AvatarImg from "../images/profile-photo.png";

export default function ProfileAvatar({ style }) {
  return (
    <div>
      <img src={AvatarImg} className={style} alt="avatar" />
    </div>
  );
}
