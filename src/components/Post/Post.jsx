import React from "react";
import images from "../../data";
import "./Post.css";

const post = (props) => {
  const { url, tag, body } = props;
  return (
    <div className="post">
      <div className="inner1">
        <img src={url} />
        <span className="name">{tag}</span>
      </div>
      <div className="inner2">
        <span>{body}</span>
      </div>
    </div>
  );
};

export default post;
