import React from "react";
import { topJsWords, getRandomInt } from "../../utils";

export const RestartButton = ({
  setCountdown,
  setResults,
  setTextInput,
  setWordToType,
  setStatus,
  children,
}) => {
  return (
    <button
      style={{ flex: 1 }}
      onClick={() => {
        setStatus("idle");
        setCountdown(6);
        setResults({ correct: 0, incorrect: 0 });
        setTextInput("");
        setWordToType(topJsWords[getRandomInt(topJsWords.length)]);
      }}
    >
      {children}
    </button>
  );
};
