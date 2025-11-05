import React from "react"; 
import type { UserProps } from "./type";


export const User: React.FC<UserProps> =({title, username, age, status, handleClick})=>{
    return(
        <div>
            <h1>Title: {title}</h1>
            <p>User name: {username}</p>
            <p>Age: {age}</p>
            <p>Status: {status}</p>
            <button onClick={handleClick}>Enter 
            </button>
        </div>
    )
}