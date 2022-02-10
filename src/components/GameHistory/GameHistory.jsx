import React from 'react';

import './GameHistory.scss';

const GameHistory = ({ gameHistory, moveToMoveNumber, currentMove }) => {
  return (
    <ul>
      {gameHistory.map((_, moveNumber) => (
        <li key={moveNumber}>
          <button
            className={currentMove === moveNumber && 'activeButton'}
            onClick={() => moveToMoveNumber(moveNumber)}
          >
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
