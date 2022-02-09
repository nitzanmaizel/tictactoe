import React, { useState } from 'react';
import Square from '../Square/Square';

import './Board.scss';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = position => {
    if (board[position]) return;

    setBoard(preBoardValue => {
      return preBoardValue.map((square, squarePosition) => {
        if (squarePosition === position) {
          return isXNext ? 'X' : '0';
        }

        return square;
      });
    });

    setIsXNext(!isXNext);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  const renderBoard = () => {
    return board.map((value, index) => renderSquare(index));
  };

  return <div className="board">{renderBoard()}</div>;
};

export default Board;
