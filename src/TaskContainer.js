import React from 'react';
import Task from './Task';


const TaskContainer = (props) => (
    <div>

        {props.tasks.map(task =>
            (<Task key={`t-${task.id}`} task={task} handleChange={(event) => props.handleChange(event, task.id)} />
            ))}

    </div>
)

export default TaskContainer;