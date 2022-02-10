import React from 'react';

import './GameHistory.scss';

const GameHistory = ({ gameHistory, moveToMoveNumber, currentMove }) => {
  return (
    <div className="GameHistory-wrapper">
      <ul className="GameHistory">
        {gameHistory.map((_, moveNumber) => (
          <li key={moveNumber}>
            <button
              className={`btn-move ${
                currentMove === moveNumber ? 'activeButton' : ''
              }`}
              onClick={() => moveToMoveNumber(moveNumber)}
            >
              {moveNumber === 0
                ? 'Go to game start'
                : `Go to move number ${moveNumber}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
