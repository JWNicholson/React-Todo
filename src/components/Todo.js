import React from "react";
import "./Todo.css";


const Todo = ({ todo, toggleCompleted }) => {
    return (
        <div className="todo">
            <p
                className={`todotext ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleCompleted(todo.id)}
            >
                {todo.task}
            </p>
        </div>
    )
}

export default Todo;