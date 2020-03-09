import React from "react";


const Todo = ({ todo, toggleCompleted }) => {
    return (
        <div className="todo">
            <p
                className={`todo-text ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleCompleted(todo.id)}
            >
                {todo.task}
            </p>
        </div>
    )
}

export default Todo;