import Icon from "../Icon/Icon";
import React from "react";
import "./Card.css";

const Card = ({ player }) => {
   let icon = <Icon />;
   if (player == "X") {
      icon = <Icon name="cross" />;
   } else if (player == "O") {
      icon = <Icon name="circle" />;
   }
   return <div className="card">{icon}</div>;
};

export default Card;
