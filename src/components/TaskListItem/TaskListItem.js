import { faEllipsisV, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TaskListItem.css";

// Compontent for showing tasks as a list in app
function TaskListItem(props) {
  return (
    <li
      className={
        props.task.completed
          ? "task-list-item task-list-item-completed"
          : "task-list-item"
      }
      onClick={props.onClick}
    >
      <div className="task-texts">
        <div id="task-title">{props.task.title}</div>
        <div id="task-desc">{props.task.desc}</div>
      </div>
      <div className="task-actions">
        <i
          id="delete-task-action"
          onClick={(e) => {
            e.stopPropagation();
            props.onDelete(props.task);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
        <input
          id="check-task-action"
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
            props.onCheck(props.task.completed, props.task);
          }}
          defaultChecked={props.task.completed}
        />
      </div>
      <div className="task-actions-collapsed">
        <i id="show-actions-btn">
          <FontAwesomeIcon icon={faEllipsisV} />
        </i>
      </div>
    </li>
  );
}

export default TaskListItem;
