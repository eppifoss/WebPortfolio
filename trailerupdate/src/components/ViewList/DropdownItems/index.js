import React from 'react';
import {MenuItem} from '@dhis2/ui-core';
import './style.css';
import * as api from '../../api';

export const DropdownItems = ({setFilters}) => {

  return (
        <div className="menu-items">
        <MenuItem
          className="menu-item"
          label='Popular'
          onClick={e => api.getMoviesPopular().then(movieList => setFilters(movieList.results))}
          value='Popular'
        />
        <MenuItem
          className="menu-item"
          label='In Theaters'
          onClick={e => api.getMoviesNowPlaying().then(movieList => setFilters(movieList.results))}
          value='InTheaters'
        />
        <MenuItem
          className="menu-item"
          label='Upcoming'
          onClick={e => api.getMoviesUpcoming().then(movieList => setFilters(movieList.results))}
          value='Latest'
        />
        <MenuItem
          className="menu-item"
          label='Top Rated'
          onClick={e => api.getMoviesTopRated().then(movieList => setFilters(movieList.results))}
          value='Top Rated'
        />
        </div>
      );

}
