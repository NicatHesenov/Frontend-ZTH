import { useSelector } from "react-redux";
import FruitCard from "../FruitCard/FruitCard";

function SelectedFruits() {
  const { fruitsArr } = useSelector((state) => state.fruitsCart);

  return (
    <div className="selectedFruits-container">
      <div className="selectedFruits-content">
        <h2 className="selectedFruits-title">Seçilmiş Meyvələr</h2>
        {fruitsArr.length === 0 ? (
          <p className="selectedFruits-empty">Heç bir meyvə seçilməyib</p>
        ) : (
          <FruitCard data={fruitsArr} />
        )}
      </div>
    </div>
  );
}

export default SelectedFruits;
