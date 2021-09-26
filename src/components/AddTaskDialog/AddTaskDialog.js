import React from "react";
import "./AddTaskDialog.css";

class AddTaskDialog extends React.Component {
  render() {
    return (
      <div className="add-task-dialog-background" onClick={this.props.onClose}>
        <div className="add-task-dialog" onClick={(e) => e.stopPropagation()}>
          <form id="add-task-form">
            <h1>Add/Edit task</h1>

            <label htmlFor="new-task-title">Title</label>
            <br />
            <input id="new-task-title" value={this.props.title} />
            <br />

            <label htmlFor="new-task-desc">Description</label>
            <br />
            <input id="new-task-desc" value={this.props.desc} />
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
