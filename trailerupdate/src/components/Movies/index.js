import React from 'react';

import {SearchBar} from  '../SearchBar';
import './style.css';

import {MovieList} from '../MovieList';
import {FilterOptions} from '../FilterOptions';

import * as api from '../api';

function MovieDetails(props) {
  const [movie, setMovie] = React.useState(null);
  React.useEffect(() => {
    api.getMovie(props.match.params.id).then(details => setMovie(details));
  });

  return (
    <div>
      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <h2>{movie.title}</h2>
      </div>
      <div className="movie-details">
        <p className="lead-paragraph">{movie.overview}</p>
        <dl>
          
          <dt>⏱ Runtime</dt>
          <dd>{movie.runtime} minutes</dd>
          <dt>💸 Budget</dt>
          <dd>${movie.budget}</dd>
          <dt>💰 Revenue</dt>
          <dd>${movie.revenue}</dd>
        </dl>
      </div>
    </div>
  );
}

export const Movies = () => {
  const [filters, setFilters] = React.useState(null);

  React.useEffect( ()=> {
    api.getMoviesPopular().then(movieList => setFilters(movieList.results));
  },[]);

  return (
    <>
      <MovieList movieList={filters}/>
    </>
  );
}
