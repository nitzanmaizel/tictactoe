import React, { useState } from 'react';
import Board from './components/Board/Board';
import GameHistory from './components/GameHistory/GameHistory';

import './styles/root.scss';
import { calculateWinner } from './utils/CalculateWinner';

const App = () => {
  const [gameHistory, setGameHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const currentGame = gameHistory[currentMove];

  const winner = calculateWinner(currentGame.board);
  const massage = winner
    ? `Winner is ${winner}`
    : `Next Player Is ${currentGame.isXNext ? 'X' : '0'}`;

  const handleSquareClick = position => {
    if (currentGame.board[position] || winner) return;

    setGameHistory(preBoardValue => {
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

  const moveToMoveNumber = targetMove => setCurrentMove(targetMove);

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{massage}</h2>
      <Board boardState={currentGame.board} onClick={handleSquareClick} />
      <GameHistory
        gameHistory={gameHistory}
        moveToMoveNumber={moveToMoveNumber}
        currentMove={currentMove}
      />
    </div>
  );
};

export default App;
