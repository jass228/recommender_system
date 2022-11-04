import React from "react";
import "./movie.css";
import { NavBar, Research } from "../../component";

const Movie = () => {
  return (
    <>
      <NavBar />
      <div className="movie container section" id="movie">
        <Research />
      </div>
    </>
  );
};

export default Movie;
