import React, { useState } from "react";
import "./movie.css";
import { NavBar, Research } from "../../component";
import BgImg from "../../assets/images/movieBg.jpg";
import Card from "./Card";
import axios from "axios";

const Movie = () => {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

  const [movie, setMovie] = useState([]);
  const [recommender, setRecommender] = useState();
  const [title, setTitle] = useState();
  const [number, setNumber] = useState();
  const [click, setClick] = useState(false);

  const isEnabled =
    title !== undefined &&
    number !== undefined &&
    title !== "" &&
    number !== "";

  const generate = async (prompt, num) => {
    const result = await axios.get(
      `http://127.0.0.1:8000/?prompt=${prompt}&num=${num}`
    );

    setRecommender(result.data);

    const resData = [];

    for (const i in result.data) {
      const title = result.data[i].title;
      const year = result.data[i].years;

      const resTMDB = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&year=${year}`
      );

      resData.push({
        id: resTMDB.data.results[0].id,
        image: resTMDB.data.results[0].poster_path,
        title: resTMDB.data.results[0].title,
      });
    }

    setMovie(resData);
    setClick(true);
  };

  console.log(click);
  return (
    <>
      <NavBar />
      <div className="movie container section" id="movie">
        <Research
          backgroundImg={BgImg}
          titleString="Movie title..."
          onClickMusic={(e) => generate(title, number)}
          titleValue={title}
          numberValue={number}
          onChangeTitle={(e) => setTitle(e.target.value)}
          onChangeNumber={(e) => setNumber(e.target.value)}
          enabledButton={isEnabled}
        />
        {/*<div>
          <h1>Test</h1>
          {movie ? (
            movie === "No movies found. Please check your input" ? (
              <div>
                <p>Sorry we don't have this movie on the database</p>
                <p>Try another movie !</p>
              </div>
            ) : (
              movie.map((item) => {
                return (
                  <div key={item.id}>
                    <p>{item.title}</p>
                  </div>
                );
              })
            )
          ) : null}
            </div>*/}
        {recommender ? (
          recommender === "No movies found. Please check your input" ? (
            <div>
              <p>Sorry we don't have this movie on the database</p>
              <p>Try another movie !</p>
            </div>
          ) : !isEnabled ? null : (
            <div>
              <h3 className="titeBefore">
                The top {number} movies similar to {title}
              </h3>
              <Card output={movie} />
            </div>
          )
        ) : null}
      </div>
    </>
  );
};

export default Movie;
