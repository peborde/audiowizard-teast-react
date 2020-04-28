import React from 'react';
import AudiowizardLogo from '../../asset/images/audiowizard-logo.png'

const logo = (props) => {
  return(
    <div>
      <img src={AudiowizardLogo} className="w-25 ml-3" alt="audiowizard-logo"/>
    </div>
  );
};

export default logo;
