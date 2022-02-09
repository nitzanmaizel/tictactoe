import React, { useState } from 'react';
import Board from './components/Board/Board';

import './styles/root.scss';
import { calculateWinner } from './utils/CalculateWinner';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const massage = winner
    ? `Winner is ${winner}`
    : `Next Player Is ${isXNext ? 'X' : '0'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) return;

    setBoard(preBoardValue => {
      return preBoardValue.map((square, squarePosition) => {
        if (squarePosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setIsXNext(!isXNext);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{massage}</h2>
      <Board boardState={board} onClick={handleSquareClick} />
    </div>
  );
};

export default App;
