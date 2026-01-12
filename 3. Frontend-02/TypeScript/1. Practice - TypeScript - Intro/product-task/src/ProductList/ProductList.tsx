import "./productList.css";
import productData from "../Data/Data";
function ProductList() {
  return (
    <div className="product-container">
      {productData.map((item) => (
        <div key={item.id} className="products">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          {item.inStock ? (
            <p className="inStock">In Stock</p>
          ) : (
            <p className="outStock">Out of Stock</p>
          )}
          <button className="btn">Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
