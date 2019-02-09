import React from 'react';



class CreateTask extends React.Component {

    state = {
        name: '',

    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    keyDown = (event) => {
        if (event.keyCode === 13) {
            this.props.createHandler(this.state.name);
        }
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Add task" onChange={this.handleChange} onKeyDown={this.keyDown}></input>

            </div>
        )
    }
}

export default CreateTask;