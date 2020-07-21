import React from "react";
import "./App.css";
import UserInput from "./components/UserInput.jsx";
import TodoListItem from "./components/TodoList/TodoListItem";
import "antd/dist/antd.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
    };
  }

  handleOnNewTodo(newTOdo) {
    this.setState((state) => {
      return {
        toDos: [newTOdo, ...state.toDos],
      };
    });
  }

  render() {
    let todoList = [];
    this.state.toDos.forEach((dict) => {
      todoList.push(dict["toDoTask"]);
    });
    return (
      <div className="App">
        <UserInput onNewToDO={(newTodo) => this.handleOnNewTodo(newTodo)} />
        <TodoListItem todoList={todoList} />
      </div>
    );
  }
}

export default App;
