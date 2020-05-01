import React from 'react';

import Aux from '../../hoc/Aux';
import TopNav from '../Navigation/TopNav/TopNav';
import LeftNav from '../Navigation/LeftNav/LeftNav';
import MainApp from '../../containers/MainApp/MainApp';

const layout = props => {
  return (
    <Aux>
      <TopNav className="mb-16" />
      <div className="row">
        <div className="col-1">
          <LeftNav />
        </div>
          <div className="col-11">
            <MainApp/>
          </div>
      </div>

    </Aux>

  );
}

export default layout;
