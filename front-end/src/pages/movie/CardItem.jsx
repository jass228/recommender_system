import React from "react";
import DefaultImg from "../../assets/images/defaultImg.jpg";

const CardItem = ({ item }) => {
  return (
    <div className="movieCard" key={item.id}>
      {item.image === "" ? (
        <img src={DefaultImg} alt="movie-img" className="movieCardImg" />
      ) : (
        <img
          src={`http://image.tmdb.org/t/p/w185${item.image}`}
          alt="movie-img"
          className="movieCardImg"
          onError={(e) => (e.target.src = DefaultImg)}
        />
      )}

      <h3 className="movieTitleItem">{item.title}</h3>
    </div>
  );
};

export default CardItem;
