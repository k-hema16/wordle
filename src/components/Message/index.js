import React from "react";
import "./index.css";

const Message = ({ gameStatus, word }) => {
  if (gameStatus === "playing") return null;

  return (
    <div className={`message ${gameStatus === "won" ? "win" : "lose"}`}>
      {gameStatus === "won" ? "🎉 You Won!" : `❌ Game Over! Word: "${word}"`}
    </div>
  );
};

export default Message;
