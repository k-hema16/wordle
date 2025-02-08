import { useState } from "react";

const WORDS = ["REACT", "LOGIC", "STACK", "DEBUG", "GAMES"];
const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

export const useWordle = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");

  const checkGuess = (guess) => {
    if (guess.length !== 5 || guesses.length >= 6 || gameStatus !== "playing") return;
    
    setGuesses([...guesses, guess]);

    if (guess === word) setGameStatus("won");
    else if (guesses.length + 1 === 6) setGameStatus("lost");
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setGameStatus("playing");
  };

  return { word, guesses, gameStatus, checkGuess, resetGame };
};
