import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";
const Story = ({ image, title, profileSrc }) => {
  return (
    <div className="Story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
