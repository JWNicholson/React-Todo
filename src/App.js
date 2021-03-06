import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
         task: 'Water the yard',
         id: Date.now(),
         completed: false
        }
      ]
    }
  }

  addTodo = task => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: task,
          id: Date.now(),
          completed: false
        }]
    })
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed }:todo
      )
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {

    return (
      <div>
      <div className="mainWrapper">
        <h2>Welcome to your Todo App!</h2>
         <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
         </div>
         <TodoForm 
         addTodo={this.addTodo}
         clearCompleted={this.clearCompleted} 
         />
      </div>
    );
  }
}

export default App;