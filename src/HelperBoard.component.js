import React, { useState } from 'react';

import AlphabetSection from './AlphabetSection.component';
import Button from './Button.component';
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

  const handleShuffle = () => {
    let result = [...alphabet];
    for (let i = 0; i < result.length; i++) {
      const random = Math.floor(Math.random() * result.length);
      let current = result[i];
      result[i] = result[random];
      result[random] = current;
    }
  
    setAlphabet(result);
  }

  const handleDelete = () => {

  }

  const handleReset = () => {

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

        <Button text="Shuffle" action={handleShuffle} />
        <Button text="Delete" action={handleDelete} />
        <Button text="Reset" action={handleReset} />
    </div>
  )
}

export default HelperBoard;