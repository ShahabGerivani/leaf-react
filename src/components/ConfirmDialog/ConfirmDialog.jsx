import Dialog from "../Dialog/Dialog";
import "./ConfirmDialog.css";

function ConfirmDialog(props) {
  return (
    <Dialog onClose={props.onNo}>
      <span className="question">{props.question}</span>
      <div className="two-btn-container">
        <button className="add-task-btn confirm-dialog-btn" onClick={props.onYes}>
          Yes
        </button>
        <button className="add-task-btn confirm-dialog-btn" onClick={props.onNo}>
          No
        </button>
      </div>
    </Dialog>
  );
}

export default ConfirmDialog;
