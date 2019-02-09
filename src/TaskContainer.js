import React from 'react';
import Task from './Task';


class TaskContainer extends React.Component {

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

this.setState({ tasks: tasks});

 

    }
    

    render() {
        return (
            <div>

                {this.state.tasks.map(task => 
                   ( <Task key={`t-${task.id}`} task={task} handleChange={(event) => this.handleChange(event, task.id)}/>
                    ))}

            </div>
        )
    }
}

export default TaskContainer;