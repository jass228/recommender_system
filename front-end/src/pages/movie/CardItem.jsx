import React from "react";

const CardItem = ({ item }) => {
  return (
    <div className="movieCard" key={item.id}>
      <img src={item.image} alt="movie-img" className="movieCardImg" />
      <h3 className="movieTitleItem">{item.title}</h3>
    </div>
  );
};

export default CardItem;
