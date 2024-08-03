import React from 'react';
import ArrayPassProp from './Array-props';

const PropMain = (props) => {
  const backend1 = ["Python/Javascript", "Django/Node", "Mongo/Sql"];
  const backendTitle = "This is the fundamental list for backend web development";

  return (
    <>
      <h1 className='title'>{props.title1}</h1>
      <h4>{backendTitle}</h4>
      <ul className="list-group">
        {backend1.map((item) => (
          <ArrayPassProp key={item} backendlist={item} />
        ))}
      </ul>
    </>
  );
};

export default PropMain;
