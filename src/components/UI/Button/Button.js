import React from 'react';

const button = props => {
  return (
    <div className="btn btn-info mr-3"> {props.children}</div>
  );
}

export default button;
