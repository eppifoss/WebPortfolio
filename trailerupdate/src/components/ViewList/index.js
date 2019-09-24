
import React from 'react';
import {DropdownButton} from '@dhis2/ui-core';
import './style.css';
import {DropdownItems} from './DropdownItems';

export const ViewList = ({setFilters}) => {
  return (
    <>
        <DropdownButton
        className="menu"
          component={
          <DropdownItems setFilters={setFilters}/>
          }
          name="Button"
          secondary
          value="default"
        >
        View
      </DropdownButton>
    </>
  );
}
