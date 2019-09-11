import React from 'react' ;
import './style.css';
import {Button} from '@dhis2/ui-core';

export const NumberButton = ({number, setNumber}) => {

  const onClick = () => {
    setNumber(number);
  }

  return (
    <Button onClick={onClick} className='number-button' >
      {number}
    </Button>
  );
}
