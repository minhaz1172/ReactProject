import React from 'react';

const ArrayPassProp = (props) => {

  return (
    <>

      <div>
        <li className="list-group-item text-primary" >{props.backendlist}</li>
      </div>
    </>
  );
};

export default ArrayPassProp;
