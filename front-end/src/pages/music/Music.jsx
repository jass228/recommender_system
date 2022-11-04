import React from "react";
import "./music.css";
import { NavBar, Research } from "../../component";
import BgImg from "../../assets/images/musicBg.jpeg";
import Card from "./Card";

const Music = () => {
  return (
    <>
      <NavBar />
      <div className="music container section" id="music">
        <Research backgroundImg={BgImg} titleString="Music title..." />
        <Card />
      </div>
    </>
  );
};

export default Music;
