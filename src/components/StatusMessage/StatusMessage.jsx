import React from 'react';

const StatusMessage = ({ winner }) => {
  return <h2>{winner && `Winner is ${winner}`}</h2>;
};

export default StatusMessage;
