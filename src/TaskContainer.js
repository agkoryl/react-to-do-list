import React from 'react';
import Task from './Task';

const styles = {margin: "10px"}

const TaskContainer = (props) => (

    <div style={styles}>

        {props.tasks.map(task =>
            (<Task
                key={`t-${task.id}`}
                task={task}
                handleChange={(event) => props.handleChange(event, task.id)}
                handleRemove={() => props.handleRemove(task.id)} 
                handleUpdate={(newName) => props.handleUpdate(newName, task.id)}/>
            ))}

    </div>
)

export default TaskContainer;