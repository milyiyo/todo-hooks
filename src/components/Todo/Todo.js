import React from 'react';

export default function Todo({todo, index, completeTodo, removeTodo}){
    return (
      <div style={{textDecoration: todo.isCompleted ? 'line-through':''}}
        className='todo'>
        {todo.text}
        <div>
          <button onClick={()=> completeTodo(index)}>Complete</button>
          <button onClick={()=> removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }