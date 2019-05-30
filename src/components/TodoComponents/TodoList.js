// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React       from 'react';
import './Todo.scss';
import * as moment from 'moment';

const TodoList = ({ tasks, toggleComplete }) => {
  const { task, id, completed } = tasks;
  const completedClass = completed ? `completed` : ``;
  const dateFormat = () => moment(id).format('MMM Do YYYY, h:mm:ss a');
  return (
    <tr onClick={ () => toggleComplete(id) }>
      <td className={ `${ completedClass }` }>{ task }</td>
      <td className={ `${ completedClass }` }>{ dateFormat() }</td>
    </tr>
  );
};

export default TodoList;
