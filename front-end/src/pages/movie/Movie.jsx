import React, { useState } from "react";
import "./movie.css";
import { NavBar, Research } from "../../component";
import BgImg from "../../assets/images/movieBg.jpg";
import Card from "./Card";
import axios from "axios";

const Movie = () => {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const endpoint = process.env.REACT_APP_ENDPOINTS;

  const [movie, setMovie] = useState([]);
  const [recommender, setRecommender] = useState();
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");

  const isEnabled =
    title !== undefined &&
    number !== undefined &&
    title !== "" &&
    number !== "";

  const generate = async (prompt, num) => {
    const result = await axios.get(`${endpoint}/?prompt=${prompt}&num=${num}`);

    setRecommender(result.data);

    const resData = [];

    if (result.data !== "No movies found. Please check your input") {
      for (const i in result.data) {
        const title = result.data[i].title;
        const year = result.data[i].years;

        const resTMDB = await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&year=${year}`
          )
          .catch((error) => {
            console.log("ERROR:: ", error.response.data);
          });

        if (resTMDB.data.results.length === 0) {
          const arr = title.split(" ");

          for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }

          const str2 = arr.join(" ");

          resData.push({
            id: result.data[i].id,
            image: "",
            title: str2,
          });
        } else {
          resData.push({
            id: resTMDB.data.results[0].id,
            image: resTMDB.data.results[0].poster_path,
            title: resTMDB.data.results[0].title,
          });
        }
      }

      setMovie(resData);
    }
  };

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
