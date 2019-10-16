import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils"
import StudentQuestions from "../components/StudentQuestions";
import App from "../App";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})



test("Can render properly", () => {
  act(() => {
    ReactDOM.render(<StudentQuestions questions={["Where Am I?", "What year is it?", "What is JS?"]}/>, container);
  })
  const h1 = container.querySelector("h1");
  expect(h1.textContent).toBe("1: Where Am I?");
  const h1Two = container.querySelector("h1:nth-child(2)");
  expect(h1Two.textContent).toBe("2: What year is it?");
  const h1Three = container.querySelector("h1:nth-child(3)");
  expect(h1Three.textContent).toBe("3: What is JS?");
})

test("Updates when a new questions is added", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })

  const input = container.querySelector("input");
  input.value = "Question 1";
  Simulate.change(input);
  Simulate.click(container.querySelector(".ask-button"));
  const h1 = container.querySelector("h1");
  expect(h1.textContent).toBe("1: Question 1");
})