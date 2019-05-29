import React from 'react';
import './Todo.scss';

const TodoForm = props => {
  const { addTask, clearComplete, formValueChange, inputValue } = props;
  return (
    <div>
      <form onSubmit={addTask}>
        <input placeholder='...todo' onChange={ formValueChange } value={ inputValue }/>
        <button type='submit'>
          Add Todo
        </button>
        <button onClick={ clearComplete }>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
