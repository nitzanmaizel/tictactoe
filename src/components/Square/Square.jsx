import React from 'react';

import './Square.scss';

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Square;
