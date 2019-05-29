import React    from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = ({ addTask, toggleComplete, clearComplete, tasks, formValueChange }) => {
  const { formValue, id } = tasks;
  return (
    <div>
      { tasks.task.map((task, i) => <TodoList tasks={ task } key={ i } value={id} toggleComplete={ toggleComplete }/>) }
      <TodoForm addTask={ addTask } clearComplete={ clearComplete } formValueChange={ formValueChange }
                inputValue={ formValue }/>
    </div>
  );
};

export default Todo;
