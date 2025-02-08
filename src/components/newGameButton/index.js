import React from "react";
import "./index.css";

const NewGameButton = ({ resetGame }) => {
  return (
    <button className="new-game-button" onClick={resetGame}>
      New Game
    </button>
  );
};

export default NewGameButton;
