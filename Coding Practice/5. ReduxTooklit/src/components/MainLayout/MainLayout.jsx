import Cart from "../Cart/Cart";
import ProductList from "../ProductList/ProductList";
import "./mainLayout.css";
function MainLayout() {
  return (
    <div className="container">
      <Cart />
      <ProductList />
    </div>
  );
}

export default MainLayout;
