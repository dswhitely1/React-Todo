import React    from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import Table      from 'react-bootstrap/Table';
import TodoSearch from './TodoSearch';
import TodoError  from './TodoError';

const Todo = ({ addTask, toggleComplete, clearComplete, tasks, formValueChange, searchResults }) => {
  const { formValue, id, taskDisplay, searchText,errors } = tasks;
  return (
    <div>
      <TodoSearch searchResults={ searchResults } searchValue={ searchText }/>
      <Table striped bordered hover size="sm" responsive variant="dark">
        <thead>
        <tr>
          <th>ToDo Task</th>
          <th>Date Added</th>
        </tr>
        </thead>
        <tbody>
        { taskDisplay.map((task, i) => <TodoList tasks={ task } key={ i } value={ id }
                                                 toggleComplete={ toggleComplete }/>) }
        </tbody>
      </Table>
      <TodoForm addTask={ addTask } clearComplete={ clearComplete } formValueChange={ formValueChange }
                inputValue={ formValue }/>
      {errors ? <TodoError/> : null}
    </div>
  );
};

export default Todo;
