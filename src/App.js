import React, { useState } from "react";
import { useCountdown } from "./hooks/useCountdown";
import { GameDisplay } from "./components/GameDisplay";
import { topJsWords, getRandomInt } from "./utils";
import { GameResults } from "./components/GameResults";
import { TextInput } from "./components/GameInterface/TextInput";
import { RestartButton } from "./components/GameInterface/RestartButton";
import { GameInterface } from "./components/GameInterface/GameInterface";

function App() {
  const [status, setStatus] = useState("idle");
  const [wordToType, setWordToType] = useState(
    topJsWords[getRandomInt(topJsWords.length)]
  );
  const [textInput, setTextInput] = useState("");
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });
  const [prevResults, setPrevResults] = useState(null);

  const { countdown, setCountdown } = useCountdown(status);

  if (countdown === 0 && status !== "complete") {
    setStatus("complete");
    setTextInput("");
    setWordToType("");
    setPrevResults(results);
  }

  const match = wordToType ? textInput.includes(wordToType) : null;

  function handleChange(e) {
    if (textInput === "" && e.target.value === " ") {
      return;
    }

    if (e.target.value.includes(" ")) {
      if (status === "complete") {
        setTextInput("");
        return;
      }
      textInput.includes(wordToType)
        ? setResults({ ...results, correct: results.correct + 1 })
        : setResults({ ...results, incorrect: results.incorrect + 1 });
      setWordToType(topJsWords[getRandomInt(topJsWords.length)]);
      setTextInput("");
      return;
    }
    if (status === "idle" && countdown > 0) setStatus("active");
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
        <GameDisplay wordToType={wordToType} />
        <GameInterface>
          <TextInput
            textInput={textInput}
            handleChange={handleChange}
            status={status}
          />
          <div id="timer" style={{ paddingLeft: "2em", paddingRight: "2em" }}>
            {countdown}
          </div>
          <RestartButton
            setCountdown={setCountdown}
            setResults={setResults}
            setTextInput={setTextInput}
            setWordToType={setWordToType}
            setStatus
          >
            Refresh
          </RestartButton>
        </GameInterface>
        <GameResults
          match={match}
          results={results}
          prevResults={prevResults}
        />
      </div>
    </div>
  );
}

export default App;
