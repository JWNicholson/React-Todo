import React from "react";
import { Button, Form } from 'reactstrap';

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
             <Form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your new to-dos"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                    <Button color="info" type="submit">
                        Add a todo
                        </Button>
                </Form>
                <Button color="danger" onClick={this.props.clearCompleted}>Clear completed to-dos</Button>
            </div>
        )
    }
}

export default TodoForm;