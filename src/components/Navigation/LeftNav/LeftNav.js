import React from 'react';

import Aux from '../../../hoc/Aux';
import Link from '../../UI/Link/Link';

const leftNav = props => {
  return (
    <Aux>
      <div className="h-100">
        <div className="mb-5">
          <Link>1ère visite </Link>
          <Link> Lien 2</Link>
          <Link>Lien 3 </Link>
          <Link> Lien 4</Link>
        </div>
        <div>
          <Link>Lien 5</Link>
          <Link>Lien 6</Link>
        </div>
      </div>
    </Aux>
  );
}

export default leftNav;
