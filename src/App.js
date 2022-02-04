import React, { useState } from "react";

function App() {
  const [wordToType, setWordToType] = useState("product");
  const [textInput, setTextInput] = useState("");

  const match = textInput.includes(wordToType);

  return (
    <div id="app" style={{ padding: "10px 25px", border: "2px solid red" }}>
      <div
        id="game"
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid purple",
          padding: "0 5px",
        }}
      >
        <div
          id="textbox"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            border: "2px solid blue",
            textAlign: "center",
          }}
        >
          {wordToType}
        </div>
        <div id="textinput" style={{ border: "2px solid green" }}>
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          ></input>
        </div>
        <div
          id="results"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            border: "2px solid black",
          }}
        >
          <p>results: {textInput}</p>
          <p>match: {match ? "true" : "false"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
