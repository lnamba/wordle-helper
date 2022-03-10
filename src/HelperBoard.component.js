import React, { useState } from 'react';

import AlphabetSection from './AlphabetSection.component';
import GuessSection from './GuessSection.component'

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function HelperBoard() {
  const [guess, setGuess] = useState(['','','','','']);
  const [alphabet, setAlphabet] = useState(ALPHABET);
  const [selectedSpace, setSelectedSpace] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState('');

  console.log({guess,selectedLetter, selectedSpace})

  const setGuessedLetter = (letter) => {
    if (selectedSpace <= 4) {
      setSelectedLetter(letter);

      const word = [...guess];
      word[selectedSpace] = letter;
      setGuess(word);
  
      setSelectedSpace(selectedSpace > 4 ? null : selectedSpace + 1);
    }
  }

  return (
    <div>
      <h1>Wordle Helper</h1>
        <h3>A handy tool to help you continue your streak</h3>

        <GuessSection 
          guess={guess} 
          selectedSpace={selectedSpace} 
          setSelectedSpace={setSelectedSpace} 
        />

        <AlphabetSection 
          alphabet={alphabet} 
          selectedLetter={selectedLetter} 
          setSelectedLetter={setGuessedLetter} 
        />
    </div>
  )
}

export default HelperBoard;