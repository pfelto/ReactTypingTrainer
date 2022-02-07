import React from "react";

export const GameDisplay = ({ wordToType }) => {
  const markup = wordToType ? (
    <div
      id="textbox"
      style={{
        marginTop: "5px",
        marginBottom: "5px",
        border: "2px solid blue",
        textAlign: "center",
      }}
    >
      {/* Will want to take the string array above and print out 10 words and shift down that as you type later*/}
      {wordToType ? wordToType : null}
    </div>
  ) : null;

  return markup;
};
