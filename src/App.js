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
  
 updateTask = (taskId, newValue, field) => {
  const taskIndex = this.state.tasks.findIndex(task => task.id === taskId)
  let task = this.state.tasks[taskIndex];

  task[field] = newValue;

  //Robimy kopie calej tablicy z taskami ze stanu
  const tasks = [...this.state.tasks];
  // Na pozycji ktora znalezlismy podstawiamy zmodyfikowany obiekt
  task[taskIndex] = task;

  this.setState({ tasks: tasks });
 }

  handleChange = (event, taskId) => {

  this.updateTask(taskId, event.target.checked, 'completed');

  }

  handleCreate = (name) => {
    const uniqueId = Math.floor(Math.random() * 10000);
    const tasks = [...this.state.tasks];
    const task = { id: uniqueId, name: name, completed: false };
    tasks.push(task);
    this.setState({ tasks: tasks });
  }

  handleRemove = (taskId) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId)
    const tasks = [...this.state.tasks];

    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });

  }

  handleUpdate = (newName, taskId) => {
   this.updateTask(taskId, newName, 'name');

  }

  render() {
    return (
      <div>
        <CreateTask tasks={this.state.tasks} createHandler={this.handleCreate}></CreateTask>
        <TaskContainer
          tasks={this.state.tasks}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}>
        </TaskContainer>
      </div>
    );
  }
}

export default App;
