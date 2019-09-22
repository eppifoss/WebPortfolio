import React, {useState} from 'react';

import {InputField} from '@dhis2/ui-core';

export const SearchBar = () => {

  const [text, setText] = useState('');

  return (
    <>
      <InputField

        label="Search Trailer"
        value={text}
        name="search-box"
        onChange={ _ref => setText(_ref.target.value)}
        type='text'
      />
      <h4>{text}</h4>
    </>
  );
}
