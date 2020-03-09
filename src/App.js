import React from 'react';
import ReactDom from 'react-dom'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {
    todo: 'Finish this assignment',
    id:1583782428955,
    completed: false
  },
  {
    todo: 'Water the yard',
    id:1583782497409,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
 //stateful constructor
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor(){
  super();
  this.state ={
    todos: todos,
    todo: ''
  };
}


  //method to update todo state
toggleCompleted = clickedTodoId => {
  this.setState ({
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedTodoId){
        return {
          ...todo,
          completed: !todo.completed
        };
      }else{
        return todo;
      }
    })
  });
}

//add new task to todos state
addTodo = todoName => {
  
  const newTodo = {
    name: todoName,
    id: new Date(),
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
};
 
  render() {
   
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
     
      <TodoList 
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
      />
      <TodoForm />
      </div>
    );
  }
}

export default App;
