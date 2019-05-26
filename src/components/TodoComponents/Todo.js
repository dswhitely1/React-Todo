import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const Todo = props => {
	console.log(props.tasks.task);
	const { addTask, toggleComplete, clearComplete, tasks, formValueChange } = props;
	return (
		<div>
			{tasks.task.map((task, i) => <TodoList tasks={task} key={i} toggleComplete={toggleComplete} />)}
			<TodoForm addTask={addTask} clearComplete={clearComplete} formValueChange={formValueChange} />
		</div>
	);
};

export default Todo;
