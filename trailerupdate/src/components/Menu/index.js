import React from 'react';

import {withRouter, Link} from 'react-router-dom';
import {SearchBar} from  '../SearchBar';
import {TabBar, Tab} from '@dhis2/ui-core';

import './style.css';

export const Menu = () => {

  return(
    <div>
      <h1>Trailer Update</h1>
      <SearchBar />

    </div>
  );
}

export default withRouter(Menu);

// <TabBar className="tab-bar">
//   <Link to='/movie' className="tab-link">
//     <Tab>
//       Popular
//     </Tab>
//   </Link>
//
//   <Link to='/movie' className="tab-link">
//     <Tab>
//       Trending
//     </Tab>
//   </Link>
//
//   <Link to='/movie' className="tab-link">
//     <Tab>
//       Latest
//     </Tab>
//   </Link>
// </TabBar>
