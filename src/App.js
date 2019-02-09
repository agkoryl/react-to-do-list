import React, { Component } from 'react';
import TaskContainer from './TaskContainer';
import CreateTask from './CreateTask';


class App extends Component {
  render() {
    return (
      <div>
        <CreateTask></CreateTask>
        <TaskContainer></TaskContainer>
      </div>
    );
  }
}

export default App;
