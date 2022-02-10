import React from 'react';

const StatusMessage = ({ winner, currentGame }) => {
  const noMovesLeft = currentGame.board.every(move => move !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player Is ${currentGame.isXNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
