import { FiShoppingBag } from "react-icons/fi";
import "./productCard.css";

function ProductCard({ name, price, type, imgUrl, onAdd, product }) {
  return (
    <div className="product-cards">
      <img src={imgUrl} alt="" />
      <div className="product-card-content">
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-catagory">{type}</p>
      </div>
      <div className="product-result">
        <p className="product-price">{price} ₼</p>
        <p>
          <FiShoppingBag /> 1 ədəd səbətdə
        </p>
      </div>
      <button className="product-btn" onClick={() => onAdd(product)}>
        + Səbətə Əlavə et
      </button>
    </div>
  );
}

export default ProductCard;
