import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./taskList.css";
function TaskList({ task, handleSaveEdit, handShowModal }) {
  return (
    <div className="taskList__container">
      <h1>{task.text}</h1>
      <div className="tasklist__editDelet">
        <CiEdit
          className="edit"
          onClick={() => handleSaveEdit(task.id, task.text)}
        />
        <RiDeleteBin5Line className="delet" onClick={handShowModal} />
      </div>
    </div>
  );
}

export default TaskList;
