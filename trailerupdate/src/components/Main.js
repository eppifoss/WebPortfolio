import React from 'react';

import {Route} from 'react-router-dom';

import {Movies} from './Movies';
import { MovieDetails } from './MovieDetails';

export const Main = () => {

  return (
    <>
      <Route path='/' exact component={Movies} />
      <Route path='/movie' exact component={Movies} />
      <Route path='/movie/:id' exact component={MovieDetails} />
    </>
  );
}
