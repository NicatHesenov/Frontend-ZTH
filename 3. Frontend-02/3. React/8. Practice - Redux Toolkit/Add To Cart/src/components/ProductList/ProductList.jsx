import "./productList.css";
import Laptop from "../../assets/laptop.png";
import Phone from "../../assets/phone.jpg";
import Playstation from "../../assets/playStation.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlices";

function ProductList() {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Laptop", price: 1200, img: Laptop },
    { id: 2, name: "Phone", price: 1000, img: Phone },
    { id: 3, name: "Playstation", price: 5000, img: Playstation },
  ];
  return (
    <div className="productList-container">
      <div className="productList-centent">
        {products.map((item) => (
          <div key={item.id} className="products">
            <h2 className="prdocuts-name">{item.name}</h2>
            <img className="products-img" src={item.img} alt="" />
            <p className="products-price">Price:{item.price}</p>
            <button
              className="products-btn"
              onClick={() => dispatch(addToCart(item))}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
