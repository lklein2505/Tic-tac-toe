import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner, isBoardFull } from '../index';
import Restart from './Restart';

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const nextSymbol = isXNext ? 'X' : 'O';

  const winner = calculateWinner(squares);

  const handleClick = i => {

    if (squares[i] != null || winner != null)
      return;

    const nextSquares = squares.slice();
    nextSquares[i] = nextSymbol;
    setSquares(nextSquares); 
    setIsXNext(!isXNext);   
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null))
    setIsXNext(true)    
  }

  function getStatus() {
    if (winner)
      return "Winner: " + winner;
    else if (isBoardFull(squares))
      return "Draw!";
    else 
      return "Next player: " + nextSymbol;
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {handleClick(i)}} 
      />
    );
  }

  function renderRestartButton() {
    return (
      <Restart 
        onClick={() => {handleRestart()}}
      />
    );
  }

  return (
    <div className='container'>
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
         </div>
         <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
         </div>
         <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="game-info">{getStatus()}</div>
          <div className="restart-button">{renderRestartButton()}</div>
        </div>   
      </div>
    </div>  
    );
  }

export default Board;