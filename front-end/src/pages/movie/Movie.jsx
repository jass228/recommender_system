import React from "react";
import "./movie.css";
import { NavBar, Research } from "../../component";
import BgImg from "../../assets/images/movieBg.jpg";
import Card from "./Card";

const Movie = () => {
  return (
    <>
      <NavBar />
      <div className="movie container section" id="movie">
        <Research backgroundImg={BgImg} titleString="Movie title..." />
        <Card />
      </div>
    </>
  );
};

export default Movie;
