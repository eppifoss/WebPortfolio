import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { CircularLoader } from '@dhis2/ui-core';


import {MediaCard} from '../MediaCard';

export const MediaList = ({movieList}) => {

  if (!movieList) {
    return <CircularLoader />;
  }

  return (
    <div className='movie-list'>
      { movieList.map( movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} >
          <MediaCard  title={movie.title} description={movie.overview} bg={movie.backdrop_path}/>
        </Link>
      ))}
    </div>
  );
}
