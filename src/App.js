import React from "react";
import "./App.css";
import AddTaskDialog from "./components/AddTaskDialog/AddTaskDialog";

//  The main class for this project
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This is here to control when to show the dialog to add or edit a task
      addTask: false,
      // This is used to load tasks
      tasksCount: localStorage.length - 1,
    };
  }

  // Function to save tasks
  saveTask = (task) => {
    // Setting up a key to keep track of tasks ( and to list them )
    if (localStorage.getItem("key") != null) {
      localStorage.setItem("key", 0);
    }
    const key = Number.parseInt(localStorage.getItem("key"));

    localStorage.setItem(key, JSON.stringify(task));
    localStorage.setItem("key", key + 1);
    this.setState((state, _) => ({tasksCount: state.tasksCount + 1}));
  }

  render() {
    return (
      <div className="app">
        {this.state.addTask && (
          <AddTaskDialog onClose={() => this.setState({ addTask: false })} />
        )}
        <nav>Leaf</nav>
        <button
          className="add-task-btn"
          onClick={() => {
            this.setState({ addTask: true });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
