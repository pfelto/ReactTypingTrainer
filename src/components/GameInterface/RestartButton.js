import React from "react";

export const RestartButton = ({ handleReset, children }) => {
  return (
    <button
      style={{ flex: 1 }}
      onClick={() => {
        handleReset();
      }}
    >
      {children}
    </button>
  );
};
