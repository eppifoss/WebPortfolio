import React from 'react';

import {withRouter, Link} from 'react-router-dom';


import './style.css';

export const Menu = () => {

  return(
    <div>
      <Link to='/' className="header-link">
        <h1>Trailer Update</h1>
      </Link>
    </div>
  );
}

export default withRouter(Menu);
