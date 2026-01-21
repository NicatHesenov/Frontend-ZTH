import type { SetURLSearchParams } from "react-router-dom";
import "./buttons.css";
interface ButtonsProps {
  setSearchParams: SetURLSearchParams;
}
function Buttons({ setSearchParams }: ButtonsProps) {
  return (
    <div className="buttons-container">
      <button onClick={(): void => setSearchParams({})}>All</button>
      <button onClick={(): void => setSearchParams({ status: "active" })}>
        Active
      </button>
      <button onClick={(): void => setSearchParams({ status: "graduated" })}>
        Graduated
      </button>
    </div>
  );
}

export default Buttons;
