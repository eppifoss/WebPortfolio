import React from 'react';
import {Route} from 'react-router-dom';
import {Media} from './Media';
import { MovieDetails } from './MovieDetails';

export const Main = () => {
  return (
    <>
      <Route path='/' exact component={Media} />
      <Route path='/movie' exact component={Media} />
      <Route path='/movie/:id' exact component={MovieDetails} />
    </>
  );
}
