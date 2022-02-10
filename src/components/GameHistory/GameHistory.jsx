import React from 'react';

const GameHistory = ({ gameHistory }) => {
  return (
    <ul>
      {gameHistory.map((_, index) => {
        <li>
          <button>{index}</button>
        </li>;
      })}
    </ul>
  );
};

export default GameHistory;
