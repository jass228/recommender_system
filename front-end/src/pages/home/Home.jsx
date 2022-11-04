import React from "react";
import "./home.css";
import MusicIcon from "../../assets/images/music.png";
import MovieIcon from "../../assets/images/movie.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container section" id="home">
      <div className="intro">
        <h1 className="homeTitle">Hello 👋</h1>
        <span className="homeSubtitle">
          Welcome to Recommender System Project <br />
          by <span className="myName">#JosephAssouma</span>
        </span>
        <p className="description">
          The goal of this website , is to show you the result of two
          recommender system that I create during the challenge{" "}
          <span className="otherTitle">WeekProject</span> that I gave myself.
        </p>
        <div className="recommenderButton">
          <div className="firstButton btn">
            <Link to="/music-recommender" className="musicButton button">
              Music Recommender
              <img src={MusicIcon} alt="music_icon" className="musicImg" />
            </Link>
          </div>

          <div className="secondButton btn">
            <Link to="movie-recommender" className="movieButton button">
              Movie Recommender
              <img src={MovieIcon} alt="movie_icon" className="movieImg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
