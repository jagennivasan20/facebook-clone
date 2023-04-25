import React from "react";
import "./widget.css";
const Widget = () => {
  return (
    <div className="widget">
      <iframe
        width="400"
        height="500"
        src="https://www.youtube.com/embed/QeOX7y_Olr0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Widget;
