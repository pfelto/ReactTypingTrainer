import React, { useState } from "react";

const topJsWords = [
  "<div></div>",
  "import",
  "useState",
  "export",
  "function",
  `("")`,
  ".includes",
  "variable;",
  "return",
  "useEffect",
  "useReducer",
  `fetch("url");`,
  ".then()",
  "padding:",
  "default",
  `@testing-library/jest-dom`,
  "product",
  "price",
  "example",
  "America",
  `don't`,
  "style={{}}",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [wordToType, setWordToType] = useState(
    topJsWords[getRandomInt(topJsWords.length)]
  );
  const [textInput, setTextInput] = useState("");
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });
  const match = textInput.includes(wordToType);

  function handleChange(e) {
    if (textInput === "" && e.target.value === " ") {
      return;
    }
    if (e.target.value.includes(" ")) {
      //logic to check if the words are right or wrong and add to the list
      //clear input text and get a new word
      textInput.includes(wordToType)
        ? setResults({ ...results, correct: results.correct + 1 })
        : setResults({ ...results, incorrect: results.incorrect + 1 });
      setWordToType(topJsWords[getRandomInt(topJsWords.length)]);
      setTextInput("");
      return;
    }
    setTextInput(e.target.value);
  }

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
          {/* Will want to take the string array above and print out 10 words and shift down that as you type later*/}
          {wordToType}
        </div>
        <div id="inputbox" style={{ border: "2px solid green" }}>
          <input
            type="text"
            value={textInput}
            onChange={(e) => handleChange(e)}
          ></input>
          <button
            onClick={() => {
              //can either manually restart everything using set or create a new instance of the game react component by giving it a new key
              setTextInput("");
              setResults({ correct: 0, incorrect: 0 });
              setWordToType(topJsWords[getRandomInt(topJsWords.length)]);
            }}
          >
            restart
          </button>
        </div>
        <div
          id="results"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            border: "2px solid black",
          }}
        >
          <p>input: {textInput}</p>
          <p>match: {match ? "true" : "false"}</p>
          <p>Total Words: {results.correct + results.incorrect}</p>
          <p>correct: {results.correct}</p>
          <p>incorrect: {results.incorrect}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
