import React from 'react';

import './StatusMessage.scss';

const StatusMessage = ({ winner, currentGame }) => {
  const noMovesLeft = currentGame.board.every(move => move !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          <span>Winner is </span>
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          <span>Next player is </span>
          <span className={currentGame.isXNext ? 'text-green' : 'text-orange'}>
            {currentGame.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X </span>
          <span>and </span>
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
