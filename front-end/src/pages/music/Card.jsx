import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { musicData } from "./Data";

const Card = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    setMusics(musicData);
  }, []);
  return (
    <div className="cardMusicContainer container grid">
      {musics.map((item) => {
        return (
          <>
            <CardItem item={item} key={item.id} />
            <div className="musicLine"></div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
