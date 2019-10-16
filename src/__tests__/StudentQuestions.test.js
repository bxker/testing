import React from 'react';
import ReactDOM from 'react-dom';
import StudentQuestions from '../components/StudentQuestions';
import App from '../App';
import {act, Simulate} from 'react-dom/test-utils';

let container = null;

beforeEach(()=> {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(()=> {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
})

test(`StudentQuestions should render properly`, () => {
    act(() => {
        ReactDOM.render(<StudentQuestions questions={["Who are you?", "What are you doing in my lab?", "What is your favorite color?"]}/>, container)
    })

    const firstH1 = document.querySelector('h1:nth-child(1)');
    expect(firstH1.textContent).toBe('1: Who are you?')
    const secondH1 = document.querySelector("h1:nth-child(2)")
    expect(secondH1.textContent).toBe('2: What are you doing in my lab?')
    const thirdH1 = document.querySelector("h1:nth-child(3)")
    expect(thirdH1.textContent).toBe('3: What is your favorite color?')
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