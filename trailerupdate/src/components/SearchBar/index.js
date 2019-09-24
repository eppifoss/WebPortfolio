import React, {useState} from 'react';
import { InputField, Button} from '@dhis2/ui-core';
import './style.css';
import * as api from '../api';

export const SearchBar = ({setFilters}) => {

  const [localText, setLocalText] = useState('');

  const handleChange = (searchtext) => {
    setLocalText(searchtext);
    if(!searchtext) return;
    api.searchMovie(searchtext).then(
      mediaList => setFilters(mediaList.results)
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    api.searchMovie(localText).then(
      mediaList => setFilters(mediaList.results)
    );
    setLocalText('')
  }

  return (
    <div className="search-bar">
      <InputField
        className="search-box"
        label="Search Trailer"
        value={localText}
        name="search-box"
        onChange={ e => handleChange(e.target.value)}
        type="text"
      />
      <Button
        className="search-button"
        onClick={ e => handleClick(e) }>
       Search
      </Button>
    </div>
  );
}
