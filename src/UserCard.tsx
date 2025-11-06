import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isOnline }) => {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
        width: "250px",
        margin: "10px auto",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
};

export default UserCard;