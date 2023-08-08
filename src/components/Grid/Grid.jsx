import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";

const Grid = ({ numberOfCards }) => {
   const [board, setBoard] = useState(Array(numberOfCards).fill(""));
   const [turn, setTurn] = useState(true); // true => O, false=> X
   const [winner, setWinner] = useState(null);
   const [x, setX] = useState(0);
   const [o, setO] = useState(0);
   const play = (index) => {
      if (turn == true) {
         board[index] = "O";
      } else {
         board[index] = "X";
      }
      const win = isWinner(board, turn ? "O" : "X");
      if (win) {
         setWinner(win);
         winnerCount(win);
      }
      setBoard([...board]);
      setTurn(!turn);
   };
   const winnerCount = (win) => {
      if (win == "O") {
         setO(o + 1);
      } else {
         setX(x + 1);
      }
   };
   console.log("winner", winner);
   const reset = () => {
      setBoard(Array(numberOfCards).fill(""));
      setWinner(null);
      setTurn(true);
   };

   return (
      <div className="main">
         <div className="Left">
            {winner && (
               <>
                  <h1 className="winnerHighlight">Winner is {winner}</h1>
               </>
            )}
            <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>

            <h1 className="turn-highlight">
               Winner count:- X: {x} O: {o}
            </h1>
            <button className="reset" onClick={() => reset()}>
               {" "}
               Reset game
            </button>
         </div>
         <div className="gridWrapper">
            <div className="grid">
               {board.map((e, i) => (
                  <Card
                     key={i}
                     gameEnd={winner ? true : false}
                     onPlay={play}
                     player={e}
                     index={i}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Grid;
