import React from 'react';
import Square from '../Square/Square';

import './Board.scss';

const Board = ({ boardState, onClick }) => {
  const renderSquare = (squareValue, position) => {
    return (
      <Square
        key={position}
        value={squareValue}
        onClick={() => onClick(position)}
      />
    );
  };

  const renderBoard = boardState => {
    return boardState.map((value, index) => renderSquare(value, index));
  };

  return <div className="board">{renderBoard(boardState)}</div>;
};

export default Board;
