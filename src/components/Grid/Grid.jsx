import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

const Grid = ({ numberOfCards }) => {
   const [board, setBoard] = useState(Array(numberOfCards).fill(""));

   return (
      <div className="grid">
         {board.map((e, i) => (
            <Card key={i} />
         ))}
      </div>
   );
};

export default Grid;
