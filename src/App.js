import React, { useState, useEffect, useCallback } from "react";
import { useWordle } from "./hooks/useWordle";
import WordleGrid from "./components/WordleGrid";
import Keyboard from "./components/keyboard";
import Message from "./components/Message";
import NewGameButton from "./components/newGameButton";
import "./App.css";

function App() {
  const { word, guesses, gameStatus, checkGuess, resetGame } = useWordle();
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyPress = useCallback(
    (key) => {
      if (gameStatus !== "playing") return;

      if (key === "Enter") {
        // Submit the guess
        if (currentGuess.length === 5) {
          checkGuess(currentGuess.toUpperCase());
          setCurrentGuess(""); 
        }
      } else if (key === "Backspace") {
        // Remove the last letter
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[A-Z]$/i.test(key) && currentGuess.length < 5) {
        // Add letter to the current guess
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    },
    [currentGuess, gameStatus, checkGuess]
  );

  // Attach physical keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      handleKeyPress(event.key);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyPress]);

  return (
    <div className="app">
      <h1>Wordle Clone</h1>
      <WordleGrid guesses={guesses} word={word} />
      <Keyboard onKeyPress={handleKeyPress} />
      <Message gameStatus={gameStatus} word={word} />
      <NewGameButton resetGame={resetGame} />
    </div>
  );
}

export default App;
