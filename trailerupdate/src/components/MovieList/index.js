import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { Card, CircularLoader } from '@dhis2/ui-core';
import * as api from '../api';

import {MovieCard} from '../MovieCard';

export const MovieList = ({movieList}) => {

  if (!movieList) {
    return <CircularLoader />;
  }

  return (
    <div className='movie-list'>
      { movieList.map( movie => (
        <Link to={`/movie/${movie.id}`} >
          <MovieCard title={movie.title} description={movie.overview} bg={movie.backdrop_path}/>
        </Link>
      ))}
    </div>
  );
}
