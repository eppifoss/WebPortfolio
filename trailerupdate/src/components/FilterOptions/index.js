import React from 'react';

import {ButtonStrip, Button, Chip} from '@dhis2/ui-core';

export const FilterOptions = ({filterList, setFilterList}) => {

    return (
      <>
        <ButtonStrip>
          <Chip  onRemove={() => console.log('remove')}>Upcoming</Chip>
          <Chip>Popular</Chip>
          <Chip>Trending</Chip>
          <Chip>Latest</Chip>
        </ButtonStrip>
      </>
    );
}
