import React, { Component } from 'react';
import TaskContainer from './TaskContainer';
import CreateTask from './CreateTask';


class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        name: 'Odkurzyc',
        completed: true,
      },
      {
        id: 2,
        name: 'Okna',
        completed: false,
      },
      {
        id: 3,
        name: 'Zakupy',
        completed: false,
      }]

  };

  handleChange = (event, taskId) => {

    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId)
    let task = this.state.tasks[taskIndex];

    task.completed = event.target.checked;

    //Robimy kopie calej tablicy z taskami ze stanu
    const tasks = [...this.state.tasks];
    // Na pozycji ktora znalezlismy podstawiamy zmodyfikowany obiekt
    task[taskIndex] = task;

    this.setState({ tasks: tasks });

  }

  handleCreate = (name) => {
    const uniqueId = Math.floor(Math.random() * 10000);
    const tasks = [...this.state.tasks];
    const task = {id: uniqueId, name: name, completed: false};
    tasks.push(task);
    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div>
        <CreateTask tasks={this.state.tasks} createHandler={this.handleCreate}></CreateTask>
        <TaskContainer tasks={this.state.tasks} handleChange={this.handleChange}></TaskContainer>
      </div>
    );
  }
}

export default App;
