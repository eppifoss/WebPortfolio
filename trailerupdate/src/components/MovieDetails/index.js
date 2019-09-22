import React from 'react';
import * as api from '../api';
import {CircularLoader} from '@dhis2/ui-core';

import {Trailer} from '../Trailer';

export const  MovieDetails = (props) => {

  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    api.getMovie(props.match.params.id).then(details => setMovie(details));
  },[]);

  if(!movie){
    return <CircularLoader />;
  }


  return (
    <div>
      <div>
        <h2>{movie.title}</h2>
        <figure>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </figure>
      </div>

      <div className="movie-details">
        <p className="lead-paragraph">{movie.overview}</p>
        <dl>
          <dt>⏱Runtime</dt>
          <dd>{movie.runtime} minutes</dd>
          <dt>💸 Budget</dt>
          <dd>${movie.budget}</dd>
          <dt>💰 Revenue</dt>
          <dd>${movie.revenue}</dd>
        </dl>
      </div>

      <div className='videos'>
        <Trailer trailers={movie.videos.results} />
      </div>

    </div>
  );
}
