import React, { Component } from 'react';
import TodoBtns from './TodoBtns';
import FlipMove from "react-flip-move";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newTask: 'Task number',
      todos: []
    };
  }

  addTask = () => {
    this.setState({
      newTask: 'Task number',
      todos: [...this.state.todos, {
        title: this.state.newTask
      }]
    });
  }

  removeLastTask = () => {
    const todos = [...this.state.todos];
    todos.splice(0, 1)
    this.setState({
      todos
    });
  }

  clearAllTask = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index)
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-header">TODO App</h1>

        <TodoBtns
          addTask={this.addTask.bind(this)}
          removeLastTask={this.removeLastTask.bind(this)}
          clearAllTask={this.clearAllTask.bind(this)} />

        <ul className="list">
          <FlipMove className="flip-move" duration={250} easing="ease-out">
            {this.state.todos.map((todo, index) => {
              return (<li className="list-item" key={index++}>
                <span>{todo.title}{' ' + index}</span>
              </li>)
            })}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default App;
