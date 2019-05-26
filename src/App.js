import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			task      : [],
			formValue : { value: '' },
		};
	}

	handleAddTask = e => {
		e.preventDefault();
		const newTask = () => ({ task: this.state.formValue.value, id: Date.now(), completed: false });
		this.setState({ task: [ ...this.state.task, newTask() ] });
	};

	handleToggleComplete = e => {
		// Toggle Strikethrough and switch completed to true;
	};

	handleClearCompleted = () => {
		// Filter Results based on state completed being true
	};

	handleValueChange = e => {
		this.setState({ formValue: { value: e.target.value } });
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<Todo
					addTask={this.handleAddTask}
					toggleComplete={this.handleToggleComplete}
					clearComplete={this.handleClearCompleted}
					formValueChange={this.handleValueChange}
					tasks={this.state}
				/>
			</div>
		);
	}
}

export default App;
