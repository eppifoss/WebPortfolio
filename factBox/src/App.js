

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/Menu';
import {Main} from './components/Main';

function App() {

  return (
    <Router>
      <Route render={ componentProps => <Menu/> }  />
      <Main />
    </Router>
  );

}

export default App;
