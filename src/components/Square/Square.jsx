import React from 'react';

import './Square.scss';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinningSquare ? 'winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
