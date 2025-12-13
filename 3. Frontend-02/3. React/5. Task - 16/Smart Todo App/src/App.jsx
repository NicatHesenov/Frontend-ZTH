import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/İnput/Input";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import Toast from "./components/Toast/Toast";
import Modal from "./components/Modal/Modal";
function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setİnputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);

  const handShowModal = () => {
    setModal(true);
  };
  const showToast = (message) => {
    setToast({ message });

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };
  const handleAddTask = () => {
    if (!inputValue.trim()) return;

    // UPDATE MODE
    if (editId) {
      setTask(
        task.map((t) => (t.id === editId ? { ...t, text: inputValue } : t))
      );

      setEditId(null); // edit bitdi
      setİnputValue(""); // input sıfırlanır
      showToast("Uğurla dəyişdirildi");
      return;
    }

    // ADD MODE
    setTask([...task, { id: Date.now(), text: inputValue, completed: false }]);

    setİnputValue("");
    showToast("Əlavə edildi");
  };
  const handCloseTask = () => {
    if (editId) {
      setTask(
        task.map((t) => (t.id === editId ? { ...t, text: inputValue } : t))
      );

      setEditId(null);
      setİnputValue("");
      return;
    }
    setİnputValue("");
  };
  const handleSaveEdit = (id, text) => {
    setEditId(id);
    setİnputValue(text);
  };

  const handDeletTask = (id) => {
    setTask(task.filter((t) => t.id !== id));
    showToast("Uğurla silindi");
    setModal(null);
  };
  const handCloseModal = () => {
    setModal(null);
  };

  return (
    <>
      <div className="app__container">
        <Header />

        <Input
          inputValue={inputValue}
          setİnputValue={setİnputValue}
          handleAddTask={handleAddTask}
          handCloseTask={handCloseTask}
          editId={editId}
        />

        {task.length > 0 ? (
          <>
            {task.map((t) => (
              <TaskList
                key={t.id}
                task={t}
                handleSaveEdit={handleSaveEdit}
                handShowModal={handShowModal}
              />
            ))}
          </>
        ) : (
          <Task />
        )}
      </div>
      {modal &&
        task.map((t) => (
          <Modal
            key={t.id}
            task={t}
            handDeletTask={handDeletTask}
            handCloseModal={handCloseModal}
          />
        ))}
      {toast && <Toast message={toast.message} />}
    </>
  );
}

export default App;
