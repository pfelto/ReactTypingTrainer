import React from "react";

export const GameInterface = ({ children }) => {
  return (
    <div
      id="inputbox"
      style={{
        border: "2px solid green",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
