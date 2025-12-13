import "./button.css";
function Button({ onClick, disabled, editId, handCloseTask }) {
  return (
    <>
      {editId ? (
        <>
          <button className="btn" onClick={onClick}>
            ✔️ Update
          </button>
          <button className="close" onClick={handCloseTask}>
            Close
          </button>
        </>
      ) : (
        <button className="btn" onClick={onClick} disabled={disabled}>
          + add
        </button>
      )}
    </>
  );
}

export default Button;
