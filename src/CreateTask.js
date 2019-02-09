import React from 'react';



class CreateTask extends React.Component {
    
    state = {
        name: '',

    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    keyDown = (event) => {
        if (!this.state.name) {
            return;
        }
        if (event.keyCode === 13) {
            this.props.createHandler(this.state.name);
            this.setState({name: ''});
        }
    }




    render() {
        const styles = {margin: "20px", borderRadius: "5px", fontSize: "20px", width: "600px", height: "50px", padding: "10px"}

        return (
            <div>
                <input  style={styles} type="text" placeholder="Add task" onChange={this.handleChange} onKeyDown={this.keyDown} value={this.state.name}></input>

            </div>
        )
    }
}

export default CreateTask;