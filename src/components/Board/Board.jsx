import React from 'react';
import Square from '../Square/Square';

import './Board.scss';

const Board = ({ boardState = [], onClick, winningSquares }) => {
  const renderBoard = boardState => {
    return boardState.map((value, index) => {
      const isWinningSquares = winningSquares.includes(index);

      return (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinningSquare={isWinningSquares}
        />
      );
    });
  };

  return <div className="board">{renderBoard(boardState)}</div>;
};

export default Board;
