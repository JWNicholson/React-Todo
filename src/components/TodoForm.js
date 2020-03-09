import React from "react";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <div className="todo-form">
             <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your new to-dos"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                    <button type="submit">
                        Add a todo
                        </button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear completed todos</button>
            </div>
        )
    }
}

export default TodoForm;