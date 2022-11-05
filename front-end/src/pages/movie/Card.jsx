import React from "react";
import CardItem from "./CardItem";
//import { movieData } from "./Data";

const Card = (props) => {
  return (
    <div className="cardContainer container grid">
      {props.output.map((item) => {
        return <CardItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Card;
