import React, {useState} from 'react';

import './App.css';

import {FactBox} from './components/FactBox';
import {NumberGrid} from './components/NumberGrid';

function App() {

  const [selectedNumber, setNumber] = useState(null)

  return (
    <div>
      <h1 className="heading-title">Fact Box </h1>
      <FactBox number={selectedNumber}/>
      <NumberGrid setNumber={setNumber}/>
    </div>
  );

}

export default App;
