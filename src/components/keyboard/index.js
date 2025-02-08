import React from "react";
import "./index.css";

const keys = "QWERTYUIOP ASDFGHJKL ZXCVBNM".split(" ");

const Keyboard = ({ onKeyPress }) => {
  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.split("").map((key) => (
            <button key={key} className="key" onClick={() => onKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
