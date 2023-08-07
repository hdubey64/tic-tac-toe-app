import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";

const Grid = ({ numberOfCards }) => {
   const [board, setBoard] = useState(Array(numberOfCards).fill(""));
   const [turn, setTurn] = useState(true); // true => O, false=> X
   const [winner, setWinner] = useState(null);

   const play = (index) => {
      if (turn == true) {
         board[index] = "O";
      } else {
         board[index] = "X";
      }
      const win = isWinner(board, turn ? "O" : "X");
      if (win) {
         setWinner(win);
      }
      setBoard([...board]);
      setTurn(!turn);
   };

   const reset = () => {
      setBoard(Array(numberOfCards).fill(""));
      setWinner(null);
      setTurn(true);
   };
   return (
      <div className="gridWrapper">
         {winner && (
            <>
               <h1 className="turn-highlight">Winner is {winner}</h1>
               <button className="reset" onClick={() => reset()}>
                  {" "}
                  Reset game
               </button>
            </>
         )}
         <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
         <div className="grid">
            {board.map((e, i) => (
               <Card key={i} onPlay={play} player={e} index={i} />
            ))}
         </div>
      </div>
   );
};

export default Grid;
