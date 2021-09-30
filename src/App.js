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
      tasks: this.loadTasks(),
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

    this.setState({ tasks: this.loadTasks() });
  };

  // Function to load tasks
  loadTasks() {
    let tasksList = [];
    let completedTasksList = [];
    const tasksCount = localStorage.getItem("key");
    if (tasksCount !== null) {
      for (let k = 0; k < tasksCount; k++) {
        const theTask = JSON.parse(localStorage.getItem(k));
        if (theTask !== null) {
          const theTaskListItem = (
            <TaskListItem
              task={theTask}
              key={theTask.key}
              onClick={() =>
                this.setState({ addEditTask: true, taskToEdit: theTask })
              }
              onCheck={(isTaskCompleted, task) => {
                if (isTaskCompleted) {
                  task.completed = false;
                } else {
                  task.completed = true;
                }
                this.saveTask(task);
              }}
              onDelete={(task) => {
                localStorage.removeItem(task.key);
                this.setState({ tasks: this.loadTasks() });
              }}
            />
          );
          if (theTask.completed) {
            completedTasksList.push(theTaskListItem);
          } else {
            tasksList.push(theTaskListItem);
          }
        }
      }
    }

    return tasksList.concat(completedTasksList);
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
        <ul id="tasks-list">{this.state.tasks}</ul>
        <button
          className="add-task-btn"
          onClick={() => {
            this.setState({ addEditTask: true, taskToEdit: new Task() });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
