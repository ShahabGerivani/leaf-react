import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TaskListItem.css";

// Compontent for showing tasks as a list in app
function TaskListItem(props) {
  return (
    <li className="task-list-item" onClick={props.onClick}>
      <div className="task-texts">
        <div id="task-title">{props.taskTitle}</div>
        <div id="task-desc">{props.taskDesc}</div>
      </div>
      <div className="task-actions">
        <i id="delete-task-action">
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
        <input
          id="check-task-action"
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
            // props.onCheck();
          }}
        />
      </div>
    </li>
  );
}

export default TaskListItem;
