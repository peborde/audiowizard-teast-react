import React from 'react';


const link = props => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <div className="btn btn-warning mb-5 ml-3">
            <a href='/'>{props.children}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default link;
