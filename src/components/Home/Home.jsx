import React from "react";
import "./Home.css";
import Left from "../Left/Left";
import Right from "../Right/Right";
import Form from "../Form/Form";

const Home = () => {
  return (
    <div className="box">
      <div className="main1"></div>
      <div className="main2">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Home;
