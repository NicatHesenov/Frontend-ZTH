import Button from "../Button/Button";
import "./input.css";
function Input({
  handleAddTask,
  inputValue,
  setİnputValue,
  editId,
  handCloseTask,
}) {
  const isButtonDisabled = inputValue.trim().length === 0;

  return (
    <>
      <div className="input__contianer">
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setİnputValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <Button
          onClick={handleAddTask}
          handCloseTask={handCloseTask}
          disabled={isButtonDisabled}
          editId={editId}
        />
      </div>
    </>
  );
}

export default Input;
