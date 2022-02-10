import React from 'react';

const GameHistory = ({ gameHistory, moveToMoveNumber }) => {
  return (
    <ul>
      {gameHistory.map((_, moveNumber) => (
        <li key={moveNumber}>
          <button onClick={() => moveToMoveNumber(moveNumber)}>
            {moveNumber === 0
              ? 'Go to game start'
              : `Go to move number ${moveNumber}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GameHistory;
