import React from 'react';
import * as api from '../api';


export const Trailer = ({trailers}) => {

  return (
    <>
    {trailers.map(trailer =>
      <iframe width="420" height="345" src={`https://www.youtube.com/embed/${trailer.key}?controls=0`}>
      </iframe>
    )}
    </>
  );
}
