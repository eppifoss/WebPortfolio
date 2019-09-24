import React from 'react';
import * as api from '../api';
import {CircularLoader} from '@dhis2/ui-core';

import './style.css';

import {Trailer} from '../Trailer';
export const  MovieDetails = (props) => {

  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    api.getMovie(props.match.params.id).then(details => setMovie(details));
  }, []);

  if(!movie){
    return <CircularLoader />;
  }

  return (
    <div className="movie-details">
      <div className="poster-info">
          <figure>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </figure>
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="lead-paragraph">{movie.overview}</p>
          </div>
      </div>
      <div className="videos">
        <Trailer trailers={movie.videos.results} />
      </div>
    </div>
  );
}
