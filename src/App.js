import React from "react";
import "./App.css";
import AddTaskDialog from "./components/AddTaskDialog/AddTaskDialog";
import TaskListItem from "./components/TaskListItem/TaskListItem";
import Task from "./Task";

//  The main class for this project
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This is here to control when to show the dialog to add or edit a task
      addEditTask: false,
      // This is used to load tasks
      tasksCount: localStorage.length,
      // This object is for tracking the currently editing task (title and description are null if the user wants to make a new task)
      taskToEdit: new Task(),
    };
  }

  // Function to save tasks
  saveTask = (task) => {
    // Setting up a key to keep track of tasks ( and to list them )
    if (localStorage.getItem("key") === null) {
      localStorage.clear();
      localStorage.setItem("key", 0);
    }
    const key = Number.parseInt(localStorage.getItem("key"));

    // Give a new key to a new task
    if (task.key === null) {
      task.key = key;
      localStorage.setItem("key", key + 1);
    }

    localStorage.setItem(task.key, JSON.stringify(task));

    this.setState((state, _) => ({ tasksCount: state.tasksCount + 1 }));
  };

  // Function to load tasks
  loadTasks(tasksCount) {
    let tasksList = [];
    for (let k = 0; k < tasksCount; k++) {
      const theTask = JSON.parse(localStorage.getItem(k));
      if (theTask !== null) {
        tasksList.push(
          <TaskListItem
            taskTitle={theTask.title}
            taskDesc={theTask.desc}
            key={theTask.key}
            onClick={() =>
              this.setState({ addEditTask: true, taskToEdit: theTask })
            }
          />
        );
      }
    }

    return tasksList;
  }

  render() {
    return (
      <div className="app">
        {this.state.addEditTask && (
          <AddTaskDialog
            onClose={() => this.setState({ addEditTask: false })}
            task={this.state.taskToEdit}
            onSubmit={(task) => {
              this.saveTask(task);
              this.setState({ addEditTask: false });
            }}
          />
        )}
        <nav>Leaf</nav>
        <ul id="tasks-list">{this.loadTasks(this.state.tasksCount)}</ul>
        <button
          className="add-task-btn"
          onClick={() => {
            this.setState({ addEditTask: true });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
