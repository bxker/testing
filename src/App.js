import React from "react";

import AnswerQuestions from "./components/AnswerQuestions";
import AskQuestions from "./components/AskQuestions";
import StudentQuestions from "./components/StudentQuestions";

function App(props) {
  const [questions, setQuestions] = React.useState([]);

  function removeQuestion() {
    let arr = questions.slice();
    arr.shift();
    setQuestions(arr);
  }

  function addQuestion(question) {
    setQuestions([...questions, question]);
  }

  return (
    <>
      <AskQuestions addQuestion={addQuestion} />
      <StudentQuestions questions={questions} />
      <AnswerQuestions removeQuestion={removeQuestion} />
    </>
  );
}

export default App;
