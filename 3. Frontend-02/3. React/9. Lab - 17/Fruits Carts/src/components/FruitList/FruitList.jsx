import { useDispatch, useSelector } from "react-redux";
import "./fruitList.css";
import {
  deletAll,
  selectAll,
  toggleİtem,
} from "../../store/slices/fruitsSlices";
import FruitsData from "../data/FruitsData";
function FruitList() {
  const dispatch = useDispatch();
  const { fruitsArr } = useSelector((state) => state.fruitsCart);
  const isSelected = (id) => fruitsArr.some((item) => item.id === id);
  return (
    <div className="fruitList-container">
      <div className="fruitList-content">
        <h2 className="fruitList-title">Meyvə Kartları</h2>
        <div className="fruitList-btn">
          <button className="selectBtn" onClick={() => dispatch(selectAll())}>
            Select All
          </button>
          <button className="deletBtn" onClick={() => dispatch(deletAll())}>
            Delete All
          </button>
        </div>
        <div className="fruitCard-container">
          {FruitsData.map((item) => (
            <div
              key={item.id}
              className={isSelected(item.id) ? "active" : "fruits"}
              onClick={() => dispatch(toggleİtem(item))}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FruitList;
