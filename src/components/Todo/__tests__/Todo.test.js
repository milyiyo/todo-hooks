import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Todo from '../Todo';

let container;
const todo = {
  text: 'Learn React',
  isCompleted: false
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

xit('renders the info of a todo', () => {
  // Test first render and effect
  act(() => {
    ReactDOM.render(<Todo todo={todo}/>, container);
  });
  const item = container.querySelector('.todo');
  console.log(item );
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and effect
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});

it('renders without crashing', () => {
  const div = document.createElement('div'); 
  ReactDOM.render(<Todo todo={todo}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
