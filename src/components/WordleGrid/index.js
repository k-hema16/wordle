import React from "react";
import "./index.css";

const getLetterClass = (letter, index, word) => {
  if (!word.includes(letter)) return "gray";
  if (word[index] === letter) return "green";
  return "yellow";
};

const WordleGrid = ({ guesses, word }) => {
  return (
    <div className="grid-container">
      {Array.from({ length: 6 }).map((_, row) => (
        <div key={row} className="grid-row">
          {Array.from({ length: 5 }).map((_, col) => {
            const letter = guesses[row]?.[col] || "";
            return (
              <div key={col} className={`grid-cell ${letter ? getLetterClass(letter, col, word) : ""}`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WordleGrid;
