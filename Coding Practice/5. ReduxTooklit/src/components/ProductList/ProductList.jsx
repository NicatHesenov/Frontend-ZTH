import { addTocart } from "../../carts/cartSlice";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import Laptop from "../../assets/laptop.png";
import Phone from "../../assets/phone.jpg";
function ProductList() {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Laptop", price: 1200, img: Laptop },
    { id: 2, name: "Phone", price: 800, img: Phone },
  ];
  return (
    <div className="productList-container">
      {products.map((item) => (
        <div key={item.id} className="products-content">
          <div className="products">
            <h3>{item.name}</h3>
            <img className="productList-img" src={item.img} alt="" />
            <p>${item.price}</p>
            <button
              className="productList-btn"
              onClick={() => dispatch(addTocart(item))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
