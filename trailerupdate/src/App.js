import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Menu from './components/Menu';
import { Main } from './components/Main';

import {CssReset} from '@dhis2/ui-core';

function App() {
  return (
    <Router>
      <CssReset />
      <Route render={ componentProps => <Menu/> }  />
      <Main />
    </Router>
  );

}

export default App;
