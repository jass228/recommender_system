import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { movieData } from "./Data";

const Card = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  return (
    <div className="cardContainer container grid">
      {movies.map((item) => {
        return <CardItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Card;
