import "./task.css";
import { FiLayout } from "react-icons/fi";
function Task() {
  return (
    <div className="task__container">
      <FiLayout className="layout" />

      <h2 className="title">No tasks yet</h2>
      <p className="text">Add a task above to get started with your day.</p>
    </div>
  );
}

export default Task;
