import React from 'react';
import Todo  from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    super(props);
    this.state = {
      task     : [],
      formValue: '',
      indexTask: 0,
    };
  }

  handleAddTask = e => {
    e.preventDefault();
    const newTask = () => ( { task: this.state.formValue, id: Date.now(), completed: false } );
    this.setState({ task: [...this.state.task, newTask()], formValue: '' });
  };

  handleToggleComplete = e => {
    console.log(e.target.id);
    // Toggle Strikethrough and switch completed to true;
    const updatedTaskList = this.state.task.map(individualTask => {
      if (individualTask.id.toString() === e.target.id) {
        return {
          ...individualTask,
          completed: !individualTask.completed,
        };
      }
      return individualTask;
    });
    this.setState({ task: updatedTaskList });
    e.target.classList.toggle(`completed`);
  };

  handleClearCompleted = e => {
    // Filter Results based on state completed being true
    e.preventDefault();
    const unCompletedTasks = this.state.task.filter(undoneTask => !undoneTask.completed);
    this.setState({ task: unCompletedTasks });
  };

  handleValueChange = e => {
    this.setState({ formValue: e.target.value });
  };

  render () {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo
          addTask={ this.handleAddTask }
          toggleComplete={ this.handleToggleComplete }
          clearComplete={ this.handleClearCompleted }
          formValueChange={ this.handleValueChange }
          tasks={ this.state }
        />
      </div>
    );
  }
}

export default App;
