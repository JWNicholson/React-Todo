import React from "react";
import "./Todo.css";
import { FormGroup } from "reactstrap";


const Todo = ({ todo, toggleCompleted }) => {
    return (
        <div className="todo">
            <FormGroup>
            <p
                className={`todotext ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleCompleted(todo.id)}
            >
                {todo.task}
            </p>
            </FormGroup>
        </div>
    )
}

export default Todo;