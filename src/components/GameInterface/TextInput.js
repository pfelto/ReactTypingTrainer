import React from "react";

export const TextInput = ({ textInput, handleChange, status }) => {
  return (
    <input
      style={{ flex: 6 }}
      type="text"
      value={textInput}
      onChange={(e) => handleChange(e)}
      disabled={status === "complete"}
    ></input>
  );
};
