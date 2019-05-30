import React from 'react';
import Todo  from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    super(props);
    this.state = {
      task       : [],
      formValue  : '',
      searchText : '',
      taskDisplay: [],
      errors     : false,
    };
  }
  componentDidMount () {
    if (localStorage.getItem('tasks') !== null) {
      const tasks=JSON.parse(localStorage.getItem('tasks'));
      this.setState({task:tasks,taskDisplay:tasks});
    }
  }


  handleSearchChange = e => {
    const displayFilteredResults = e.target.value === '' ? this.state.task : this.state.task.filter(results => results.task.includes(e.target.value));
    this.setState({ searchText: e.target.value, taskDisplay: displayFilteredResults });
  };

  handleAddTask = e => {
    e.preventDefault();
    if (this.state.formValue === '') {
      this.setState({ errors: true });
      return;
    }
    const newTask = () => ( { task: this.state.formValue, id: Date.now(), completed: false } );
    const newTaskList = [ ...this.state.task, newTask() ];
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    const newTaskDisplay = this.state.searchText === '' ? newTaskList : this.state.task.filter(results => results.task.includes(this.state.searchText));
    this.setState({ task: newTaskList, taskDisplay: newTaskDisplay, formValue: '' });
    // this.setState(prevState => ( { task: [ ...prevState.task, newTask() ] } ));

  };

  handleToggleComplete = id => {
    console.log(id);
    // Toggle Strikethrough and switch completed to true;
    const updatedTaskList = this.state.task.map(individualTask => {
      if (individualTask.id === id) {
        return {
          ...individualTask,
          completed: !individualTask.completed,
        };
      }
      return individualTask;
    });
    localStorage.setItem('tasks',JSON.stringify(updatedTaskList));
    this.setState({ task: updatedTaskList, taskDisplay: updatedTaskList });

  };

  handleClearCompleted = e => {
    // Filter Results based on state completed being true
    e.preventDefault();
    const unCompletedTasks = this.state.task.filter(undoneTask => !undoneTask.completed);
    localStorage.setItem('tasks',JSON.stringify(unCompletedTasks));
    this.setState({ task: unCompletedTasks, taskDisplay: unCompletedTasks });
  };

  handleValueChange = e => {
    this.setState({ formValue: e.target.value, errors: false });
  };

  render () {
    return (
      <div className='container text-center'>
        <h2>Welcome to your Todo App!</h2>
        <Todo
          addTask={ this.handleAddTask }
          toggleComplete={ this.handleToggleComplete }
          clearComplete={ this.handleClearCompleted }
          formValueChange={ this.handleValueChange }
          searchResults={ this.handleSearchChange }
          tasks={ this.state }
        />
      </div>
    );
  }
}

export default App;
