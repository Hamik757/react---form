import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ avatar, name, bio }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

export default ProfileCard;