import React from "react";

export const GameResults = ({ match, results, prevResults }) => {
  const total = results.correct + results.incorrect;
  const accuracy = prevResults
    ? (
        (prevResults.correct / (prevResults.correct + prevResults.incorrect)) *
        100
      ).toFixed(2)
    : 0;
  return (
    <div
      id="results"
      style={{
        marginTop: "5px",
        marginBottom: "5px",
        border: "2px solid black",
      }}
    >
      <p>match: {match ? "true" : "false"}</p>
      <p>Total Words: {total}</p>
      <p>correct: {results.correct}</p>
      <p>incorrect: {results.incorrect}</p>
      {prevResults ? (
        <div>
          <h4>Your Last Results</h4>
          <p>WPM: {prevResults.correct}</p>
          <p>Accuracy: {accuracy}</p>
        </div>
      ) : null}
    </div>
  );
};
