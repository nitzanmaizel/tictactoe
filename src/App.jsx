import React, { useState } from 'react';

import Board from './components/Board/Board';
import GameHistory from './components/GameHistory/GameHistory';
import StatusMessage from './components/StatusMessage/StatusMessage';

import { calculateWinner } from './utils/CalculateWinner';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [gameHistory, setGameHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const currentGame = gameHistory[currentMove];

  const { winner, winningSquares } = calculateWinner(currentGame.board);

  const handleSquareClick = position => {
    if (
      currentGame.board[position] ||
      winner ||
      gameHistory.length !== currentMove + 1
    )
      return;

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

  const startNewGame = () => {
    setGameHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} currentGame={currentGame} />
      <Board
        boardState={currentGame.board}
        onClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={() => startNewGame()}
      >
        Start New Game
      </button>
      <h2 className="font-normal">Current Game History</h2>
      <GameHistory
        gameHistory={gameHistory}
        moveToMoveNumber={moveToMoveNumber}
        currentMove={currentMove}
      />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
