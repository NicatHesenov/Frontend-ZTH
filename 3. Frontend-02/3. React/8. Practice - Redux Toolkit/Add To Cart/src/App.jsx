import "./App.css";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <div className="project-container">
        <Cart />
        <ProductList />
      </div>
    </>
  );
}

export default App;
