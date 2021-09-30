import React from "react";
import Task from "../../Task";
import "./AddTaskDialog.css";

class AddTaskDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: props.task,
    };
  }

  render() {
    return (
      <div className="add-task-dialog-background" onClick={this.props.onClose}>
        <div className="add-task-dialog" onClick={(e) => e.stopPropagation()}>
          <form
            id="add-task-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onSubmit(this.state.currentTask);
            }}
          >
            <h1>Add/Edit task</h1>

            <label htmlFor="new-task-title">Title</label>
            <br />
            <input
              id="new-task-title"
              value={this.state.currentTask.title}
              onChange={(e) =>
                this.setState((state) => ({
                  currentTask: new Task(
                    e.target.value,
                    state.currentTask.desc,
                    state.currentTask.key
                  ),
                }))
              }
            />
            <br />

            <label htmlFor="new-task-desc">Description</label>
            <br />
            <input
              id="new-task-desc"
              value={this.state.currentTask.desc}
              onChange={(e) =>
                this.setState((state) => ({
                  currentTask: new Task(
                    state.currentTask.title,
                    e.target.value,
                    state.currentTask.key
                  ),
                }))
              }
            />
            <br />

            <input
              type="submit"
              value="✔"
              id="confirm-add-edit-btn"
              className="add-task-btn"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTaskDialog;
