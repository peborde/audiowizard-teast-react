import React from 'react';

import Aux from '../../../hoc/Aux';
import Logo from '../../Logo/Logo';
import Button from '../../UI/Button/Button';


const topNav = props => {
  return (
    <Aux>
      <div className="container-fluid mb-5">
        <div className="d-flex justify-content-between">
          <div className="w-25"><Logo/></div>
            <div className="d-flex align-self-center">
              <Button>Mon Compte</Button>
            </div>
          </div>
        </div>
    </Aux>
  )
};

export default topNav;
