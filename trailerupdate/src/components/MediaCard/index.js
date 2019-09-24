import React from 'react';
import './style.css';

export const MediaCard = (movie) => {

  return (
      <div className="movie-card poster"
        style={{
          backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.bg})`,
        }}
      >
        <div className="movie-info">
          <h3>{movie.title}</h3>
        </div>
    </div>
  );
}
