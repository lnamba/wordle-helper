import React from 'react';

import './AlphabetStyles.css'

function AlphabetSection(props) {
  const { alphabet, selectedLetter, setSelectedLetter } = props;

  const renderAlphabetLetter = (letter) => {
    const classes = ['letter', letter === selectedLetter ? 'selected' : ''];
    const className = classes.join(' ').trim(); 

    return (
      <div className="alphabet-letter" key={letter} onClick={() => setSelectedLetter(letter)}>
        <span className={className}>{letter}</span>
      </div>
    )
  }
  
  return (
    <div className="alphabet-section">
      {alphabet.map(renderAlphabetLetter)}
    </div>
  )
}

export default AlphabetSection;