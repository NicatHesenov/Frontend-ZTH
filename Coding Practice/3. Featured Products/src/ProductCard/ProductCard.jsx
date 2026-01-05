import "./productCard.css";
import ProductData from "../data/productData";
function ProductCard() {
  return (
    <div className="products-container">
      {ProductData.map((item) => (
        <div key={item.id} className="products">
          <h1 className="title">{item.name}</h1>
          <img src={item.imageUrl} alt="" />
          <div className="prices">
            {item.discountPrice ? (
              <>
                <p className="discountPrice">${item.discountPrice}</p>
                <p className="price">${item.price}</p>
              </>
            ) : (
              <p>${item.price}</p>
            )}
          </div>

          {item.isStock ? (
            <button className="product-btn">Add To Cart</button>
          ) : (
            <button className="disabl">Out of Stock</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
