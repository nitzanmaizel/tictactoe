import React from 'react';

const StatusMessage = ({ winner, currentGame }) => {
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && `Next Player Is ${currentGame.isXNext ? 'X' : '0'}`}
    </h2>
  );
};

export default StatusMessage;
