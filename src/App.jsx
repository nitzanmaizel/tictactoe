import React, { useState } from 'react';
import Board from './components/Board/Board';

import './styles/root.scss';
import { calculateWinner } from './utils/CalculateWinner';

const App = () => {
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const massage = winner
    ? `Winner is ${winner}`
    : `Next Player Is ${current.isXNext ? 'X' : '0'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) return;

    setHistory(preBoardValue => {
      const last = preBoardValue[preBoardValue.length - 1];

      const newBoard = last.board.map((square, squarePosition) => {
        if (squarePosition === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return preBoardValue.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(currentMove + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{massage}</h2>
      <Board boardState={current.board} onClick={handleSquareClick} />
    </div>
  );
};

export default App;
