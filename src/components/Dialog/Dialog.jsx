import "./Dialog.css";

function Dialog(props) {
  return (
    <div className="dialog-background" onClick={props.onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

export default Dialog;
