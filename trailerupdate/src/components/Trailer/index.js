import React from 'react';
import './style.css';

export const Trailer = ({trailers}) => {


  return (
    <>
    { trailers.map(trailer => (
      <div className="video">
        <div className="embed-responsive embed-responsive-16by9" key={trailer.key}>>
          <iframe title={trailer.key} className="embed-responsive-item" width="100%" frameBorder="0"
          height="100%" type="text/html" src={`https://www.youtube.com/embed/${trailer.key}?autoplay="0"`}>
          </iframe>
        </div>
        </div>
      )
    )}
    </>
  );
}
