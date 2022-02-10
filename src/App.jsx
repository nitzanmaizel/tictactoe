import React, { useState } from 'react';

import Board from './components/Board/Board';
import GameHistory from './components/GameHistory/GameHistory';
import StatusMessage from './components/StatusMessage/StatusMessage';

import { calculateWinner } from './utils/CalculateWinner';

import './styles/root.scss';

const App = () => {
  const [gameHistory, setGameHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentGame = gameHistory[currentMove];

  const { winner, winningSquares } = calculateWinner(currentGame.board);

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
      <StatusMessage winner={winner} currentGame={currentGame} />
      <Board
        boardState={currentGame.board}
        onClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <GameHistory
        gameHistory={gameHistory}
        moveToMoveNumber={moveToMoveNumber}
        currentMove={currentMove}
      />
    </div>
  );
};

export default App;
