import "./productCard.css";
function ProductCard({ name, price, discountPrice, isStock, imageUrl }) {
  return (
    <>
      <div className="card-container">
        <img className="img" src={imageUrl} alt="" />
        <h2>{name}</h2>
        <p className="price">
          {discountPrice ? (
            <>
              <span className="old-price">${price}</span>
              <span className="new-price">${discountPrice}</span>
            </>
          ) : (
            <span className="normal-price">${price}</span>
          )}
        </p>
        {isStock ? (
          <button className="addToCard">Add to Cart</button>
        ) : (
          <button className="dutOfStuck">Dut of stuck</button>
        )}
      </div>
    </>
  );
}

export default ProductCard;
