import React from "react";

const CardItem = ({ item }) => {
  return (
    <div className="musicCard">
      <img src={item.image} alt="" className="musicCardImg" />
      <div className="musicText">
        <h3 className="musicTitleItem">{item.title}</h3>
        <span className="musicArtist">{item.artist}</span>
      </div>
      <p className="musicTime">{item.time}</p>
    </div>
  );
};

export default CardItem;
