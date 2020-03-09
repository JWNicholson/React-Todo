import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: 'Finish this assignment',
    id:1583782428955,
    completed: false
  },
  {
    task: 'Water the yard',
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
    task: ''
  };
}


  //method to update todo state
toggleCompleted = clickedTodoId => {
  this.setState ({
    todos: this.state.todos.map(task => {
      if (task.id === clickedTodoId){
        return {
          task,
          completed: task.completed
        };
      }else{
        return task;
      }
    })
  });
}

//add new task to todos state
addTodo = taskName => {
  
  const newTask = {
    name: taskName,
    id: new Date(),
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newTask]
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
