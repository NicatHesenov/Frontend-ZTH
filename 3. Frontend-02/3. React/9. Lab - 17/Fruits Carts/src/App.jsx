import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import SelectedFruits from "./components/SelectedFruits/SelectedFruits";

function App() {
  return (
    <>
      <h1 className="header-title">Meyvə Seçmə Tətbiqi</h1>
      <div className="container">
        <FruitList />
        <SelectedFruits />
      </div>
    </>
  );
}

export default App;
