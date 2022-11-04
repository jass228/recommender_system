import React from "react";
import "./music.css";
import { NavBar, Research } from "../../component";

const Music = () => {
  return (
    <>
      <NavBar />
      <div className="music container section" id="music">
        <Research />
      </div>
    </>
  );
};

export default Music;
