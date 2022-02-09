import React from 'react';
import Square from '../Square/Square';

import './Board.scss';

const Board = ({ boardState = [], onClick }) => {
  const renderBoard = boardState => {
    return boardState.map((value, index) => (
      <Square key={index} value={value} onClick={() => onClick(index)} />
    ));
  };

  return (
    <div className="board">
      {boardState.length === 9 ? (
        renderBoard(boardState)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Board;
