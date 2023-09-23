import React from "react";
import Post from "../Post/Post";
import "./Right.css";
import data from "../../data";

const Right = () => {
  return (
    <div className="right">
      {data.map(({ img, name, content }) => (
        <>
          <Post url={img} tag={name} body={content} />
        </>
      ))}
    </div>
  );
};

export default Right;
