import React, { useState } from 'react';
import Board from './components/Board/Board';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = position => {
    if (board[position]) return;

    setBoard(preBoardValue => {
      return preBoardValue.map((square, squarePosition) => {
        if (squarePosition === position) {
          return isXNext ? 'X' : '0';
        }

        return square;
      });
    });

    setIsXNext(!isXNext);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board boardState={board} onClick={handleSquareClick} />
    </div>
  );
};

export default App;
