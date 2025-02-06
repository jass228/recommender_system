import React from "react";
import "./music.css";
import { NavBar } from "../../component";
import Comingsoon from "../../component/ComingSoon/Comingsoon";

const Music = () => {
  return (
    <>
      <NavBar />
      <div className="music container section" id="music">
        {/*<Research backgroundImg={BgImg} titleString="Music title..." />
        <Card />*/}
        <Comingsoon />
      </div>
    </>
  );
};

export default Music;
