import React from 'react';



class Task extends React.Component {

	state = {
		editMode: false,
		name: ''
	}

	handleClick = () => {
		this.setState({ editMode: true, name: this.props.task.name });
	}

	handleChange = (event) => {
		this.setState({ name: event.target.value })
	}

	keyDown = (event) => {
		if (!this.state.name) {
			return;
		}
		if (event.keyCode === 13) {
			this.props.handleUpdate(this.state.name);
			this.setState({ name: '' , editMode: false});
		}
	}

	renderTask() {
		if (this.state.editMode) {
			return (<input type="text"
				defaultValue={this.props.task.name}
				onChange={this.handleChange}
				onKeyDown={this.keyDown} />);
		}
		return <span onClick={this.handleClick}>{this.props.task.name}</span>
	}

	render() {

		const inputStyles = { margin: '10px', fontSize: '20px' };
		const buttonStyles = { margin: '5px' };
		const styles = this.props.task.completed ? { textDecoration: 'line-through', fontSize: "20px" } : { fontSize: "20px" };
		return (
			<div style={inputStyles}>
				<p style={styles}>
					<input type="checkbox" checked={this.props.task.completed} onChange={this.props.handleChange} />
					{this.renderTask()}
					<button
						type="button"
						style={buttonStyles}
						onClick={this.props.handleRemove}>x</button>
				</p>

			</div>
		)
	}
}

export default Task;