import React from 'react';

import './LetterStyles.scss';

function Button(props) {
  const { text, action } = props;

  return (
    <button onClick={action}>{text}</button>
  )
}

export default Button;