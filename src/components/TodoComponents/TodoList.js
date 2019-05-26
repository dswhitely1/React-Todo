// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.scss';

const TodoList = ({ tasks, toggleComplete }) => {
	const { task } = tasks;
	return <p>{task}</p>;
};

export default TodoList;
