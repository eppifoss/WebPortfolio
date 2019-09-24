import React from 'react';

import './style.css';

import {SearchBar} from  '../SearchBar';
import {MediaList} from '../MediaList';
import {ViewList} from '../ViewList';

import * as api from '../api';



export const Media = () => {
  const [filters, setFilters] = React.useState(null);

  React.useEffect( ()=> {
      api.getMoviesPopular().then(movieList => setFilters(movieList.results));
  },[]);


  return (
    <>
      <div>
        <SearchBar setFilters={setFilters} />
        <ViewList setFilters={setFilters}/>
      </div>
      <MediaList movieList={filters}/>
    </>
  );
}
