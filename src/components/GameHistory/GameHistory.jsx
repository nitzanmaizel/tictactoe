import React from 'react';

const GameHistory = ({ gameHistory }) => {
  return (
    <ul>
      {gameHistory.map((_, move) => (
        <li key={move}>
          <button>{move}</button>
        </li>
      ))}
    </ul>
  );
};

export default GameHistory;
