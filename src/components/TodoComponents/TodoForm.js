import React from 'react';
import './Todo.scss';

const TodoForm = props => {
	console.log(props);
	const { addTask, clearComplete, formValueChange } = props;
	return (
		<div>
			<form>
				<input placeholder='...todo' onChange={formValueChange} />
				<button onClick={addTask} type='submit'>
					Add Todo
				</button>
				<button onClick={clearComplete}>Clear Completed</button>
			</form>
		</div>
	);
};

export default TodoForm;
