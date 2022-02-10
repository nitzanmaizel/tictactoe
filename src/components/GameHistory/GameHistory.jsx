import React from 'react';

const GameHistory = ({ gameHistory }) => {
  return (
    <ul>
      {gameHistory.map((_, move) => (
        <li key={move}>
          <button>
            {move === 0 ? 'Go to game start' : `Go to move number ${move}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GameHistory;
