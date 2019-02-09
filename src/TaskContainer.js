import React from 'react';


class TaskContainer extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                name: 'Odkurzyc',
                completed: false,
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

    render() {
        return (
            <div>

                {this.state.tasks.map(task => (<p key={`t-${task.id}`}>{task.name}</p>))}

            </div>
        )
    }
}

export default TaskContainer;