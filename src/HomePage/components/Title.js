import React from 'react';

function Title(props) {
  return <h2 className={`Title ${props.addClass}`}>{props.text}</h2>;
}

export default Title;
