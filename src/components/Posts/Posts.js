import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import {
  AccountCircle,
  ChatBubbleOutline,
  NearMe,
  ThumbUp,
} from "@mui/icons-material";
const Posts = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="posts">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topinfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toDateString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
        </div>
      </div>
    </div>
  );
};

export default Posts;
