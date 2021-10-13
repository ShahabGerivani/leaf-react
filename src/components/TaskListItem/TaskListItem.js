import { faEllipsisV, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./TaskListItem.css";

// Compontent for showing tasks as a list in app
function TaskListItem(props) {
  // Variable to control when to show the actions (if they are collapsed)
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      // console.log(e.target.parentNode.parentNode.className);
      if (e.target.parentNode.className !== "actions-box") {
        setShowActions(false);
      }

      return () => {
        document.removeEventListener("mousedown");
      };
    });
  });

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
          className="delete-task-action"
          onClick={(e) => {
            e.stopPropagation();
            props.onDelete(props.task);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
        <input
          className="check-task-action"
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
            props.onCheck(props.task.completed, props.task);
          }}
          defaultChecked={props.task.completed}
        />
      </div>
      {/* ! Removed */}
      {/* <div className="task-actions-collapsed">
        <i
          className="show-actions-btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowActions(!showActions);
          }}
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </i>
        {showActions && (
          <span className="actions-box">
            <i
              className="delete-task-action"
              onClick={(e) => {
                e.stopPropagation();
                props.onDelete(props.task);
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </i>
            <input
              className="check-task-action"
              type="checkbox"
              onClick={(e) => {
                e.stopPropagation();
                props.onCheck(props.task.completed, props.task);
              }}
              defaultChecked={props.task.completed}
            />
          </span>
        )}
      </div> */}
    </li>
  );
}

export default TaskListItem;
