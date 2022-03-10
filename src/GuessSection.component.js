import React from 'react';

import './LetterStyles.scss'

function GuessSection(props) {
  const { guess, selectedSpace, setSelectedSpace } = props;

  const renderLetter = (letter, i) => {
    const classes = [selectedSpace === i ? 'selected' : '', 'letter'];
    const className = classes.join(' ').trim()

    return (
      <div className="letter-container" key={i} onClick={() => setSelectedSpace(i)}>
        <span className={className}>{letter}</span>
      </div>
    )
  }

  return (
    <div className="guess-section">
      {guess.map(renderLetter)}
    </div>
  )
}

export default GuessSection;