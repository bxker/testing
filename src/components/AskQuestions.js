import React from "react";

function AskQuestions(props) {
  const [userInput, setUserInput] = React.useState("");

  function updateUserInput(e) {
    setUserInput(e.target.value);
  }

  function askQuestion() {
    props.addQuestion(userInput);
  }

  return (
    <>
      <input onChange={updateUserInput} placeholder="What's your question?" />
      <button className="ask-button" onClick={askQuestion}>
        Ask Question
      </button>
    </>
  );
}

export default AskQuestions;
