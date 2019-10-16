import React from "react";

function StudentQuestions(props) {
  return props.questions.map((val, i) => {
    return (
      <h1 key={i}>
        {i + 1}: {val}
      </h1>
    );
  });
}
export default StudentQuestions;
