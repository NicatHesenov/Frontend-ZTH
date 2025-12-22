import ProductCard from "../ProductCard/ProductCard";
import "./productList.css";
import { BsBoxSeam } from "react-icons/bs";

function ProdcutList({ product, onAdd }) {
  return (
    <div className="product-container">
      <div className="product-header">
        <h2 className="product-title">Bütün Məhsullar</h2>
        <div className="product-info">
          <BsBoxSeam className="product-icon" />
          <p className="product-text">{product.length} məhsul mövcuddur</p>
        </div>
      </div>
      <div className="product-cards-container">
        {product.map((pro) => (
          <ProductCard
            key={pro.id}
            name={pro.name}
            price={pro.price}
            type={pro.type}
            imgUrl={pro.imgUrl}
            product={pro}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}

export default ProdcutList;
