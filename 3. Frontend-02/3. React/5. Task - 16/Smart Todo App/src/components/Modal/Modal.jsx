import "./modal.css";
import { CiWarning } from "react-icons/ci";
function Modal({ task, handDeletTask, handCloseModal }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="main">
          <span>
            <CiWarning className="warnIcon" />
          </span>
          <h2 className="title">Delet Task?</h2>
        </div>
        <p className="text">
          Are you sure you want to delete this task? This action cannot be
          undone
        </p>
        <div className="modalButton-container">
          <button className="cancel" onClick={handCloseModal}>
            Cancel
          </button>
          <button className="deleteTask" onClick={() => handDeletTask(task.id)}>
            Delete Task
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
