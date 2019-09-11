import React from 'react';
import './style.css';

import {NumberButton} from '../NumberButton';

const numbers = [...Array(99).keys()];

export const NumberGrid = ({setNumber}) => (
    <div className="number-grid">
      {numbers.map( x => (
          <NumberButton key={x} number={x+1} setNumber={setNumber} />
      ))}
    </div>
);
